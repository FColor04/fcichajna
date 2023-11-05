import { writable } from 'svelte/store';
import {firebaseAuth} from "$lib/firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, signInWithPopup, signInWithEmailAndPassword, type AuthProvider } from "firebase/auth";

interface AuthUser {
    uid: string;
    email: string;
}

export const authUser = writable<AuthUser | undefined>(undefined);

export const authHandlers = {
    signUp: async (email : string, password : string) => {
        return await createUserWithEmailAndPassword(firebaseAuth, email, password);
    },
    signIn: async (email : string, password : string) => {
        return await signInWithEmailAndPassword(firebaseAuth, email, password);
    },
    signInPopup: async (provider : AuthProvider) => {
        return await signInWithPopup(firebaseAuth, provider);
    },
    signOut: async () => {
        return await signOut(firebaseAuth);
    },
    resetPassword: async (email : string) => {
        return await sendPasswordResetEmail(firebaseAuth, email);
    }
}