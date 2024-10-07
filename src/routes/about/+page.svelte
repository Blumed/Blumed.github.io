<script>
    import Hero from "$lib/Hero.svelte";
    import ArticleImage from "$lib/assets/about-article.png";
    import heroBackground from "$lib/assets/old-truck.jpg";
    import Visit from "$lib/Visit.svelte";
</script>

<svelte:head>
    <title>About Us</title>
    <meta name="description" content="About this app" />
</svelte:head>

<Hero
    title="Learn more about our community and bring us together"
    {heroBackground}
/>

<section class="section">
    <div class="container">
        <h2>
            We offer free recreation and community-building opportunities for
            people with disabilities.
        </h2>
        <p>
            We are focused on providing a community-centric space that allows
            people, especially those who navigate barriers in many other
            environments, to experience the freedom and joy of play. We welcome
            individuals with disabilities ranging in age from young children to
            aging adults as well as their families and the various groups that
            provide support - schools, day service centers, group homes and
            more.
        </p>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <blockquote>
            “My son loves coming to A Great Day Farm. You can just feel his
            enjoyment to wander and explore things on his own without any
            constraints. It makes me very happy to see him so carefree.”
        </blockquote>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <div class="cards">
            <article class="card card-invert">
                <h2>Our Story</h2>
                <p>
                    For many years, the Closser Family struggled to find places
                    that felt welcoming of their family’s diverse accessibility
                    needs. When they saw how two of their kids with disabilities
                    responded to the freedom of an open and safe environment on
                    a farm, their course was set. The Closser family set up a
                    501(c)(3) private operating foundation and they’ve been
                    focused on helping others experience this opportunity ever
                    since.
                </p>
                <a class="link-btn" href="/our-story"
                    >Learn more about our Story</a
                >
            </article>
            <article class="card">
                <h2>Our Approach</h2>
                <p>
                    We work to address gaps for people with disabilities who
                    often experience significant barriers to using
                    community-based “<a
                        href="https://en.wikipedia.org/wiki/Third_place"
                        target="_blank"
                        rel="noopener noreferrer">third places</a
                    >.” A Great Day Farm hopes to provide a sense of freedom and
                    exploration by offering a range of flexible activities and
                    spaces on a drop-in basis to support all types of adventures
                    and needs.
                </p>
            </article>
            <article class="card">
                <h2>Our Impact</h2>
                <p>
                    By removing traditional barriers to recreation (whether that
                    is physical, financial, scheduling, safety, or attitudinal),
                    thousands of farm visitors have experienced the benefits of
                    recreation, enhanced connection to nature and a chance to
                    build autonomy in a safe and structured space.
                </p>
            </article>
        </div>
    </div>
</section>

<Visit
    title="Come have a great day"
    copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus aut asperiores eum."
    button_text="Signup For a Visit"
/>

<style>
    .link-btn {
        margin-top: var(--size-5);
    }
</style>
