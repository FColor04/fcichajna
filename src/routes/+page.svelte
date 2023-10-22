<script>
	import {Accordion, AccordionItem, Tab, TabGroup} from "@skeletonlabs/skeleton";

	let tabSet = 0;
</script>
<section class="text-center font-bold flex flex-col py-16">
	<span>Strona w przebudowie!</span>
	<span>Planowana data zakończenia: 24.10.2024</span>
	<!--<TabGroup active="variant-soft">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Boston Terrier</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Papillon</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Lhasa Apso</Tab>
		&lt;!&ndash; Tab Panels -&ndash;&gt;
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<Accordion autocollapse regionPanel="space-y-4">
					<AccordionItem open>
						<svelte:fragment slot="lead">I</svelte:fragment>
						<svelte:fragment slot="summary">Ogólne informacje</svelte:fragment>
						<svelte:fragment slot="content">...</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead">I</svelte:fragment>
						<svelte:fragment slot="summary">Jak je karmić</svelte:fragment>
						<svelte:fragment slot="content">...</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead">I</svelte:fragment>
						<svelte:fragment slot="summary">Jak je pielęgnować</svelte:fragment>
						<svelte:fragment slot="content">...</svelte:fragment>
					</AccordionItem>
					&lt;!&ndash; ... &ndash;&gt;
				</Accordion>
			{:else if tabSet === 1}
				(tab panel 2 contents)
			{:else if tabSet === 2}
				(tab panel 3 contents)
			{/if}
		</svelte:fragment>
	</TabGroup>-->
</section>