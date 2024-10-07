<script>
    import Donate from "$lib/Donate.svelte";
    import Hero from "$lib/Hero.svelte";
    import heroBackground from "$lib/assets/playing-music.jpg";
</script>

<Hero
    title="Our work is made possible by community for community"
    {heroBackground}
/>

<section class="section">
    <div class="container">
        <h2>Financial Donations</h2>
        <p>
            As a free recreational venue with disability at the heart of our
            mission, unrestricted financial donations provide the most
            flexibility for us to operate our facility sustainably and in
            accordance with the greatest needs of our guests. We are so grateful
            to all of our donors - each donation, no matter how big or small,
            makes a significant impact!
        </p>
    </div>
</section>
<section class="section less-spacing">
    <div class="container">
        <h2>Planned Giving</h2>
        <p class="bottom-bumper">
            At the farm, we are committed to honoring the legacies of those who
            have come before us. Should you feel compelled to support a new
            generation of our mission, there are many ways you can help the
            farm, whether it’s including the farm in your trust, will, estate or
            other financial plan. We know conversations around planned giving
            can be difficult and we aim to keep the process as simple as
            possible for you. The sections below are not legal advice, but can
            give you a sense of what to think about when working on your plans
            with a trusted advisor.
        </p>
        <div class="cards column-3">
            <article class="card">
                <h3>Life Insurance</h3>
                <p>
                    Life insurance policies and other vehicles can also be used
                    to provide charitable gifts. A Great Day Farm can be named
                    as the owner and beneficiary of a life insurance policy. The
                    donor can receive a tax deduction for the value of the
                    policy.
                </p>
            </article>
            <article class="card">
                <h3>Donor-Advised Funds</h3>
                <p>
                    A Great Day Farm accepts gifts from donor-advised funds.
                    Donor-advised funds can be a flexible charitable vehicle by
                    which you contribute funds or assets (cash, stocks, bonds
                    and money in 401(k)s and IRAs, sometimes even
                    cryptocurrency) to a charitable organization.
                </p>
            </article>
            <article class="card">
                <h3>Bequests</h3>
                <p>
                    You may name A Great Day Farm Foundation as a residual
                    beneficiary of an estate; as receiving a specific portion of
                    the estate; as the recipient of a specified gift; as
                    contingent beneficiary; or as one of the beneficiaries of
                    the assets of a charitable remainder trust. A bequest also
                    can be included in the body of your will or in addition to
                    it (a codicil). The easiest and most useful bequest to AGDF
                    is an unrestricted gift for general operating support.
                </p>
            </article>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <h2>In-Kind Donations</h2>
        <p class="bottom-bumper">
            We’re a resourceful bunch here on the farm and are often in need of
            specific supplies & talents to build or enhance components of the
            farm at a lower cost. See our ongoing list below and contact us via
            the inquiry form below.
        </p>
        <h4>Items/Materials</h4>
        <ul class="bottom-bumper">
            <li>Adaptive Bikes, especially small & medium sizes</li>
            <li>New/like-new adult- and kid-sized bike helmets</li>
            <li>Lumber</li>
        </ul>
        <p>
            Additionally, we maintain an <a
                href="https://a.co/fK3Nq2o"
                target="_blank"
                rel="noopener noreferrer">Amazon wishlist</a
            > of standard items we purchase on a recurring basis and encourage you
            to contribute to our efforts in this way. Thank you for your consideration!
        </p>
    </div>
</section>
<Donate
    title="Support a great day"
    copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus aut asperiores eum."
    button_text="Donate"
/>
