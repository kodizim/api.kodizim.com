const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
    res.send("Welcome Kodizim API");
});

app.get('/mentor', async (req, res) => {
    const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=_x7Y4Cl2T_9I8jpOwM7WFpGpGW4DiL8sVND5xBsGef5QaftSzJ4RWeTiiPbsPjcyCgjSXO-g0Bshtn0CyK4yfnmVBqaZ0WcZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBUzWhRfDfwU_3Rb_kcZB4JHOV4jEC2wbH9buNG3-Hj65ZJOyB7BBYyLnauiUc65TUke6aZnFAiAy8gd5zQpGnMrJWqkYMEASNz9Jw9Md8uu&lib=MJZzRVtB4mb8baCYROCMSyW-JXcztBCpO")
    res.json(response.data);
});

module.exports = app
