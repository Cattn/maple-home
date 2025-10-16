<script>
    import { Button } from "m3-svelte";
    import "iconify-icon";

</script>

<div class="flex justify-center items-center mt-6 md:mt-10">
    <div class="flex flex-col mt-10 md:mt-20">
        <h1 class="text-primary-container roboto-flex-home-maple">iOS</h1>
    </div>
</div>

<div class="flex justify-center px-4 md:px-0">
    <div class="flex space-x-1 flex-col space-y-2">
        <h1 class="text-wrap text-center text-secondary text-base md:text-xl">
            You can find Maple on the App Store!<br>Additionally your can use the latest beta builds by joining the TestFlight group.
        </h1>
        <Button variant="tonal" onclick={() => {location.href = 'https://apps.apple.com/us/app/maple-music/id6751007051'}}>
            App Store
        </Button>
        <Button variant="tonal" onclick={() => {location.href = 'https://testflight.apple.com/join/1pcMjAqQ'}}>
            TestFlight
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