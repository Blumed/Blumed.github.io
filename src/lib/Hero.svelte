<script lang="ts">
    export let title: string;
    export let content: string | undefined;
    export let heroBackground: string | undefined;
</script>

<section
    class={`section hero ${typeof heroBackground === "undefined" ? "hero-gradient" : ""}`}
>
    <div class="container">
        <div class="hero-card">
            <h1 class="bottom-bumper">{title}</h1>
            {#if typeof content !== "undefined"}
                <p>{content}</p>
            {/if}
        </div>
    </div>
    {#if typeof heroBackground !== "undefined"}
        <img
            class="hero-background-image"
            src={heroBackground}
            alt="Happy friends at a great day farm"
            loading="eager"
        />
    {/if}
</section>

<!-- <style>
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
            border-radius: var(--radius-3);
        }
        &::after {
            content: "";
            background-image: radial-gradient(var(--brand) 10%, transparent 11%),
                radial-gradient(var(--brand) 10%, transparent 11%);
            background-position:
                0px 0px,
                39px 38px;
            background-size: 26px 26px;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }
    }
</style> -->

<style>
    .hero-card {
        border-radius: var(--radius-3);
        border: var(--border-size-2) solid var(--text-1);
        width: fit-content;
        max-width: 480px;
    }
    .hero-gradient {
        background-image: linear-gradient(
            90deg,
            hsl(130deg 57% 56%) 0%,
            hsl(130deg 57% 59%) 2%,
            hsl(131deg 58% 61%) 4%,
            hsl(131deg 58% 63%) 8%,
            hsl(131deg 59% 65%) 13%,
            hsl(132deg 60% 67%) 19%,
            hsl(133deg 60% 69%) 26%,
            hsl(133deg 61% 71%) 34%,
            hsl(134deg 62% 73%) 43%,
            hsl(134deg 64% 75%) 53%,
            hsl(135deg 65% 77%) 62%,
            hsl(135deg 66% 79%) 71%,
            hsl(136deg 68% 81%) 78%,
            hsl(137deg 70% 83%) 85%,
            hsl(137deg 72% 85%) 90%,
            hsl(138deg 75% 86%) 94%,
            hsl(138deg 79% 88%) 98%,
            hsl(139deg 84% 90%) 100%
        );
    }
</style>
