const PIForm = require('../models/PIForm');

exports.submitPIForm = async (req, res) => {
  const form = new PIForm({ ...req.body, submittedBy: req.user.id });
  await form.save();
  res.json({ msg: 'Form submitted' });
};

exports.getPIForms = async (req, res) => {
  const forms = await PIForm.find({ submittedBy: req.user.id });
  res.json(forms);
};
