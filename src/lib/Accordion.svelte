<script>
    import { slide } from "svelte/transition";
    export let id = "";
    export let title = "";
    let isExpanded = false;
</script>

<h3>
    <button
        class="button"
        id={`${id}-header`}
        aria-controls={`${id}-panel`}
        aria-expanded={isExpanded}
        on:click={() => (isExpanded = !isExpanded)}>{title}</button
    >
</h3>

{#key isExpanded}
    <article
        class="accordion-body"
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        hidden={!isExpanded}
        in:slide
        out:slide
    >
        <slot />
    </article>
{/key}

<style>
    h3 {
        font-size: 1.2675rem;
        margin-top: 27px;
        margin-bottom: 0;
        background-color: var(--brand);
    }

    .accordion-body {
        padding: 35px 15px 0;
    }

    .button {
        border-radius: 0;
        box-shadow: 12px 12px 0 0 var(--color-white);
        line-height: 25px;
        padding-block: 18px;
        position: relative;
        text-align: left;
        justify-content: flex-start;
        width: 100%;
        height: 100%;

        &::after {
            content: "";
            width: 12px;
            background-color: var(--color-black);
            height: 2px;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        &::before {
            content: "";
            width: 2px;
            background-color: var(--color-black);
            height: 12px;
            position: absolute;
            right: 25px;
            top: 50%;
            transform: rotate(0deg) translateY(-50%);
            transform-origin: 50% 0px;
            transition: all 0.4s ease;
        }

        &[aria-expanded="true"]::before {
            transform: rotate(90deg) translateY(-6px);
        }

        &:hover {
            transform: translate(3px, 3px);
            box-shadow: 6px 6px 0 0 var(--color-white) !important;
        }

        &:active {
            transform: translate(6px, 6px);
            box-shadow: 3px 3px 0 0 var(--color-white) !important;
        }
    }

    @media (max-width: 768px) {
        .button {
            text-align: left;
        }
    }
</style>