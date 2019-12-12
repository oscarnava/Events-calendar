json.status @status
if @status == 'ok'
  json.payload @user
else
  sleep(1) # Simple measure to avoid brute force attack
end
