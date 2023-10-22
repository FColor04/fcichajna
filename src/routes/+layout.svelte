<script lang="ts">
	import '../app.postcss';
	import {AppShell, AppBar, LightSwitch} from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell class="min-h-screen">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">FCI Chajna</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch></LightSwitch>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="w-10/12 mx-auto">
		<slot />
	</main>
</AppShell>
