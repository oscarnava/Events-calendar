# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users management', type: :request do
  let!(:headers) do
    {
      'ACCEPT' => 'application/json',     # This is what Rails 4 accepts
      'HTTP_ACCEPT' => 'application/json' # This is what Rails 3 accepts
    }
  end

  before do
    User.find_by_name('user01')&.delete
  end

  it 'Creates a new user' do
    post '/users?name=user01&email=user01@test.com', headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)
    expect(resp['status']).to eq('ok')
    expect(resp['user']).to include('name' => 'user01', 'email' => 'user01@test.com')
    expect(resp['user']['id']).to be
  end

  it 'Read the new user' do
    user = User.all.last
    Event.all.each { |event| user.userevents.create(event: event) }

    get "/users/#{user.id}", headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)

    expect(resp['status']).to eq('ok')
    expect(resp['name']).to eq(user.name)
    expect(resp['events']).to eq(user.userevents.all.map(&:id))
  end
end
