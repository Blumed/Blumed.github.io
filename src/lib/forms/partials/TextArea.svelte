<script>
    export let value = "";
    export let placeholder = "";
    export let id;
    export let label;
    export let required = false;

    export let errors;

    const name = id;
</script>

<div class="form-control">
    <label for={id} class="label">
        <span class="label-text">{label}</span>
    </label>
    <textarea class="textarea" {placeholder} {required} {id} {name} {value} />
    {#if errors}
        {#each errors as error}
            <label for={id} class="label py-0 pt-1">
                <span class="label-text-alt text-error">
                    {error}
                </span>
            </label>
        {/each}
    {/if}
</div>

<style>
    textarea {
        display: block;
        width: 100%;
    }
</style>
