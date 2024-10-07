<script>
    import Dialog from "$lib/Dialog.svelte";
    import Hero from "$lib/Hero.svelte";
    import Copy from "$lib/partials/Copy.svelte";
    import Calendly from "$lib/vendors/Calendly.svelte";
    import GoogleMaps from "$lib/vendors/GoogleMaps.svelte";
    import Visit from "$lib/Visit.svelte";
    import heroImage from "$lib/assets/arial.jpg";
    const address = "5575 115th St. East, Northfield, MN 55057";
</script>

<Hero title="Visit the Farm" heroBackground={heroImage} />

<section class="section">
    <div class="container">
        <h2>Pre-Register Your Visit</h2>
        <p>
            We ask that you <Dialog
                name="pre-register your visit"
                id="content-calendly-preregister-visit"
                type="link"
            >
                <Calendly />
            </Dialog> to the farm during open hours. This improves the experience
            for everybody. It ensures that the space is not crowded and remains comfortable
            and accessible for all.
        </p>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <h2>Location & Directions</h2>
        <GoogleMaps />
        <p class="location-address">
            We are located at <Copy
                text="5575 115th St E, Northfield, MN 55057"
            />
        </p>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <h2>Amenities</h2>
        <p>
            We offer indoor and outdoor options for guests to try with a goal of
            supporting a diversity of ages, access needs and levels of
            adventure.
        </p>

        <div class="cards column-3">
            <article class="card">
                <h3>Indoor Recreation Center</h3>
                <p>
                    A 3500 square foot pole barn with restrooms, a kitchen and
                    various play zones/activities. You can check out:
                </p>
                <ul>
                    <li>
                        Indoor Sports (Basketball, Air Hockey, Foosball, Table
                        Tennis)
                    </li>
                    <li>Indoor Swings</li>
                    <li>Musical instruments</li>
                    <li>Latch boards/fidgets</li>
                    <li>Enclosed Patio/Seating Area</li>
                    <li>Rocking Chairs</li>
                </ul>
            </article>
            <article class="card">
                <h3>Outdoor Recreation</h3>
                <p>3 acres of fenced-in outdoor space with:</p>

                <ul>
                    <li>Walking/rolling/biking paths totaling ⅓ of a mile</li>
                    <li>Adaptive bicycles</li>
                    <li>Sensory gardens</li>
                    <li>
                        Interactive play spaces (a grain mill, a pontoon boat,
                        sand pit, and more)
                    </li>
                    <li>Swings</li>
                    <li>Covered pavilion and picnic tables</li>
                    <li>Adirondack chairs and park benches</li>
                    <li>Bocce ball court</li>
                </ul>
            </article>
            <article class="card">
                <h3>Restrooms</h3>
                <p>
                    Our facilities include two wheelchair accessible private
                    room restrooms. These include:
                </p>

                <ul>
                    <li>Grab bars</li>
                    <li>Roll-under sinks</li>
                    <li>Supplies at wheelchair height</li>
                    <li>
                        One restroom includes an adult changing table and hoyer
                        lift
                    </li>
                </ul>
            </article>
            <article class="card">
                <h3>Kitchen</h3>
                <p>
                    The recreation center has a kitchen with key access that
                    includes a fridge, microwave, sink, and coffee maker as well
                    as a serving window that can be opened up.
                </p>
            </article>
            <article class="card">
                <h3>Staffing</h3>
                <p>
                    We do not provide on-site staff during visiting hours,
                    including caregivers or Personal Care Assistants (PCAs). If
                    you have specific needs, please bring support with you.
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
    .location-address {
        margin-top: var(--size-3);
    }
    .cards {
        margin-top: var(--size-4);
    }
</style>
