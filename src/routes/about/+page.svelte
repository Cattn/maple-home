<script>
    import { Button } from "m3-svelte";
    import "iconify-icon";
	import { goto } from "$app/navigation";

</script>

<div class="flex justify-center items-center mt-10">
    <div class="flex flex-col mt-20">
        <h1 class="text-primary-container roboto-flex-home-maple">About</h1>
    </div>
</div>

<div class="flex justify-center">
    <div class="flex space-x-1">
        <h1 class="text-wrap text-center text-secondary text-xl">
            Local music library first platform to organize & enjoy your music! 
            All music handled client side. 
            Optional social & data sharing features!
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
</style>