<script lang="ts">
    import { browser } from "$app/environment";
    import IconClose from "$lib/assets/icons/iconClose.svelte";

    export let name: string;
    export let id: string;
    export let type: "link" | null;
    let showDialog = false;

    $: if (showDialog) {
        document.getElementById(id)?.addEventListener("click", (event) => {
            if (event.target === document.getElementById(id)) {
                document.getElementById(id).close();
            }
        });
    }

    function dialogOpen() {
        if (browser && id) {
            document.getElementById(id).showModal();
            showDialog = true;
        }
    }
    function dialogClose() {
        if (browser && id) {
            document.getElementById(id).close();
            showDialog = false;
        }
    }
</script>

<button
    type="button"
    class="button button-dialog"
    class:btn-link={type === "link"}
    on:click={() => dialogOpen()}
    aria-label={`Open ${name} Dialog`}>{name}</button
>

<dialog {id}>
    <div class="dialog-innereds">
        <button
            type="button"
            class="button button-close"
            on:click={() => dialogClose()}
            aria-label={`Close ${name} Dialog`}
        >
            <span class="sr-only">Close</span>
            <IconClose fill="red" />
        </button>
        <slot />
    </div>
</dialog>

<style>
    dialog {
        padding: 0;
        background-color: white;
        overflow-x: hidden;
    }

    .dialog-innereds {
        width: 100%;
        padding: 46px 18px 18px;
    }
    .button-dialog {
        text-transform: capitalize;
        background-color: var(--brand);
        text-shadow: none;
    }
    .button-close {
        position: absolute;
        top: 4px;
        right: -5px;
        margin-left: auto;
        margin-bottom: var(--size-2);
        display: block;
    }
    .btn-link {
        padding: 0;
        background-color: transparent;
        color: var(--brand);
        font-weight: inherit;
        text-transform: none;
        &:hover {
            text-decoration: underline;
            text-decoration-color: var(--text-1);
        }
    }
</style>
