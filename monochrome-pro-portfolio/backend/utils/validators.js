const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateContactInput = ({ name, email, message }) => {
  if (!name || !email || !message) {
    return 'All fields are required';
  }

  if (!isValidEmail(email)) {
    return 'Please enter a valid email address';
  }

  return null;
};

module.exports = { validateContactInput };
