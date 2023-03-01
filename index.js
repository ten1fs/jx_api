import express from 'express';
import router from './api/index.js';

const app = express();

app.use('*', (_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/api/jx/vbg', router);

app.listen(process.env.port || 9000);