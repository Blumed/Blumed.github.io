<script lang="ts">
    export let title: string | null;
    export let content: string | undefined | null;
    export let image: string;
    export let alt: string;
</script>

<section
    class={`section hero ${typeof image === "undefined" ? "hero-gradient" : ""}`}
>
    <div class="container">
        <div class="hero-card">
            <h1 class="bottom-bumper">{title}</h1>
            {#if typeof content !== "undefined"}
                <p>{content}</p>
            {/if}
        </div>
    </div>
    {#if typeof image !== "undefined"}
        <picture class="hero-background-image">
            <!-- <source
                media="(mmin-width: 768px)"
                srcset="elva-480w-close-portrait.jpg"
            /> -->
            <img src={image} loading="eager" {alt} />
        </picture>
    {/if}
</section>

<style>
    .hero {
        position: relative;
        z-index: 1;
        padding-block: 14%;
        margin-bottom: var(--size-10);
        overflow: hidden;

        & .container {
            position: relative;
            width: min(100% - 2rem, 96rem);
        }

        & .hero-card {
            position: relative;
            z-index: 2;
            background-color: white;
            padding: 34px;
            border-radius: var(--radius-3);
            border: var(--border-size-2) solid var(--text-1);
            width: fit-content;
            max-width: 480px;
        }
    }

    .hero-background-image {
        position: absolute;
        top: 0;
        z-index: 1;
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

    @media (max-width: 767px) {
        .hero {
            padding-block: 200px 0;
            margin-bottom: var(--size-1);
        }

        .hero .container {
            left: 0;
        }

        .hero h1 {
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }
</style>
