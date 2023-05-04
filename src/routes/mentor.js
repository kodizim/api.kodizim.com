const express = require('express');
const axios = require("axios");

const router = express.Router();

/* GET mentor listing. */
router.get('/', async (req, res) => {
  const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=a0t2hXUjLVwR-l-K-9EreyejvkYMObMPuFGVXaCckp4Ojiaf-PPnLGXbmousmrup95BAfoEq9yzUPadgKhtqDoeILmVNHDVbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnk899g3ByxwWn1AvnA8i9FTyDTDLLsD7czHVZrjvLLKacSssbU3wC8eeMJaq-XA5sQQNr8LbHKeLijzgWgbzMF3Zb1JVWX5dz9Jw9Md8uu&lib=MJZzRVtB4mb8baCYROCMSyW-JXcztBCpO");
  res.json(response.data);
});

module.exports = router;