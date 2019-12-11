# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Events management', type: :request do
  let!(:events) { JSON.parse(Event.all.to_json) }

  before do
    headers = {
      'ACCEPT' => 'application/json',     # This is what Rails 4 accepts
      'HTTP_ACCEPT' => 'application/json' # This is what Rails 3 accepts
    }
    get '/events', headers: headers
  end

  it 'Retrieves all events' do
    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)

    resp = JSON.parse(response.body)

    expect(resp['status']).to eq('ok')
    expect(resp['events']).to be

    resp['events'].tap do |resp_events|
      events.each_with_index do |event, idx|
        expect(event).to include(resp_events[idx])
      end
    end
  end
end
