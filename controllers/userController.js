exports.getUser = (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID: ${userId}`);
};

exports.createUser = (req, res) => {
  res.send('User creation successful!');
};