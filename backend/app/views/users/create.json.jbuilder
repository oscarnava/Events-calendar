json.status @status
if @status == 'ok'
  json.user @user
else
  sleep(5) # Simple measure to avoid brute force attack
end
