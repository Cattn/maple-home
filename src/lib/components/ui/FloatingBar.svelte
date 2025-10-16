<script lang="ts">
    import { Button } from "m3-svelte";
    import "iconify-icon";
	import { goto } from "$app/navigation";
    import { page } from "$lib/store";
    
    let mobileMenuOpen = false;
</script>

<div class="flex justify-center items-center">
    <div class="fixed top-2 bg-primary w-[95%] rounded-2xl p-1 md:hidden flex justify-between items-center">
        <Button variant="tonal" iconType="none" onclick={() => {goto("/")}}>
            <svg width="16" height="16" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_845_2368)">
                <path d="M45.0613 10.244C44.5229 9.8236 43.8223 9.6761 43.1659 9.83835L19.5659 15.7383C18.5776 15.9817 17.8918 16.8667 17.8918 17.8845V36.9415C14.16 35.3116 9.81613 37.0152 8.18626 40.7543C6.55639 44.4861 8.26001 48.83 11.9991 50.4599C15.7309 52.0897 20.0748 50.3861 21.7046 46.647C22.1103 45.7177 22.3168 44.7147 22.3168 43.697V19.6102L41.4918 14.8165V31.0415C37.76 29.4116 33.4161 31.1152 31.7863 34.8543C30.1564 38.5861 31.86 42.93 35.5991 44.5598C39.3309 46.1897 43.6748 44.4861 45.3046 40.747C45.7103 39.8177 45.9168 38.8147 45.9168 37.797V11.9845C45.9168 11.306 45.5996 10.657 45.0686 10.244H45.0613ZM14.9344 46.647C13.3045 46.647 11.9844 45.3268 11.9844 43.697C11.9844 42.0671 13.3045 40.747 14.9344 40.747C16.5643 40.747 17.8844 42.0671 17.8844 43.697C17.8844 45.3268 16.5643 46.647 14.9344 46.647ZM38.5344 40.747C36.9045 40.747 35.5844 39.4268 35.5844 37.797C35.5844 36.1671 36.9045 34.847 38.5344 34.847C40.1643 34.847 41.4844 36.1671 41.4844 37.797C41.4844 39.4268 40.1643 40.747 38.5344 40.747Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_845_2368">
                <rect width="59" height="59" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span class="text-on-secondary-container roboto-flex-home-text text-xs">/ {$page.name}</span>
        </Button>
        
        <div class="relative">
            <Button variant="tonal" iconType="full" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/>
                </svg>
            </Button>
            
            {#if mobileMenuOpen}
                <div class="absolute right-0 top-full mt-2 bg-surface-container rounded-xl shadow-lg border border-outline-variant p-1 min-w-48 z-50">
                    <Button variant="text" iconType="none" class="w-full justify-start p-3" onclick={() => {goto("/"); mobileMenuOpen = false}}>
                        <span class="text-on-surface roboto-flex-home-link text-sm">home</span>
                    </Button>
                    <Button variant="text" iconType="none" class="w-full justify-start p-3" onclick={() => {goto("/about"); mobileMenuOpen = false}}>
                        <span class="text-on-surface roboto-flex-home-link text-sm">about</span>
                    </Button>
                    <Button variant="text" iconType="none" class="w-full justify-start p-3" onclick={() => {goto("/contact"); mobileMenuOpen = false}}>
                        <span class="text-on-surface roboto-flex-home-link text-sm">contact</span>
                    </Button>
                    <div class="border-t border-outline-variant my-1"></div>
                    <Button variant="text" iconType="none" class="w-full justify-start p-3" onclick={() => {location.href = 'https://github.com/Cattn/Maple'; mobileMenuOpen = false}}>
                        <div class="flex items-center gap-2 justify-center">
                            <svg width="16" height="16" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>
                            <span class="text-on-surface roboto-flex-home-link text-sm">Cattn/Maple</span>
                        </div>
                    </Button>
                </div>
            {/if}
        </div>
    </div>

    <div class="fixed grid-cols-3 top-5 bg-primary w-[80%] rounded-4xl p-2 hidden md:grid">
        <div class="flex items-center gap-2">
            <Button variant="tonal" iconType="none" onclick={() => {goto("/")}}>
                <svg width="20" height="20" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_845_2368)">
                    <path d="M45.0613 10.244C44.5229 9.8236 43.8223 9.6761 43.1659 9.83835L19.5659 15.7383C18.5776 15.9817 17.8918 16.8667 17.8918 17.8845V36.9415C14.16 35.3116 9.81613 37.0152 8.18626 40.7543C6.55639 44.4861 8.26001 48.83 11.9991 50.4599C15.7309 52.0897 20.0748 50.3861 21.7046 46.647C22.1103 45.7177 22.3168 44.7147 22.3168 43.697V19.6102L41.4918 14.8165V31.0415C37.76 29.4116 33.4161 31.1152 31.7863 34.8543C30.1564 38.5861 31.86 42.93 35.5991 44.5598C39.3309 46.1897 43.6748 44.4861 45.3046 40.747C45.7103 39.8177 45.9168 38.8147 45.9168 37.797V11.9845C45.9168 11.306 45.5996 10.657 45.0686 10.244H45.0613ZM14.9344 46.647C13.3045 46.647 11.9844 45.3268 11.9844 43.697C11.9844 42.0671 13.3045 40.747 14.9344 40.747C16.5643 40.747 17.8844 42.0671 17.8844 43.697C17.8844 45.3268 16.5643 46.647 14.9344 46.647ZM38.5344 40.747C36.9045 40.747 35.5844 39.4268 35.5844 37.797C35.5844 36.1671 36.9045 34.847 38.5344 34.847C40.1643 34.847 41.4844 36.1671 41.4844 37.797C41.4844 39.4268 40.1643 40.747 38.5344 40.747Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_845_2368">
                    <rect width="59" height="59" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <h1 class="text-on-secondary-container roboto-flex-home-text">/ {$page.name}</h1>
            </Button>
        </div>
        <div class="flex justify-center items-center gap-2 button-padding">
            <Button variant="text" iconType="none" onclick={() => {goto("/")}}>
                <h1 class="text-on-secondary roboto-flex-home-link">home</h1>
            </Button>
            <Button variant="text" iconType="none" onclick={() => {goto("/about")}}>
                <h1 class="text-on-secondary roboto-flex-home-link">about</h1>
            </Button>
            <Button variant="text" iconType="none" onclick={() => {goto("/contact")}}>
                <h1 class="text-on-secondary roboto-flex-home-link">contact</h1>
            </Button>
        </div>
        <div class="flex justify-end items-center">
            <Button onclick={() => {location.href = 'https://github.com/Cattn/Maple'}} variant="tonal" >
                <svg width="20" height="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>
                <span class="hidden md:inline">Cattn/Maple</span>
            </Button>
        </div>
    </div>
