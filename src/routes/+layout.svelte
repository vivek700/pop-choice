<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import favicon32 from '$lib/assets/favicon-32x32.png';
	import favicon16 from '$lib/assets/favicon-16x16.png';
	import sitemap from '$lib/assets/site.webmanifest';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="manifest" href={sitemap} />
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Roboto+Slab:wght@100..900&display=swap');
	</style>
</svelte:head>

{@render children()}

<style>
	:global(body) {
		background-color: #000c36;
		color: white;
		font-family: 'Roboto Slab';
		font-weight: 400;
	}
</style>
