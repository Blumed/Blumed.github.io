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

<style>

    .hero {
        position: relative;
        z-index: 3;

        & h1 {
            display: inline-block;
            margin-bottom: 12px;
        }

        & p {
            display: table;
        }

        & :is(h1, p) {
            position: relative;
            z-index: 3;
            background-color: white;
            padding: 12px;
        }
        &::after  {
            content: "";
            background-image: radial-gradient(var(--brand) 10%, transparent 11%), radial-gradient(var(--brand) 10%, transparent 11%);
            background-position: 0px 0px, 39px 38px;
            background-size: 26px 26px;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }
    }
</style>