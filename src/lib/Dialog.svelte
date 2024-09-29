<script lang="ts">
    import { browser } from "$app/environment";
    import IconClose from "$lib/assets/icons/iconClose.svelte";

    export let name: string;
    export let id: string;

</script>

<button
    type="button"
    class="button button-dialog"
    on:click={() => browser && id && document.getElementById(id).showModal()}
    aria-label={`Open ${name} Dialog`}>{name}</button
>

<dialog {id}>
    <button
        type="button"
        class="button button-close"
        on:click={() => browser && id && document.getElementById(id).close()}
        aria-label={`Close ${name} Dialog`}>
            <span class="sr-only">Close</span>
            <IconClose fill="red" />
        </button
    >
    <slot />
</dialog>

<style>
    dialog {
        background-color: white;
        padding-top: 46px;
        position: relative;
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
</style>