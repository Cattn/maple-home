<script lang="ts">
	import '../app.css';
	import '../main.css';

	import { onMount } from 'svelte';
	import FloatingBar from '$lib/components/ui/FloatingBar.svelte';
	import BottomBar from '$lib/components/ui/BottomBar.svelte';

	let isMobile = false;
	onMount(() => {
		isMobile = window.innerWidth <= 768;
	});

	let { children } = $props();
</script>

<FloatingBar />
{@render children()}
<BottomBar />