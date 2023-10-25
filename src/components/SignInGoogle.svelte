<script>
    import {authHandlers} from "$lib/authStore.ts";
    import { GoogleAuthProvider } from "firebase/auth";
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => authHandlers.signInPopup(provider);
</script>
<button class="btn variant-filled-primary" on:click={signInWithGoogle}>Zaloguj się z Google</button>