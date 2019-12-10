json.status @status
if @user
  json.name @user.name
  json.events(@user.userevents.map { |usr_evt| usr_evt.event.id })
end
