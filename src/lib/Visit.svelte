<script lang="ts">

    import Calendly from "$lib/forms/Calendly.svelte";
    import Dialog from "$lib/Dialog.svelte";

    export let title: string;
    export let copy: string;
    export let button_text: string;

    title = title ?? 'missing title';
    copy = copy ?? 'missing copy';
    button_text = button_text ?? 'missing button text';
</script>

<section class="section">
    <div class="container">
        <h2>{title}</h2>
        <p>{copy}</p>
        <Dialog name={button_text} id="visit-us">
            <Calendly id="visit" />
        </Dialog>
    </div>
</section>

<style>
    section {
        text-align: center;
        /* background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f8fafb' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: repeat;
        position: relative;
        margin-top: var(--size-10);

        &:after {
            content: "";
            background: linear-gradient(180deg, hsla(0, 0%, 93%, 0), #fff);
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }
    }
    .container {
        position: relative;
        z-index: 2;
    }
    h2,p {
        margin-inline: auto;
    }
    h2 {
        margin-bottom: var(--size-2)
    }
    p {
        margin-bottom: var(--size-5)
    }
</style>