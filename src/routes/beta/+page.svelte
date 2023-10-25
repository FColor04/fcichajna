<script>
	import {Accordion, AccordionItem, Tab, TabGroup} from "@skeletonlabs/skeleton";
	import Carousel from "../../components/Carousel.svelte";

	import pies1 from "$lib/images/pieski1/20230928_174927.jpg";
	import pies2 from "$lib/images/pieski1/20230928_174434.jpg";
	import pies3 from "$lib/images/pieski1/20230928_174932.jpg";
	import pies4 from "$lib/images/pieski1/20230928_174936.jpg";
	import pies5 from "$lib/images/pieski1/20230928_175628.jpg";

	import hero from "$lib/images/pieski2/hero.png";
	import piesBok from "$lib/images/pieski3/photo_2023-10-25_13-53-34 (2).jpg";

	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	let tabSet = 0;

	let dogDescriptions = [
		{
			general: "Boston Terrier",
			food: "2",
			care: "3"
		},
		{
			general: "Papillon",
			food: "2",
			care: "3"
		},
		{
			general: "Lhasa Apso",
			food: "2",
			care: "3"
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
<section>
	<div class="w-full h-[60vh] relative bg-surface-50 mx-auto rounded-container-token overflow-hidden">
		<div class="absolute variant-glass-surface left-0 right-0 text-4xl p-4 font-bold flex items-center justify-center lg:justify-start">
			FCI Chajna
		</div>
		<img
				class="object-face object-cover h-[60vh] bottom-0"
				src={hero}
				alt=""
				loading="lazy"
		/>
		<div class="absolute bottom-0 left-0 right-0 text-4xl p-4 font-bold flex items-center justify-end">
			<button on:click={OpenContactModal} class="btn-lg text-center lg:w-48 variant-filled-secondary shadow"><i class="fa-solid fa-phone mr-2" />Kontakt</button>
		</div>
	</div>
	<div class="my-16">
		<h5 class="text-3xl font-bold">Trochę o nas</h5>
		<p class="text-lg">
		Jesteśmy małą domową hodowla piesków rasy Boston Terrier i Lhasa Apso.<br />
	Nasze urocze Bostonki są naszym nowym 3-letnim hitem, ale nie zapominamy o naszych 10-letnich doświadczeniach z Lhasa Apso.<br />
	Oba te wyjątkowe rasy są dla nas niezmiernie ważne. Nasze psiaki wychowują się w przytulnym domu, otoczone miłością i opieką swoich oddanych właścicieli.<br />

		</p>
	</div>
	<div class="my-4 grid gap-4 grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-5">
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
					src={piesBok}
					alt=""
					loading="lazy"
			/>
		</div>
	</div>
</section>
<section>
	<h5 class="text-3xl font-bold mb-8">Nowości:</h5>
	- treści z bazy danych -
</section>
<section>
	<h5 class="text-3xl font-bold mb-8">Nasze pieski:</h5>

	<Carousel images={[pies1, pies2, pies3, pies4, pies5]}></Carousel>
</section>