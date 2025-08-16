<script lang="ts">
	import '../app.css';
	import '../main.css';

	import { onMount } from 'svelte';
	import FloatingBar from '$lib/components/ui/FloatingBar.svelte';
	import BottomBar from '$lib/components/ui/BottomBar.svelte';

	import { page as pageStore } from '$lib/store';
	import { page } from '$app/state';

	let isMobile = false;
	onMount(() => {
		isMobile = window.innerWidth <= 768;
	});

	let { children } = $props();

	function getPageName(pathname: string): string {
		switch (pathname) {
			case '/':
				return 'Home';
			case '/about':
				return 'About';
			case '/contact':
				return 'Contact';
			case '/apple':
				return 'Apple';
			case '/privacy':
				return 'Privacy';
			default:
				return 'Unknown';
		}
	}

	$effect(() => {
		pageStore.set({
			name: getPageName(page.url.pathname),
			path: page.url.pathname,
			url: {
				pathname: page.url.pathname
			}
		});
	});
</script>

<FloatingBar />
<div class="pt-16 md:pt-20 pb-12 md:pb-16">
    {@render children()}
</div>
<BottomBar />