const express = require('express');
const axios = require("axios");

const router = express.Router();

/* GET mentor listing. */
router.get('/', async (req, res) => {
  const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=AXqi0zoI9K0F6OuTVuzLVo9G03MmH-hyS0dbvOKwLN08V6p8-dIyoVCAMQqwybIB8optMe0I-9cKbWGnHXkqXWRnQ9htChYGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC4pxFCwspthH4obMDoEhkd1hErfyVLay72KqyXHJ6jHA4jr0HOadDjomPTBL2Dpf0KS0yrJFmlm6s9hcUVELgzUwJVVMPBkutz9Jw9Md8uu&lib=MJZzRVtB4mb8baCYROCMSyW-JXcztBCpO")
  res.json(response.data);
});

module.exports = router;