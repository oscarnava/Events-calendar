class UsereventsController < ApplicationController
  def create
    user = User.find_by_name(params[:user_id])
    @event = Userevent.create(user_id: user&.id, event_id: params[:event_id]) 
    @status = @event&.valid? ? 'ok' : @event.errors.full_messages.first
  end

  def update
    rating = params[:rating]&.to_i
    @status = 'Rating required'
    return unless rating

    @status = 'Rating should go from 1 to 5'
    return unless (1..5).include? rating

    @event = Userevent.find_by_id(params[:id])
    @status = 'User event not found'
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
