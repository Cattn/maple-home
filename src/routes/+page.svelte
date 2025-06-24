<script>
    import { Button } from "m3-svelte";
    import "iconify-icon";
	import { goto } from "$app/navigation";

</script>

<div class="flex justify-center items-center mt-20 md:mt-42">
    <div class="flex flex-col justify-center items-center">
        <div class="">
            <svg class="maple-logo w-24 h-24 md:w-[219px] md:h-[219px]" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div class="flex flex-col mt-8 md:mt-20">
        <h1 class="text-primary-container roboto-flex-home-maple">MAPLE.</h1>
        <h1 class="text-secondary roboto-flex-home-music">MUSIC</h1>
    </div>
</div>

<div class="flex justify-center mt-8 md:mt-0">
    <div class="flex flex-col items-center">
        <p class="available-on-text text-on-surface-variant ">Available On</p>
        <div class="flex space-x-8 platform-icons">
            <a href="https://play.maple.music/">
                <div class="flex flex-col items-center platform-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...$$props}>
                        <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20" />
                    </svg>
                    <span class="platform-label">Web</span>
                </div>
            </a>
            <a href="/apple">
                <div class="flex flex-col items-center platform-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...$$props}>
                        <path fill="currentColor" d="M27 2H5C3.344 2 2 3.344 2 5v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3V5c0-1.656-1.344-3-3-3M9.938 24.031a1.248 1.248 0 1 1-2.162-1.25l.894-1.544q1.509-.46 2.475.712zm8.681-3.368H7.25c-.688 0-1.25-.563-1.25-1.25s.563-1.25 1.25-1.25h3.188l4.087-7.075l-1.281-2.212A1.25 1.25 0 0 1 13.7 7.17a1.25 1.25 0 0 1 1.706.456l.556.962l.556-.962a1.248 1.248 0 1 1 2.162 1.25l-5.362 9.288h3.881c1.262 0 1.969 1.481 1.419 2.5zm6.131 0h-1.813l1.225 2.119c.344.6.137 1.363-.456 1.706c-.6.344-1.363.137-1.706-.456c-2.056-3.556-3.594-6.231-4.625-8.006c-1.044-1.813-.3-3.625.444-4.237q1.227 2.129 3.681 6.375h3.25a1.25 1.25 0 1 1 0 2.5z" />
                    </svg>
                    <span class="platform-label">iOS</span>
                </div>
            </a>
        </div>
    </div>
</div>

<div class="flex justify-center mt-4">
    <div class="large-button md:large-button-desktop flex space-x-1">
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
    
    @media (max-width: 767px) {
        .roboto-flex-home-maple {
            font-size: 48px;
            line-height: 0.8;
        }
        .roboto-flex-home-music {
            font-size: 48px;
        }
    }

    .maple-logo {
        color: var(--color-primary-container);
    }

    .available-on-text {
        font-family: "Roboto Flex", sans-serif;
        font-size: 16px;
        font-weight: 500;
        opacity: 0.8;
    }

    .platform-icons {
        opacity: 0.9;
    }

    .platform-item {
        transition: opacity 0.2s ease;
    }

    .platform-item:hover {
        opacity: 0.7;
    }

    .platform-icon {
        font-size: 32px;
        color: var(--color-on-surface);
        margin-bottom: 4px;
    }

    .platform-label {
        font-family: "Roboto Flex", sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: var(--color-on-surface-variant);
        opacity: 0.8;
    }

    @media (max-width: 767px) {
        .platform-icon {
            font-size: 28px;
        }
        
        .platform-label {
            font-size: 11px;
        }
        
        .available-on-text {
            font-size: 14px;
        }
    }

    .large-button {
        transform: scale(1.2);
        transform-origin: center;
        margin: 10px 0;
    }
    .large-button :global(button) {
        font-size: 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .large-button :global(iconify-icon) {
        font-size: 1.4em;
        margin-right: -1.6px;
    }
</style>