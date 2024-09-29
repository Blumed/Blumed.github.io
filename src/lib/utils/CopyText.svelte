<script lang="ts">
    import IconCheck from "$lib/assets/icons/IconCheck.svelte";
    import IconCopy from "$lib/assets/icons/IconCopy.svelte";
    import IconError from "$lib/assets/icons/IconError.svelte";
    export let text: string;

    let toggleCopyIcon = false;
    let toggleCheckIcon = false;
    let toggleErrorIcon = false;

    function copy() {
        if (text !== "") {
            navigator.clipboard.writeText(text).then(() => {
                toggleCopyIcon = false;
                toggleCheckIcon = true;
                setTimeout(() => {
                    toggleCheckIcon = false;
                }, 2000);
            });
        } else {
            toggleCheckIcon = false;
            toggleCopyIcon = false;
            toggleErrorIcon = true;
            setTimeout(() => {
                toggleErrorIcon = false;
            }, 2000);
        }
    }
</script>

<button
    type="button"
    class="button-copy"
    aria-label="copy text"
    title="Copy text to clipboard"
    on:click={() => copy()}
    on:mouseenter={() => (toggleCopyIcon = true)}
    on:mouseleave={() => (toggleCopyIcon = false)}
>
    <slot />
    {#if toggleCopyIcon && !toggleCheckIcon}
        <IconCopy fill={null} />
    {/if}
    {#if toggleCheckIcon}
        <IconCheck fill="green" />
    {/if}
    {#if !toggleCopyIcon && !toggleCheckIcon && toggleErrorIcon}
        <IconError fill={null} />
    {/if}
</button>

<style>
    .button-copy {
        border: 0;
        background: none;
        padding: 0;
        margin: 0;
        text-wrap: balance;
        text-align: left;
    }
</style>
