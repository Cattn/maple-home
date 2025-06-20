<script lang="ts">
    import { Button, Icon } from "m3-svelte";
    import iconSettings from "@ktibow/iconset-material-symbols/settings-outline";
</script>

<div class="fixed top-12 bg-background w-[100%]">
    <Button square={false} iconType="left" variant="filled">
        <Icon icon={iconSettings} />
        Hello
    </Button>
</div>