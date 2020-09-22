const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ msg: 'ok' });
});

module.exports = router;
