const express = require('express');
const axios = require("axios");

const router = express.Router();

/* GET mentor listing. */
router.get('/', async (req, res) => {
  const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=lVdbjcpSwgX8ktu7vZNcfYBfQ735KNhkuKtflQlV9pziThJDXtm_eWj6dR26Sq_lUnFGwYnhccJhJgZT_8MqZG6qQmBhztCDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIdnCqYw7FXIP4M3zW73Hl7gaN3DH_YV9dFABWKQN-WutH_LiaU2y0B5HZNAsAIxzqzQJaGYtrR-Gbb61gLLSYRCjS5tEVkWAdz9Jw9Md8uu&lib=MJZzRVtB4mb8baCYROCMSyW-JXcztBCpO")
  res.json(response.data);
});

module.exports = router;