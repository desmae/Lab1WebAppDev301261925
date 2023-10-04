// aboutRouter.js Nick Kaplan 301261925 2023-10-04
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('About Me page requested');
  res.render('about', { page: 'About Me', menuId: 'about' });
});

module.exports = router;