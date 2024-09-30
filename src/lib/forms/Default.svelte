<script>
    import Input from "$lib/forms/partials/Input.svelte";
    import TextArea from "$lib/forms/partials/TextArea.svelte";

    export let form;
    export let id;
</script>

<form action="POST" {id}>
    <Input
        id="full_name"
        label="Full Name"
        placeholder="First & Last Name"
        value={form?.data?.full_name ?? ""}
        required
        errors={null}
    />
    <Input
        type="email"
        id="email"
        label="Email Address"
        placeholder="email@address.com"
        value={form?.data?.email ?? ""}
        required
        errors={null}
    />
    <TextArea
        id="message"
        label="Message"
        placeholder="What is on your mind?"
        value={form?.data?.message ?? ""}
        required
        errors={null}
    />
    <button class="button">Submit</button>
</form>

<style>
    form {
        display: inline-grid;
        border-radius: 8px;
        width: 100%;
    }
    form input {
        border: 1px solid red;
    }
    button {
        margin-top: var(--size-4);
        color: inherit;
        background-color: var(--brand);
        width: fit-content;
    }
</style>
