export function getUser (req, res){

  const users={
  user1:{userId:1,username: req.params.username,Password:90},
  user2:{userId:2, username:req.params.username,password:222}
} 
  res.json(users);
};

export function createUser (req, res){
  res.send('User creation successful!');
};