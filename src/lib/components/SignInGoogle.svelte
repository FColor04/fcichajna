<script>
    import {authHandlers} from "$lib/authStore.ts";
    import { GoogleAuthProvider } from "firebase/auth";
    import {goto} from "$app/navigation";
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => authHandlers.signInPopup(provider).then(res => {
        if(res.user != null)
            goto("/admin")
    });
</script>
<button class="btn variant-filled-primary" on:click={signInWithGoogle}>Zaloguj się z Google</button>