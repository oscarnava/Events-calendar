class UsereventsController < ApplicationController
  def create
    event = Userevent.create(userevents_params)
    @event_id = params[:event_id]
    @user_id = params[:user_id]
    @status = event.valid? ? 'ok' : event.errors
  end

  private

  def userevents_params
    params.permit(:user_id, :event_id)
  end
end
