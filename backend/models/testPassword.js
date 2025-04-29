const validatePassword = (value) => {
  return /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value);
};

// Test your passwords
console.log(validatePassword("Tanmay@123")); // true
console.log(validatePassword("123456")); // false
console.log(validatePassword("password")); // false
console.log(validatePassword("Tan@123")); // true