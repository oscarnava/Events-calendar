class UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:id])
    @status = 'User not found'
    return unless @user

    @status = 'ok'
  end

  def create
    @user = User.create(user_params)
    @status = @user.valid? ? 'ok' : @user.errors.full_messages.first
  end

  private

  def user_params
    params.permit(:id, :name, :email)
  end
end
