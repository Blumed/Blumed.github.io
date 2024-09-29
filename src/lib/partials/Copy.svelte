<script>
    import CopyText from "$lib/utils/CopyText.svelte";
    export let text;
</script>

<div class="copy-text-container">
    <CopyText text={text}>
        {text}
    </CopyText>
</div>


<style>
    .copy-text-container {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1rem;
    }
</style>
