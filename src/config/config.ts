import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.PORT || 443;

const config = {
    port: SERVER_PORT
};

export default config;
