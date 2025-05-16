// generateHash.js
import bcrypt from 'bcrypt';

const plainPassword = "h11";
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds).then(hash => {
  console.log("Hash:", hash);
});

