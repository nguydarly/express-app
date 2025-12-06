export const namechanger = (req, res, next) => {
  const username = req.params.username;

  if (username) {
   req.params.username = username.toUpperCase();
    console.log({changedname: req.params.username});
  }
  next();
};
