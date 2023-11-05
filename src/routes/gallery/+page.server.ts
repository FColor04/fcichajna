import {getBlob, getStorage, ref, getMetadata, listAll, getDownloadURL, type FullMetadata} from "firebase/storage";
import {firebaseApp} from "$lib/firebase";
import {compile} from "mdsvex";

interface Content {
    id: string,
    markdown?: string
}

const bucketUrl = "gs://fcichajna.appspot.com";
const MB4 = 4e+6;

interface StoredImageData {
    url: string,
    metadata: FullMetadata
}
interface BlockData {
    title: string,
    images: StoredImageData[]
}

export const load = async () => {
    const bucket = getStorage(firebaseApp, bucketUrl);
    const fetchImages = async () => {
        let blocks : BlockData[] = [];
        const gallery = await listAll((ref(bucket, "/gallery")));
        const subDirectories = await Promise.all(gallery.prefixes.map((directory) => listAll(directory)));
        await Promise.all(subDirectories.map(async (directory, i) => {
            const images = await Promise.all(directory.items.map(async item => (
                {
                    url: await getDownloadURL(item),
                    metadata: await getMetadata(item)
                }
                )));
            blocks = [...blocks, {title: gallery.prefixes[i].name, images: images}];
        }));
        return blocks;
    };

    return {
        blocks: fetchImages()
    }
}