<script>
    import IconHelp from "$lib/assets/icons/IconHelp.svelte";

    export let id;
</script>

<details class="helper-container" {id}>
    <summary><IconHelp /></summary>
    <div class="helper-content" role="tooltip"><slot /></div>
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
        position: absolute;
    }
    .helper-content {
        width: max-content;
        background-color: var(--body);
        padding: 10px;
        border: 4px solid var(--text-1);
        border-radius: var(--radius-3);
        position: absolute;
        left: -26px;
    }

    @media (max-width: 767px) {
        .helper-content {
            left: inherit;
            right: -26px;
        }
    }
</style>
