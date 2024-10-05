<script lang="ts">
    import Dialog from "$lib/Dialog.svelte";
    import Paypal from "$lib/vendors/Paypal.svelte";

    export let title: string;
    export let copy: string;
    export let button_text: string;

    title = title ?? "missing title";
    copy = copy ?? "missing copy";
    button_text = button_text ?? "missing button text";
</script>

<section class="section">
    <div class="container">
        <h2>{title}</h2>
        <p>{copy}</p>
        <Dialog name={button_text} id="give-a-donation">
            <Paypal />
        </Dialog>
    </div>
</section>

<style>
    section {
        text-align: center;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f8fafb' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: repeat;
        position: relative;
        margin-top: var(--size-10);
        margin-bottom: -48px;

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
    h2,
    p {
        margin-inline: auto;
    }
    h2 {
        margin-bottom: var(--size-2);
    }
    p {
        margin-bottom: var(--size-5);
    }
</style>
