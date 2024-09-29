<script>
    export let value = "";
    export let placeholder = "";
    export let id;
    export let label;
    export let type = "text";
    export let required = false;

    export let errors;

    const name = id;
</script>

<div class="form-control">
    <label for={id} class="label">
        <span class="label-text">{label}</span>
    </label>
    <input
        class={`input ${id}`}
        {type}
        {placeholder}
        {required}
        {id}
        {name}
        {value}
    />

    {#if errors}
        {#each errors as error}
            <label for={id} class="label">
                <span class="text-error">
                    {error}
                </span>
            </label>
        {/each}
    {/if}
</div>

<style>
    label:has(+ [required]) span:after {
        content: "*";
        margin-left: 4px;
        color: red;
    }
    input {
        display: block;
        background-color: var(--stone-0);
        width: 100%;
    }
    .form-control {
        margin-bottom: var(--size-2);
    }
</style>
