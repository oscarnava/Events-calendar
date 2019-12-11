# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'User events management', type: :request do
  let!(:headers) do
    {
      'ACCEPT' => 'application/json',     # This is what Rails 4 accepts
      'HTTP_ACCEPT' => 'application/json' # This is what Rails 3 accepts
    }
  end

  let!(:user) { User.create(name: 'Test02', email: 'test02@test.com') }
  let!(:event) { Event.all.first }

  it 'Creates a new user-event link' do
    post "/events/#{event.id}/users/#{user.id}/userevents", headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)

    expect(resp['status']).to eq('ok')
    expect(resp['payload']).to be
    expect(resp['payload']['id']).to be
    expect(resp['payload']).to include('user_id' => user.id, 'event_id' => event.id)
  end

  it 'Updates the rating for an event' do
    usrevt = user.userevents.create(event: event) || user.userevents.last

    put "http://localhost:3000/userevents/#{usrevt.id}?rating=5", headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)

    expect(resp['status']).to eq('ok')
    expect(resp['payload']).to be
    expect(resp['payload']['rating']).to eq(5)
    expect(resp['payload']).to include('user_id' => user.id, 'event_id' => event.id)
  end

  it 'Rejects invalid ratings for an event' do
    usrevt = user.userevents.create(event: event) || user.userevents.last

    put "http://localhost:3000/userevents/#{usrevt.id}?rating=9", headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)

    expect(resp['status']).not_to eq('ok')
    expect(resp['payload']).to be_nil
  end

  it 'Removes an user-event link' do
    usrevt = user.userevents.create(event: event) || user.userevents.last

    delete "http://localhost:3000/userevents/#{usrevt.id}", headers: headers

    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)

    expect(resp['status']).to eq('ok')
    expect(resp['payload']).to be
    expect(resp['payload']['id']).to eq(usrevt.id)
  end
end
