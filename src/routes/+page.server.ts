import {collection, getDocs} from "firebase/firestore";
import {firebaseApp, firestore} from "$lib/firebase";
import {compile} from "mdsvex";
import {getDownloadURL, getStorage, listAll, ref} from "firebase/storage";

interface Content {
    id: string,
    markdown?: string
}

export const load = async () => {
    const fetchContent = async () => {
        let posts: Content[] = [];

        const docs = await getDocs(collection(firestore, "content"));
        docs.forEach((doc) => {
            const data = doc.data();
            posts = [...posts, {...data, id: doc.id}]
        });
        const compiled = await Promise.all(posts.map(async (markdown) => {
            return compile(markdown.markdown ?? "");
        }));
        return compiled.map(obj => obj?.code);
    };
    const fetchImages = async () => {
        const url = "gs://fcichajna.appspot.com";
        const bucket = getStorage(firebaseApp, url);
        const list = await listAll(ref(bucket, "/gallery/Wystawa"));
        return await Promise.all(list.items.map(async item => await getDownloadURL(item)));
    }

    return {
        posts: fetchContent(),
        carousel: fetchImages()
    }
}