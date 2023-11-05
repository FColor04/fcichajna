<script>
    import {Accordion, AccordionItem, Tab, TabGroup} from "@skeletonlabs/skeleton";
    import Carousel from "$lib/components/Carousel.svelte";

    import pies1 from "$lib/images/pieski1/20230928_174927.jpg";
    import pies2 from "$lib/images/pieski1/20230928_174434.jpg";
    import pies3 from "$lib/images/pieski1/20230928_174932.jpg";
    import pies4 from "$lib/images/pieski1/20230928_174936.jpg";
    import pies5 from "$lib/images/pieski1/20230928_175628.jpg";

    import bannerPies from "$lib/images/pieski3/mix2.jpg";
    import hero from "$lib/images/Boston 2/hero.png";
    import bostonTerrier from "$lib/images/pieski3/photo_2023-10-25_13-53-34 (2).jpg";
    import papillon from "$lib/images/Papillon/1.jpg";
    import lhasaApso from "$lib/images/Lhasa Apso/heropies2.jpg";

    import { getModalStore } from '@skeletonlabs/skeleton';

    export let data = {posts: ''};
    const { posts } = data;
    posts.sort((a, b) => a.position - b.position);

    const modalStore = getModalStore();

    let tabSet = 0;

    let dogDescriptions = [
        {
            general: "Boston Terrier",
            food: "2",
            care: "3",
            image: bostonTerrier
        },
        {
            general: "Papillon",
            food: "2",
            care: "3",
            image: papillon
        },
        {
            general: "Lhasa Apso",
            food: "2",
            care: "3",
            image: lhasaApso
        },
    ];

    const contactModal = {
        type: 'alert',
        // Data
        title: 'Kontakt',
        body: 'Woj. Śląskie, Rybnik<br />Telefon: (+48) 728 851 465'
    };

    const OpenContactModal = () => {
        modalStore.trigger(contactModal);
    };
</script>
<section class="!p-0 rounded-t-3xl overflow-hidden">
    <div class="w-full h-[60vh] relative bg-surface-50 mx-auto overflow-hidden">
        <div class="absolute variant-glass-primary left-0 right-0 xl:w-fit xl:rounded-3xl xl:m-8 p-8 font-bold flex flex-col text-surface-900 items-center justify-center z-10">
            <span class="text-7xl mb-4">FCI Chajna</span>
            <span>Hodowla psów rasowych w Rybniku</span>
        </div>
        <img
                class="object-face object-cover h-[47vh] lg:h-[60vh] absolute bottom-0"
                src={hero}
                alt=""
                loading="lazy"
        />
        <div class="absolute bottom-0 left-0 right-0 text-4xl p-4 font-bold flex items-center justify-end">
            <button on:click={OpenContactModal} class="btn-lg lg:btn-xl text-center lg:w-48 variant-filled-secondary shadow"><i class="fa-solid fa-phone mr-2" />Kontakt</button>
        </div>
    </div>
    <div class="p-8">
        {#each posts as post, i}
            <div class="my-16">
                {@html post}
            </div>
            {#if i === 0}
                <div class="my-4 w-full grid gap-4 grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-5">
                    <div class="card p-4 lg:col-span-4">
                        <h6 class="text-3xl font-bold mb-4">Poznaj swojego psa:</h6>
                        <TabGroup active="variant-filled">
                            <Tab bind:group={tabSet} name="tab1" value={0}>
                                <span>Boston Terrier</span>
                            </Tab>
                            <Tab bind:group={tabSet} name="tab2" value={1}>Papillon</Tab>
                            <Tab bind:group={tabSet} name="tab3" value={2}>Lhasa Apso</Tab>
                            <!-- Tab Panels --->
                            <svelte:fragment slot="panel">
                                <Accordion autocollapse regionPanel="space-y-4">
                                    <AccordionItem open>
                                        <svelte:fragment slot="lead">📖</svelte:fragment>
                                        <svelte:fragment slot="summary">Ogólne informacje</svelte:fragment>
                                        <svelte:fragment slot="content">{dogDescriptions[tabSet].general}</svelte:fragment>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <svelte:fragment slot="lead">🥓</svelte:fragment>
                                        <svelte:fragment slot="summary">Jak je karmić</svelte:fragment>
                                        <svelte:fragment slot="content">{dogDescriptions[tabSet].food}</svelte:fragment>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <svelte:fragment slot="lead">🪮</svelte:fragment>
                                        <svelte:fragment slot="summary">Jak je pielęgnować</svelte:fragment>
                                        <svelte:fragment slot="content">{dogDescriptions[tabSet].care}</svelte:fragment>
                                    </AccordionItem>
                                </Accordion>
                            </svelte:fragment>
                        </TabGroup>
                    </div>
                    <div class="">
                        <img
                                class="w-full h-80 mx-auto rounded-container-token aspect-square object-face object-cover"
                                src={dogDescriptions[tabSet].image}
                                alt=""
                                loading="lazy"
                        />
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</section>
<section class="!p-0 rounded-t-3xl overflow-hidden">
    <div class="relative h-80">
        <img class="absolute w-full object-center object-cover h-80 brightness-75" src={bannerPies} />
        <h5 class="absolute text-8xl font-bold mb-8 ml-8 bottom-0 z-10 drop-shadow-2xl">Nasze pieski:</h5>
    </div>

    <Carousel images={[pies1, pies2, pies3, pies4, pies5]}></Carousel>

    <div class="p-8">
        <div class="flex flex-col lg:flex-row-reverse">
            <img class="h-64 aspect-square object-cover object-face" src={pies1} alt="" />
            <img class="h-64 aspect-square object-cover object-face" src={pies2} alt="" />
            <h6 class="grow">Albert</h6>
        </div>
    </div>
</section>