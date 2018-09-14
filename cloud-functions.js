'use strict';
exports.hello = (req) => {
  if (req.params.name) {
    return `Hello ${req.params.name}!`;
  }
  return 'What is your name?';
}
