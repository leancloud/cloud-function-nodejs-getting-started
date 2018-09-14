'use strict';
exports.afterSaveUser = (req) => {
  const newUser = req.object;
  console.log(`New user: ${newUser.get('username')}`);
}
