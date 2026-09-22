<script lang="ts">
	import PopChoiceIcon from '$lib/assets/PopChoice-Icon.png';
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';

	let { form }: PageProps = $props();
</script>

<div>
	<header class="flex flex-col items-center">
		<img src={PopChoiceIcon} alt="icon" />
		<h1>PopChoice</h1>
	</header>
	<main>
		{#if form?.success}
			<p>{form.movie}</p>
		{:else}
			<form use:enhance method="POST" class="flex flex-col">
				<label for="ques-1"> What's your favorite movie and why? </label>
				<textarea
					class="focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
					rows="4"
					name="ques-1"
					id="ques-1"
					placeholder="e.g. Tell us a movie you love and why it stuck with you"></textarea>

				<label for="ques-2">Are you in the mood for something new or a classic?</label>
				<textarea
					class="focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
					rows="3"
					name="ques-2"
					id="ques-2"
					placeholder="e.g. I'm in the mood for something new"></textarea>

				<label for="ques-3">Do you wanna have fun or do you want something serious?</label>
				<textarea
					rows="3"
					name="ques-3"
					id="ques-3"
					class="focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
					placeholder="e.g. I want something fun and lighthearted, nothing too heavy"></textarea>

				<p class="pt-4 text-red-400">{form?.message}</p>
				<button class="cursor-pointer self-center">Let's Go</button>
			</form>
		{/if}
	</main>
</div>

<style>
	header {
		h1 {
			font-family: 'Carter One';
			font-weight: 400;
			font-size: 3rem;
		}
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: 1em;
		padding-block-start: 3em;
	}
	label {
		margin-block-start: 2.5em;
		margin-block-end: 0.5em;
		display: block;
		letter-spacing: 0.5px;
	}

	form {
		width: 700px;
	}
	textarea {
		padding: 0.5em;
		display: block;
		resize: none;
		background-color: #3b4877;
		border-radius: 10px;
		letter-spacing: 0.5px;
		width: 100%;
	}

	button {
		background-color: #51e08a;
		color: #000c36;
		border-radius: 10px;
		width: 100%;
		height: 70px;
		margin-block: 2em;
	}

	@media (max-width: 700px) {
		form {
			width: 100%;
		}
	}
</style>
