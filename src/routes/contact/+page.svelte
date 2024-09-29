<!-- <script lang="ts">
    import Hero from "$lib/Hero.svelte";
    import Calendly from "$lib/forms/Calendly.svelte";
    import Default from "$lib/forms/Default.svelte";
    import Address from "$lib/partials/Copy.svelte";
    import { fly } from "svelte/transition";
    const form_question = "question";
    const form_tour = "tour";
    let selectedForm = form_question;

    function selectForm(form: string) {
        selectedForm = form;
    }
</script>

<svelte:head>
    <title>Contact</title>
    <meta name="description" content="Contact us here at a great farm" />
</svelte:head>

<Hero
    title="Contact Us"
    content="Do you have a question, or would you like some additional information? Drop
    us a line."
/>
<section class="section">
    <div class="contact-grid container">
        <div class="form-switch">
            <h2>How can we help you today?</h2>
            <div class="button-group">
                <button
                    type="button"
                    class={`button button-form-select ${selectedForm === form_question ? "active" : ""}`}
                    on:click={() => selectForm(form_question)}>Question</button
                >
                <button
                    type="button"
                    class={`button button-form-select ${selectedForm === form_tour ? "active" : ""}`}
                    on:click={() => selectForm(form_tour)}
                    >Schedule a Tour</button
                >
            </div>
            <div class="addtional-info">
                <h3>Additional Information</h3>
                <Address />
            </div>
        </div>
        {#if selectedForm === "question"}
            <Default id={selectedForm} form="message" />
        {/if}
        {#if selectedForm === "tour"}
            <Calendly id="contact" />
        {/if}
    </div>
</section>

<style>
    .form-switch {
        list-style: none;
        padding-left: 0;
        margin-top: var(--size-7);
    }

    .button-form-select {
        &.active {
            border: 4px solid var(--brand);
        }
    }

    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    .addtional-info {
        margin-top: var(--size-8);
    }
</style> -->
