<script lang="ts">
    import { Button } from "m3-svelte";
</script>

<div class="bottom-bar">
    <div class="button-container space-x-1">
        <Button variant="tonal" onclick={() => {location.href = "https://github.com/Cattn"}}>
            <iconify-icon icon="octicon:mark-github-16"></iconify-icon>
            Cattn
        </Button>
        <Button variant="tonal" onclick={() => {location.href = "https://github.com/Cattn"}}>
            <iconify-icon icon="ic:round-open-in-new"></iconify-icon>
            Cattn
        </Button>
    </div>
    <div class="button-container space-x-1">
        <Button variant="tonal" onclick={() => {location.href = "https://github.com/HammerPot"}}>
            <iconify-icon icon="octicon:mark-github-16"></iconify-icon>
            HammerPot
        </Button>
        <Button variant="tonal" onclick={() => {location.href = "https://github.com/Nailington"}}>
            <iconify-icon icon="ic:round-open-in-new"></iconify-icon>
            Nailington
        </Button>
    </div>
</div>

<style>
  .bottom-bar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    background: rgb(var(--m3-scheme-tertiary));
    border-radius: var(--m3-util-rounding-large) var(--m3-util-rounding-large) 0 0;
    height: 4rem;
    box-shadow: var(--m3-util-elevation-2);
  }
  
  .button-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.75rem;
  }
  
  .button-container :global(.m3-container) {
    background-color: rgb(var(--m3-scheme-tertiary-container)) !important;
    color: rgb(var(--m3-scheme-on-tertiary-container)) !important;
    min-width: 3rem;
    height: 3rem;
  }

  .button-container :global(iconify-icon) {
        font-size: 1.4em;
        margin-right: -1.6px;
        color: rgb(var(--m3-scheme-on-tertiary-container)) !important;
    }
</style>