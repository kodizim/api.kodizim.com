const express = require('express');
const axios = require("axios");

const router = express.Router();

/* GET mentor listing. */
router.get('/', async (req, res) => {
  const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=9q3mfmYOde88LAJwgQW0_E_O7Kpf21jw-qt55RtLxAMFjLoRz6VSfx3BYQRQBbJKEiP4zdPEtgpf4x8kJdT0CgxaVEKVuIs7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPJRdJmYRouVofNywftKAiisogzSoo4cwNJEUq5H60TswtIBF984uZB883ESItRqs0gew_DH-zWCn-U_Hnv9j_xdyPKqndActdz9Jw9Md8uu&lib=MJZzRVtB4mb8baCYROCMSyW-JXcztBCpO")
  res.json(response.data);
});

module.exports = router;