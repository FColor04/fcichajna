<script>
    import { lazyLoad } from "$lib/lazyLoad";
    import {onMount} from "svelte";

    export let data = {blocks: []};
    const { blocks } = data;
    blocks.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);

    const OnImageLoad = el => {
        console.log("img loaded");
        if(el.naturalHeight / el.naturalWidth > 1.4) {
            el.parentElement.classList.add('row-span-2', 'h-full')
            el.classList.add('aspect-[1/2]');
        }else if(el.naturalHeight / el.naturalWidth < 0.6) {
            el.parentElement.classList.add('col-span-2', 'w-full')
            el.classList.add('aspect-[2/1]');
        }else {
            el.classList.add('aspect-square');
        }
    }

    onMount(() => {
        document.querySelector('#background').style.setProperty('--background-opacity-variable', '0');
        return () => document.querySelector('#background').style.setProperty('--background-opacity-variable', '1');
    });
</script>

<h1 class="text-center w-full mt-16 tracking-widest">Galeria</h1>

{#each blocks as block, i}
    <section class="">
        <h2 class="mb-8 border-primary-300-600-token border-b-4">{block.title ?? ""}</h2>
        <div class="grid grid-cols-5 gap-3 items-center justify-items-center">
        {#each block.images ?? [] as image, j}
            <div class="relative group rounded-container-token overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <img
                    class="w-full h-full object-face object-cover"
                    alt={image.metadata.name}
                    use:lazyLoad={{src: image.url, cb: OnImageLoad}}
                >
                <div class="absolute bottom-0 w-full text-2xl p-1 opacity-0 group-hover:opacity-100 variant-filled-secondary transition-opacity z-10">
                    {image.metadata.name.slice(0, -4)}
                </div>
            </div>
        {/each}
        </div>
    </section>
{/each}