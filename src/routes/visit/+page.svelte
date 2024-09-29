<script>
    import Hero from "$lib/Hero.svelte";
    import Copy from "$lib/partials/Copy.svelte";
    const address = "5575 115th St. East, Northfield, MN 55057";
</script>

<Hero title="Visit" content="This is some supporting general over view text of this page" />

<section class="section">
    <div class="container">
        <h2>Visiting the Farm</h2>
        <p>A Great Day Farm offers free indoor and outdoor space to individuals, families and small groups on a <strong>pre-registration basis</strong>. We foster a proactively accessible & inclusive environment that removes barriers so that visitors can show up (joy)fully.</p>
    </div>
</section>
<section class="section">
    <div class="container">
        <h2>Pre Register</h2>
        <p>Your Visit We ask that you pre-register your visit to the farm. This improves the experience for everybody. It ensures that the space is not crowded and remains comfortable and accessible for all. </p>
    </div>
</section>
<section class="section">
    <div class="container">
        <h2>Staffing</h2>
        <p>We do not provide on-site staff during visiting hours, including caregivers or Personal Care Assistants (PCAs). If you have specific needs, please bring support with you.</p>
    </div>
</section>
<section class="section">
    <div class="container">
        <h2>Hours</h2>
        <p>Labor Day - Memorial Day: <strong><time>9:00am - 5:00pm</time></strong></p>
        <p>Memorial Day - Labor Day: <strong><time>9:00am - 8:00pm</time></strong></p>
    </div>
</section>
<section class="section">
    <div class="container">
        <h2>Location</h2>
        <p>We are located at <Copy text={address} /></p>
    </div>
</section>

<style>
    section {
        padding-block: var(--size-6);
    }
</style>