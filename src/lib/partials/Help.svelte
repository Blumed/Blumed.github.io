<script>
    import IconHelp from "$lib/assets/icons/IconHelp.svelte";

    export let id;
</script>
<details class="helper-container" {id}>
    <summary><IconHelp /></summary>
    <div class="helper-content" role="tooltip"><slot/></div>
</details>

<style>
    details > summary {
        list-style: none;
        padding: 0;
    }
    details > summary::-webkit-details-marker {
        display: none;
    }
    .helper-container {
        display: inline-block;
        position: relative;
        top: 6px;
    }
    /* .helper-content {
        position: absolute;
        bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
    } */
</style>