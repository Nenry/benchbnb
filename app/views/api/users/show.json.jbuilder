# json.users do
#   json.set! @user.id do
#     json.extract! @user, :id, :username
#   end
# end
#


  json.set! @user.id do
    json.extract! @user, :id, :username
  end
