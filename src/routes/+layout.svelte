<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';

	let isMobile = false;
	onMount(() => {
		isMobile = window.innerWidth <= 768;
	});

	let { children } = $props();
</script>

{@render children()}
