<script>
    import { goto } from '$app/navigation';

    export let images;

    let elemCarousel;

    function carouselLeft() {
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }
    function carouselRight() {
        const x =
            elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }
    function carouselThumbnail(index) {
        elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
    }
</script>

<div class="w-full lg:w-[70%] mx-auto">
    <div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
    <!-- Button: Left -->
    <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
        <i class="fa-solid fa-arrow-left" />
    </button>
    <!-- Full Images -->
    <div bind:this={elemCarousel} class="scroll-smooth flex overflow-x-auto">
        {#each images as image}
            <img
                    class="snap-center rounded-container-token"
                    src={image}
                    alt=""
                    loading="lazy"
            />
        {/each}
    </div>
    <!-- Button: Right -->
    <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
        <i class="fa-solid fa-arrow-right" />
    </button>
</div>

    <div class="p-4 grid grid-cols-6 gap-4">
    {#each images as image, i}
        <button type="button" on:click={() => carouselThumbnail(i)}>
            <img
                    class="rounded-container-token"
                    src={image}
                    alt=""
                    loading="lazy"
            />
        </button>
    {/each}
        <button class="w-full h-full flex flex-col justify-center items-center rounded-container-token variant-filled-primary" type="button" on:click={() => goto("/gallery")}>
            <span>Więcej w Galerii</span>
            <i class="fa-solid fa-arrow-right" />
        </button>
</div>
</div>