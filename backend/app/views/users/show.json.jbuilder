json.status @status
if @status == 'ok'
  json.payload do
    json.name @user.name
    json.userevents @user.userevents, :id, :event_id
  end
end
