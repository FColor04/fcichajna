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
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
    },
    signIn: async (email : string, password : string) => {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
    },
    signInPopup: async (provider : AuthProvider) => {
        await signInWithPopup(firebaseAuth, provider);
    },
    signOut: async () => {
        await signOut(firebaseAuth);
    },
    resetPassword: async (email : string) => {
        await sendPasswordResetEmail(firebaseAuth, email);
    }
}