<script>
    import { Button } from "m3-svelte";
    import "iconify-icon";
	import { goto } from "$app/navigation";

</script>

<div class="flex justify-center items-center mt-42">
    <div class="flex flex-col justify-center items-center">
        <div class="">
            <svg class="maple-logo" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 219px; height: 219px;">
                <g clip-path="url(#clip0_845_2368)">
                <path d="M45.0613 10.244C44.5229 9.8236 43.8223 9.6761 43.1659 9.83835L19.5659 15.7383C18.5776 15.9817 17.8918 16.8667 17.8918 17.8845V36.9415C14.16 35.3116 9.81613 37.0152 8.18626 40.7543C6.55639 44.4861 8.26001 48.83 11.9991 50.4599C15.7309 52.0897 20.0748 50.3861 21.7046 46.647C22.1103 45.7177 22.3168 44.7147 22.3168 43.697V19.6102L41.4918 14.8165V31.0415C37.76 29.4116 33.4161 31.1152 31.7863 34.8543C30.1564 38.5861 31.86 42.93 35.5991 44.5598C39.3309 46.1897 43.6748 44.4861 45.3046 40.747C45.7103 39.8177 45.9168 38.8147 45.9168 37.797V11.9845C45.9168 11.306 45.5996 10.657 45.0686 10.244H45.0613ZM14.9344 46.647C13.3045 46.647 11.9844 45.3268 11.9844 43.697C11.9844 42.0671 13.3045 40.747 14.9344 40.747C16.5643 40.747 17.8844 42.0671 17.8844 43.697C17.8844 45.3268 16.5643 46.647 14.9344 46.647ZM38.5344 40.747C36.9045 40.747 35.5844 39.4268 35.5844 37.797C35.5844 36.1671 36.9045 34.847 38.5344 34.847C40.1643 34.847 41.4844 36.1671 41.4844 37.797C41.4844 39.4268 40.1643 40.747 38.5344 40.747Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_845_2368">
                <rect width="59" height="59" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>
    <div class="flex flex-col mt-20">
        <h1 class="text-primary-container roboto-flex-home-maple">MAPLE.</h1>
        <h1 class="text-secondary roboto-flex-home-music">MUSIC</h1>
    </div>
</div>

<div class="flex justify-center">
    <div class="large-button flex space-x-1">
        <Button variant="filled" iconType="left" onclick={() => {goto("/about")}}>
            <iconify-icon icon="material-symbols:help"></iconify-icon>
            More Info
        </Button>
        <Button variant="filled" iconType="left" onclick={() => {location.href = 'https://play.maple.music/'}}>
            <iconify-icon icon="material-symbols:arrow-outward-rounded"></iconify-icon>
            Open
        </Button>
    </div>
</div>

<style>
    .roboto-flex-home-maple {
        font-size: 128px;
        font-family: "Roboto Flex", sans-serif;
        font-optical-sizing: 144;
        font-weight: 1000;
        font-style: normal;
        line-height: 0;
        font-variation-settings:
            "slnt" 0,
            "wdth" 151,
            "GRAD" -200,
            "XOPQ" 71,
            "XTRA" 603,
            "YOPQ" 25,
            "YTAS" 750,
            "YTDE" -203,
            "YTFI" 738,
            "YTLC" 514,
            "YTUC" 712;
    }
    .roboto-flex-home-music {
        font-size: 128px;
        font-family: "Roboto Flex", sans-serif;
        font-optical-sizing: 144;
        font-weight: 1000;
        font-style: normal;
        text-align: right;
        font-variation-settings:
            "slnt" 0,
            "wdth" 151,
            "GRAD" -200,
            "XOPQ" 71,
            "XTRA" 603,
            "YOPQ" 25,
            "YTAS" 750,
            "YTDE" -203,
            "YTFI" 738,
            "YTLC" 514,
            "YTUC" 712;
    }

    .maple-logo {
        color: var(--color-primary-container);
    }

    .large-button {
        transform: scale(2.5);
        transform-origin: center;
        margin: 20px 0;
    }

    .large-button :global(button) {
        font-size: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .large-button :global(iconify-icon) {
        font-size: 1.4em;
        margin-right: -1.6px;
    }
</style>