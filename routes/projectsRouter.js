const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('About Me page requested');
  res.render('projects', { page: 'Projects', menuId: 'projects' });
});

module.exports = router;