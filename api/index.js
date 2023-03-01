import express from 'express';
import axios from 'axios';

const app = express();

app.use('*', (_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/jx/vbg', async (_, res) => {
    const url = 'https://okjx.cc/include/loding/mp4.php';
    const result = await axios({
        url: url,
        method: 'get',
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.57'
        },
    });
    const data = result.request.res.responseUrl;
    res.json({
        code: 200,
        message: '成功',
        data: data
    });
});

module.exports = app;