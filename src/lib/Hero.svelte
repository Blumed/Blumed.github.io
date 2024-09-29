<script lang="ts">
    export let title: string;
    export let content: string | undefined;
</script>

<section class="section hero">
    <div class="container">
        <h1>{title}</h1>
        {#if (typeof content !== "undefined")}
            <p>{content}</p>
        {/if}
    </div>
</section>
