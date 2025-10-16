<script>
    import { Button } from "m3-svelte";
    import "iconify-icon";
	import { goto } from "$app/navigation";

</script>

<div class="flex justify-center items-center mt-6 md:mt-10">
    <div class="flex flex-col mt-10 md:mt-20">
        <h1 class="text-primary-container roboto-flex-home-maple">Contact</h1>
    </div>
</div>

<div class="flex flex-col space-y-2">
    <div class="flex justify-center px-4 md:px-0">
        <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
            <div class="text-wrap text-center text-secondary text-base md:text-xl">
                <Button variant="tonal" onclick={() => {location.href = 'mailto:logan@cattn.dev'}}>
                    <iconify-icon icon="ic:round-email"></iconify-icon>
                    <span class="md:inline">logan@cattn.dev</span>
                </Button>
            </div>
            <div class="text-wrap text-center text-secondary text-base md:text-xl">
                <Button variant="tonal" onclick={() => {location.href = 'mailto:potter@hammerpot.dev'}}>
                    <iconify-icon icon="ic:round-email"></iconify-icon>
                    <span class="md:inline">potter@hammerpot.dev</span>
                </Button>
            </div>
        </div>
    </div>
    <div class="text-wrap text-center text-secondary text-base md:text-xl">
        <Button variant="tonal" onclick={() => {location.href = 'https://discord.gg/Wxrp73HVj4'}}>
            <iconify-icon icon="ic:round-open-in-new"></iconify-icon>
            <span class="md:inline">Join our Discord Server</span>
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