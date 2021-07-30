# nuxt-next-auth

Inspired by [vite-ssr-nuxt-auth](https://github.com/s-kris/vite-ssr-next-auth), this repo shows how to integrate `next-auth` with `nuxt`. No need to install `react`.

First, an API server middleware with express:

```javascript
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ],
};

app.get('/auth/*', (req, res) => {
    const nextauth = req.path.split('/');
    nextauth.splice(0, 2);
    req.query.nextauth = nextauth;

    NextAuth(req, res, options);
});

app.post('/auth/*', (req, res) => {
    const nextauth = req.path.split('/');
    nextauth.splice(0, 2);
    req.query.nextauth = nextauth;

    NextAuth(req, res, options)
});

export default app;
```

Then use the `nuxtServerInit` action to access `next-auth` session and pass user data to store.

```javascript
export const actions = {
    async nuxtServerInit({ commit }, { req, $config }) {
        try {
            const { data } = await axios.get(`${$config.nextAuthUrl}/api/auth/session`, {
                headers: {
                    cookie: req.headers.cookie
                }
            });
            if (!data || !Object.keys(data).length) {
                commit('SET_SESSION', null);
            } else {
                commit('SET_SESSION', data);
            }
        } catch (e) {
            console.error('Authentication error: ', e);
            commit('SET_SESSION', null);
        }
    }
}
```