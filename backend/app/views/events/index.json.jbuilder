json.array! @events do |event|
  json.id event.id
  json.title event.title
  json.description event.description
  json.begins event.begins
  json.ends event.ends
  json.category event.category
end
