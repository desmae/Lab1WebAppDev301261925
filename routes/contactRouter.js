const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('About Me page requested');
  res.render('contact', { page: 'Contact', menuId: 'contact' });
});

router.post('/submit-contact', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const email = req.body.email;
  const message = req.body.message;

  // Redirect
  res.redirect('/');
});

module.exports = router;