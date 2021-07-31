import express from 'express';
import cookieParser from 'cookie-parser';
import NextAuth from 'next-auth';

function moduleHandler(nextAuthOptions) {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());

    app.get('/auth/*', (req, res) => {
        const nextauth = req.path.split('/');
        nextauth.splice(0, 2);
        req.query.nextauth = nextauth;

        NextAuth(req, res, nextAuthOptions);
    });

    app.post('/auth/*', (req, res) => {
        const nextauth = req.path.split('/');
        nextauth.splice(0, 2);
        req.query.nextauth = nextauth;

        NextAuth(req, res, nextAuthOptions);
    });

    return app;
}

export default function NextAuthModule(moduleOptions) {
    const options = Object.assign({}, this.options.nextAuth, moduleOptions)

    if (options.providers.length === 0) {
        throw new Error('Please add a provider')
    }

    this.options.serverMiddleware.unshift({
        path: '/api',
        handler: moduleHandler(options)
    })

    const { nuxt } = this

    nuxt.hook('listen', () => {
        nuxt.options.cli.badgeMessages.push('\nNextAuth urls added: /api/auth/*')
    })
}