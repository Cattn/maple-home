<script>
    import { Button, Icon } from "m3-svelte";
    /* import Face from '@material-design-icons/svg/filled/face.svg?raw'; */
    import iconSettings from "@ktibow/iconset-material-symbols/settings-outline";

</script>

<Button square={false} iconType="left" variant="filled">
    <Icon icon={iconSettings} />
    Hello
</Button>