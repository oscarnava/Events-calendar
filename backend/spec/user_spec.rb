# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users management', type: :request do
  let!(:headers) do
    {
      'ACCEPT' => 'application/json',     # This is what Rails 4 accepts
      'HTTP_ACCEPT' => 'application/json' # This is what Rails 3 accepts
    }
  end

  it 'Creates a new user' do
    User.find_by_name('user01')&.delete

    post '/users?name=user01&email=user01@test.com', headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)
    expect(resp['status']).to eq('ok')
    expect(resp['payload']).to be

    user = resp['payload']
    expect(user).to include('name' => 'user01', 'email' => 'user01@test.com')
    expect(user['id']).to be
  end

  it 'Get the user by name' do
    user = User.all.last
    Event.all.each { |event| user.userevents.create(event: event) }

    get "/users/#{user.name}", headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)
    expect(resp['status']).to eq('ok')
    expect(resp['payload']).to be

    payload = resp['payload']
    expect(payload['name']).to eq(user.name)
    expect(payload['userevents']).to be

    userevents = JSON.parse(user.userevents.to_json)

    payload['userevents'].each_with_index do |usrevt, idx|
      expect(userevents[idx]).to include(usrevt)
    end
  end
end
