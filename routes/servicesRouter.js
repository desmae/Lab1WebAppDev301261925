const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('About Me page requested');
  res.render('services', { page: 'Services', menuId: 'services' });
});

module.exports = router;