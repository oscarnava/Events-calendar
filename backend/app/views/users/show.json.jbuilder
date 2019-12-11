json.status @status
if @status == 'ok'
  json.payload do
    json.name @user.name
    json.events(@user.userevents.map { |usr_evt| usr_evt.event.id })
  end
end
