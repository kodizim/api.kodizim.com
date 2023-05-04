const express = require('express');
const axios = require("axios");

const router = express.Router();

/* GET mentor listing. */
router.get('/', async (req, res) => {
  const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=-qbHHhUcto06Rm3wpbYBm-yMqd0tAJzRc-RWPI5mJJRknqtKsjND-fhbv-Vs5OAznqIl8Ih2wIyTfw-nHcepDgxmJBKLla-Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJIHV7vdGItoIMnZEgVqJxXsubpmqE8UhDuOhPd_XM2W67XL1Ss2fQXs6l4MvM4hTfz3k17PiNg-59GD5ROj7197IIfTZMoFo9z9Jw9Md8uu&lib=MJZzRVtB4mb8baCYROCMSyW-JXcztBCpO");
  res.json(response.data);
});

module.exports = router;