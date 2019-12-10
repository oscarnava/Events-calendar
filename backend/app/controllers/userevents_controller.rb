class UsereventsController < ApplicationController
  def create
    @event = Userevent.create(userevents_params)
    @status = @event.valid? ? 'ok' : @event.errors.full_messages.first
  end

  def update
    rating = params[:rating]&.to_i
    @status = 'Rating required'
    return unless rating

    @status = 'Rating should go from 1 to 5'
    return unless (1..5).include? rating

    @event = Userevent.find_by_id(params[:id])
    @status = 'Not found'
    return unless @event

    @event&.rating = params[:rating]
    @event.save
    @status = @event ? 'ok' : 'Error updating user event'
  end

  def destroy
    @event = Userevent.find_by_id(params[:id])
    @event&.delete
    @status = @event ? 'ok' : 'User event not found'
  end

  private

  def userevents_params
    params.permit(:id, :user_id, :event_id, :rating)
  end
end
