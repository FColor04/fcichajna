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

	export let data = {posts: '', carousel: []};
	const { posts, carousel } = data;
	posts.sort((a, b) => a.position - b.position);

	const modalStore = getModalStore();

	let tabSet = 0;

	let dogDescriptions = [
		{
			general: "Boston Terrier - pochodzący z Ameryki, przyjazny, inteligentny, energiczny pies żyjący przeciętnie od 13 do 15 lat, dorosły waży od 4.5kg do 11 kg a jego wysokość sięga 43cm. Są stworzone do towarzystwa oraz bardzo łatwo uczą się komend czyni to je bardzo dobrym członkiem rodziny.",
			food: "Te energiczne psiaki potrzebują dobrze zbilansowanej diety, która dostarcza im niezbędnych składników odżywczych. To oznacza, że powinno się wybierać karmy wysokiej jakości, które zawierają dużo mięsa, warzyw i owoców, a jednocześnie unikać tych z dodatkami zbóż, sztucznych konserwantów i barwników. Mięso jest istotne dla rozwoju mięśni i kości, więc nie może go zabraknąć w diecie Bostona. Ważne jest też dostosowanie ilości jedzenia do poziomu aktywności psa w ciągu dnia. Dodatkowo, podczas linienia warto wzbogacić dietę w składniki, które wspomagają kondycję sierści, takie jak cynk, biotyna, i kwasy tłuszczowe omega-3 i omega-6. Jeśli masz wątpliwości co do diety swojego Bostona, warto skonsultować się z weterynarzem lub specjalistą ds. żywienia dla psów. Pamiętaj także o stałym dostępie do świeżej wody, aby Twój pies mógł utrzymać się w dobrej formie.",
			care: "Bostony uwielbiają towarzystwo, więc spędzanie czasu z nimi i zapewnianie im dostatecznej ilości uwagi jest niezwykle ważne.\n" +
					"Ich delikatna sierść wymaga też pielęgnacji. Regularne szczotkowanie pomoże utrzymać ją w dobrej kondycji i zmniejszy ilość wypadających włosów. Dbaj też o higienę uszu i oczu Bostona, czyszcząc je regularnie, aby zapobiec ewentualnym infekcjom.\n" +
					"Warto także zadbać o edukację i socjalizację Bostona Terriera od młodego wieku. Szkolenie podstawowych komend i nauce dobrych manier jest istotne, aby Twój pies był dobrze wychowany i mógł spokojnie funkcjonować w różnych sytuacjach.\n" +
					"Na koniec, regularne wizyty u weterynarza, szczepienia i kontrola zdrowia są nieodzowne, aby zapewnić długie i zdrowe życie Twojemu Bostonowi. To również okazja do rozmów z lekarzem weterynarii na temat diety i ogólnego stanu zdrowia psa.",
			image: bostonTerrier
		},
		{
			general: "Papillon",
			food: "- prace trwają -",
			care: "- prace trwają -",
			image: papillon
		},
		{
			general: "Lhasa Apso",
			food: "- prace trwają -",
			care: "- prace trwają -",
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

	<Carousel images={carousel}></Carousel>
</section>