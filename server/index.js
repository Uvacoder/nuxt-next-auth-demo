import express from 'express';
import cookieParser from 'cookie-parser';
import NextAuthHandler from './auth/next';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.get('/auth/*', (req, res) => {
    const nextauth = req.path.split('/');
    nextauth.splice(0, 2);
    req.query.nextauth = nextauth;

    NextAuthHandler(req, res);
});

app.post('/auth/*', (req, res) => {
    const nextauth = req.path.split('/');
    nextauth.splice(0, 2);
    req.query.nextauth = nextauth;

    NextAuthHandler(req, res);
});

export default app;