</div>

<style>
    .roboto-flex-home-text {
        font-family: "Roboto Flex", sans-serif;
        font-optical-sizing: 22;
        font-weight: 800;
        font-style: normal;
        font-variation-settings:
            "slnt" -10,
            "wdth" 128,
            "GRAD" 0,
            "XOPQ" 131,
            "XTRA" 468,
            "YOPQ" 55,
            "YTAS" 750,
            "YTDE" -203,
            "YTFI" 738,
            "YTLC" 514,
            "YTUC" 712;
    }

    .roboto-flex-home-link {
        font-family: "Roboto Flex", sans-serif;
        font-optical-sizing: 22;
        font-weight: 800;
        font-style: normal;
        text-decoration: underline;
        font-style: italic;
        font-variation-settings:
            "slnt" 0,
            "wdth" 128,
            "GRAD" 0,
            "XOPQ" 131,
            "XTRA" 468,
            "YOPQ" 55,
            "YTAS" 750,
            "YTDE" -203,
            "YTFI" 738,
            "YTLC" 514,
            "YTUC" 712;
    }

    .button-padding :global(button) {
        padding: 2px;
    }

    @media (max-width: 767px) {
        .roboto-flex-home-text {
            font-optical-sizing: 16;
            font-size: 0.875rem;
        }
        
        .roboto-flex-home-link {
            font-optical-sizing: 18;
            font-size: 0.75rem;
        }
    }
</style>