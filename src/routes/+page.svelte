<script lang="ts">
	import PopChoiceIcon from '$lib/assets/PopChoice-Icon.png';
</script>

<div>
	<header class="flex flex-col items-center">
		<img src={PopChoiceIcon} alt="icon" />
		<h1>PopChoice</h1>
	</header>
	<main>
		<form action="" method="POST">
			<label for="ques-1"> What's your favorite movie and why? </label>
			<textarea rows="5" cols="80" name="ques-1" id="ques-1"></textarea>

			<label for="ques-2">Are you in the mood for something new or a classic?</label>
			<textarea rows="5" cols="80" name="ques-2" id="ques-2"></textarea>

			<label for="ques-3">Do you wanna have fun or do you want something serious?</label>
			<textarea rows="5" cols="80" name="ques-3" id="ques-3"></textarea>

			<button>Let's Go</button>
		</form>
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
		padding-block-start: 3em;
	}
	label {
		margin-block-start: 2.5em;
		display: block;
	}

	textarea {
		display: block;
		resize: none;
		background-color: #3b4877;
		border-radius: 10px;
	}

	button {
		background-color: #51e08a;
		color: #000c36;
		border-radius: 10px;
		width: 500px;
		height: 70px;
		margin-block: 2em;
	}
</style>
