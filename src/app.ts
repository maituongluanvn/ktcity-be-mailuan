import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

const morgan = require('morgan');

/** App list */
import router_v1 from './routes/router_v1';

const App = express();

/** Morgan logger */
// App.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
App.use(morgan('dev'));

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

/** Rules of our API */
App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
App.use('/v1', router_v1);

/** Error */
App.use((req, res) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message
    });
});

/** Create the api */
const httpServer = http.createServer(App);
httpServer.listen(process.env.PORT, () => {
    console.info(`Server listen port ${process.env.PORT}`);
});
