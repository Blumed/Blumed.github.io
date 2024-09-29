<script>
    import Hero from "$lib/Hero.svelte";
    import ArticleImage from "$lib/assets/about-article.png";
    import Visit from "$lib/Visit.svelte";
</script>

<svelte:head>
    <title>About Us</title>
    <meta name="description" content="About this app" />
</svelte:head>

<Hero
    title="About Us"
    content="Recreational Facility for Developmentally Disabled Individuals"
/>

<section class="section">
    <div class="container">
        <div class="content-layout">
            <div class="content">
                <h2>Our Story</h2>
                <p>
                    Founded by Greg and Patty Closser of Northfield, MN, A Great
                    Day Farm grew organically from their experiences as parents
                    to seven biological and adopted kids - two of whom have
                    disabilities with unique support needs. As they raised their
                    family, the Clossers realized that their kids’ disability
                    impacts posed challenges in many traditional public
                    environments. Greg, a handy business owner, and Patty, a
                    stay-at-home parent with a creative vision, sought to build
                    a home environment that met their sons’ needs while
                    providing the space & freedom to be fully themselves.
                </p>
            </div>
            <img
                class="content-image"
                src={ArticleImage}
                alt="Having fun at a great day farm"
            />
        </div>
        <div class="continue-story">
            <p>
                When Patty and Greg invited their son’s special education
                class out to the family’s property, they were heartened to
                see how positively other kids with a variety of disabilities
                and accessibility needs responded to the environment. A new
                purpose was born, and the Clossers set about planning an
                accessible farm that would be intentionally designed to
                welcome adults and children with disabilities, especially
                those with more significant support needs, at no cost. As
                Greg put it, “You only live so long. I believe everyone
                should do something to make this world better. We didn’t
                want to leave this earth without doing something.”
            </p>
            <p>
                In 2013, Greg and Patty successfully obtained 501(c)3 status
                and quickly broke ground on a 3400 square foot accessible
                building to replace an old shed they’d repurposed on the
                grounds. With Greg’s retirement a few years later, the
                family launched a full fundraising effort to expand indoor
                and outdoor recreational amenities. These efforts allowed
                the Clossers to add a 3.5 acre fenced-in outdoor playground
                with walking/rolling paths, a pavilion, interactive play
                structures and more.
            </p>
            <p>
                Through a wide network of dedicated donors, community
                grants, and the family’s ongoing contributions, the Clossers
                have worked tirelessly to add features to the farm based on
                community feedback while ensuring the farm remains free for
                people with disabilities. The Clossers have a purpose that’s
                grown well beyond their family and is now a part of their
                legacy. Patty shares, “After moving here, where our sons had
                the room to run and feel free, a huge weight was lifted.
                That is the same feeling we hope to give everyone who visits
                A Great Day Farm.”
            </p>
        </div>
    </div>
</section>
<Visit
    title="Come have a great day"
    copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus aut asperiores eum."
    button_text="Signup For a Visit"
/>

<style>
    .content-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: var(--size-8);
    }

    .content {
        grid-column: 1 / 2;
        border: 4px solid black;
        border-radius: 8px;
        padding: var(--size-6);
        position: relative;
        z-index: 2;
        background: white;
        height: 64%;
        margin-top: 29%;

        & p {
            margin-bottom: 1rem;
        }
    }

    .content-image {
        grid-column: -1 / 2;
        border-radius: 8px;
        margin-left: -16%;
        position: relative;
        z-index: 1;
        top: 18%;
    }

    .continue-story {
        margin-top: 200px;

        & p {
            margin: 0 auto 1.5rem;
        }
    }
</style>
