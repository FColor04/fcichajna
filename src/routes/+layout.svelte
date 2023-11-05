<script lang="ts">
	import '../app.postcss';
	import { fly } from "svelte/transition";
	import {
		AppBar,
		AppShell,
		Drawer,
		Modal,
		getModalStore,
		type ModalSettings,
		type ModalComponent,
		type ModalStore,
		type DrawerSettings,
		getDrawerStore,
		initializeStores,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	import {onMount} from "svelte";
	import {firebaseAuth} from "$lib/firebase";

	initializeStores();

	const navDrawer: DrawerSettings = { id: 'navigation' };
	const drawerStore = getDrawerStore();

	export let data;

	onMount(() => {
		const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {

		});
		return unsubscribe;
	});
</script>
<div id="background" />
<Drawer>
	{#if $drawerStore.id === 'navigation'}
		<nav class="h-full w-full flex flex-col items-center justify-center text-2xl space-y-8">
			<a href="/" on:click={() => drawerStore.close()}><i class="fa-solid fa-house"></i> Strona główna</a>
			<a href="/gallery" on:click={() => drawerStore.close()}><i class="fa-solid fa-table-cells-large"></i> Galeria</a>
			<a href="/contact" on:click={() => drawerStore.close()}><i class="fa-solid fa-phone"></i> Kontakt</a>
		</nav>
	{/if}
</Drawer>

<Modal buttonTextCancel="Zamknij" />

<!-- App Shell -->
<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-[999] h-fit">
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">FCI Chajna</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav class="hidden md:flex space-x-16 mr-16">
					<a href="/" on:click={() => drawerStore.close()}><i class="fa-solid fa-house"></i> Strona główna</a>
					<a href="/gallery" on:click={() => drawerStore.close()}><i class="fa-solid fa-table-cells-large"></i> Galeria</a>
					<a href="/contact" on:click={() => drawerStore.close()}><i class="fa-solid fa-phone"></i> Kontakt</a>
				</nav>
				<LightSwitch></LightSwitch>
				<button class="flex md:hidden" on:click={() => drawerStore.open(navDrawer)}><i class="fa-solid fa-bars fa-2x"></i></button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="sm:w-10/12 px-2 lg:px-8 mx-auto min-h-[90%]">
		{#key data.url}
			<div in:fly={{ x: -200, duration: 200, delay: 200 }} out:fly={{ x: 200, duration: 200}}>
				<slot />
			</div>
		{/key}
	</main>
</AppShell>
