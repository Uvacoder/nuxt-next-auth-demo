import { getSession } from 'nuxt-next-auth'

export default async function (req, res) {
    const session = await getSession({ req });
    
    if (session) {
        res.end(JSON.stringify({ content: 'This is protected content. You can access this content because you are signed in.' }));
    } else {
        res.end(JSON.stringify({ error: 'You must be signed in to view the protected content on this page.' }));
    }
}