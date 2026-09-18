<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
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
