<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    export let id;

    onMount(() => {
        if (browser) {
            // @ts-ignore inti script is loaded from above
            Calendly?.initInlineWidget({
                    url: "https://calendly.com/agreatdayfarm/visit?text_color=161613&primary_color=51cf66",
                    parentElement: document.getElementById(id),
                });
        }
    });
</script>

<div {id} class="calendly-container"></div>

<style>
    .calendly-container {
        min-width: 320px;
        height: 700px;
    }
</style>
