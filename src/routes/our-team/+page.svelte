<script>
    import Hero from "$lib/Hero.svelte";
    import cofounders from "$lib/assets/cofounders.webp";
</script>

<Hero
    title="We're a small organization with a big vision & heart"
    content="We seek to create an environment that allows our community members with disabilities to show up joyfully. It takes a team of founders, staff, board members and volunteers to make our organization go!"
/>

<section class="section less-spacing">
    <div class="container">
        <h2>Co-Founders</h2>
        <figure>
            <img
                src={cofounders}
                alt="Patty Closser and Greg Closser sitting on swing together"
            />
            <figcaption>Patty Closser and Greg Closser</figcaption>
        </figure>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <h2>Staff</h2>
        <p>
            <strong>Haley Kimmet Teopaco - Executive Director</strong>
            Haley is focused on building infrastructure to amplify A Great Day Farm's
            long-term community impact. She previously worked in higher education,
            corporate and nonprofit environments, all with a common thread of disability
            and accessibility. This included leading employee accessibility programs
            at Salesforce, running grants & events at TASH in Washington, DC, and
            facilitating inclusive higher education environments for students and
            staff at the University of Minnesota's Disability Resource Center. Her
            work is driven by her own experiences with disability - she identifies
            as “deaf-ish” and leverages assistive technology to do her best work.
        </p>
        <p>
            <strong>John Weyland - Project Manager</strong> John supports the farm
            in many ways - maintaining the grounds, building creative structures,
            problem-solving repairs and more. He keeps the farm's amenities in good
            shape so that visitors have a great experience.
        </p>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <h2>Our Board</h2>
        <p>
            A Great Day Farm is currently organizing a new board to support the
            direction of our nonprofit's long-term efforts. We'll do our best
            work with a diverse representation of backgrounds, experiences &
            skill sets driving our long-term vision and strategy. Additional
            information about our board members will be posted in the future.
        </p>
    </div>
</section>

<style>
    p:has(+ p) {
        margin-bottom: var(--size-5);
    }
    p strong {
        display: block;
    }
    figure {
        place-items: flex-start;
    }
    img {
        border-radius: var(--radius-3);
        max-width: 640px;
        width: 100%;
    }
</style>
