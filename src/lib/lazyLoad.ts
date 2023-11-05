let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

export const lazyLoad = (image : HTMLImageElement, { src, cb } : {src: string, cb: (image: HTMLImageElement) => void} ) => {
    const loaded = () => {
        cb?.(image);
    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            image.src = src;
            if (image.complete) {
                loaded()
            } else {
                image.addEventListener('load', loaded)
            }
        }
    }, options);
    observer.observe(image);

    return {
        destroy() {
            image.removeEventListener('load', loaded);
        }
    }
}