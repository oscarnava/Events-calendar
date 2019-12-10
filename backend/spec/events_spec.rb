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

  it 'returns JSON' do
    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:success)
  end

  it 'Retrieves all events' do
    body = JSON.parse(response.body)
    events.each_with_index do |event, idx|
      expect(event).to include(body[idx])
    end
  end
end
