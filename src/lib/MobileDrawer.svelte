<script>
    import Dialog from "./Dialog.svelte";
    import Calendly from "./vendors/Calendly.svelte";
    import Paypal from "./vendors/Paypal.svelte";
</script>

<nav class="mobile-drawer desktop-hidden">
    <Dialog name="Donate" id="header-donate-mobile">
        <Paypal />
    </Dialog>

    <Dialog name="Schedule Visit" id="header-calendly-visit-mobile">
        <Calendly />
    </Dialog>
</nav>

<style>
    .mobile-drawer {
        position: sticky;
        bottom: 0;
        background-color: var(--body);
        left: 0;
        right: 0;
        z-index: 10;
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        padding: 10px;
    }
</style>
