<script>
    import { Button } from "m3-svelte";
    import "iconify-icon";
	import { goto } from "$app/navigation";

</script>

<div class="flex justify-center items-center mt-6 md:mt-10">
    <div class="flex flex-col mt-10 md:mt-20">
        <h1 class="text-primary-container roboto-flex-home-maple">About</h1>
    </div>
</div>

<div class="flex justify-center px-4 md:px-0">
    <div class="flex space-x-1 mx-2 md:mx-32">
        <h1 class="text-wrap text-center text-secondary text-base md:text-xl">
            Maple is a music library and organization tool. It allows you to upload your music library and watch it be organized into albums, artists, playlists, and more! You are given robust controls to play and organize your music. It also includes server-side & social features, such as discord RPC integration, friends, statuses, and in the future: playlist transfers & other P2P functions. All music handled client side.
        </h1>
    </div>
</div>

<style>
    .roboto-flex-home-maple {
        font-size: 128px;
        font-family: "Roboto Flex", sans-serif;
        font-optical-sizing: 144;
        font-weight: 1000;
        font-style: normal;
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
    
    @media (max-width: 767px) {
        .roboto-flex-home-maple {
            font-size: 48px;
        }
    }
</style>