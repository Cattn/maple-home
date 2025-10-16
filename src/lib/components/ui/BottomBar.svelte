<script lang="ts">
    import { Button } from "m3-svelte";
</script>

<div class="bottom-bar">
    <div class="button-container space-x-1">
        <Button variant="tonal" onclick={() => {location.href = "https://github.com/Cattn"}}>
            <iconify-icon icon="octicon:mark-github-16"></iconify-icon>
            <span class=" md:inline">Cattn</span>
        </Button>
        <Button variant="tonal" onclick={() => {location.href = "https://github.com/HammerPot"}}>
            <iconify-icon icon="octicon:mark-github-16"></iconify-icon>
            <span class=" md:inline">HammerPot</span>
        </Button>
    </div>
    <div class="button-container space-x-1">
      <Button variant="tonal" onclick={() => {location.href = "https://discord.gg/Wxrp73HVj4"}}>
        <!-- <iconify-icon icon="logos:discord-icon"></iconify-icon> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 256 199"><path fill-rule="evenodd" clip-rule="evenodd" fill=rgb(var(--m3-scheme-on-tertiary-container) d="M216.856 16.597A208.5 208.5 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0 0 79.735 175.3a136.4 136.4 0 0 1-21.846-10.632a109 109 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 0 0 5.355 4.237a136 136 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2s23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18"/></svg>
        <span class=" md:inline">Discord</span>
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
    height: 3rem;
    box-shadow: var(--m3-util-elevation-2);
  }
  
  .button-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5rem;
  }
  
  .button-container :global(.m3-container) {
    background-color: rgb(var(--m3-scheme-tertiary-container)) !important;
    color: rgb(var(--m3-scheme-on-tertiary-container)) !important;
    min-width: 2.5rem;
    height: 2.5rem;
  }

  .button-container :global(iconify-icon) {
        font-size: 1.2em;
        margin-right: -1.6px;
        color: rgb(var(--m3-scheme-on-tertiary-container)) !important;
    }

  @media (min-width: 768px) {
    .bottom-bar {
      height: 4rem;
    }
    
    .button-container {
      padding: 0.75rem;
    }
    
    .button-container :global(.m3-container) {
      min-width: 3rem;
      height: 3rem;
    }

    .button-container :global(iconify-icon) {
      font-size: 1.4em;
    }
  }
</style>