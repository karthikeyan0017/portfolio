const Contact = require('../models/Contact');

const submitContactMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: contact
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContactMessage };
