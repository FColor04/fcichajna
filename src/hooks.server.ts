import { redirect, error } from '@sveltejs/kit'
import {firebaseApp, firebaseAuth} from "$lib/firebase";

export const handle = async ({ event, resolve }) => {
    // protect requests to all routes that start with /protected-routes
    if (event.url.pathname.startsWith('/admin')) {
        if (firebaseAuth.currentUser == null) {
            // the user is not signed in
            throw redirect(303, '/')
        }
    }

    // protect POST requests to all routes that start with /protected-posts
    if (event.url.pathname.startsWith('/protected-posts') && event.request.method === 'POST') {
        const session = await event.locals.getSession()
        if (!session) {
            // the user is not signed in
            throw error(303, '/')
        }
    }

    return resolve(event)
}