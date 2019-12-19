json.status @status
if @status == 'ok'
  json.payload do
    json.name @user.name
    json.userevents @user.userevents, :id, :event_id, :rating
  end
else
  sleep(1) # Simple measure to avoid brute force attack
end
