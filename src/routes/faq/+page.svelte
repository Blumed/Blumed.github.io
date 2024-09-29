<script>
import Accordion from "$lib/Accordion.svelte";
import Hero from "$lib/Hero.svelte";
</script>

<Hero title="Farm Frequently Asked Questions" />

<section>
    <div class="container">

        <Accordion id="item-1" title="What does it cost to visit the farm?">
            <p> The farm is 100% free to visitors and small groups of up to 15 people! For groups larger than 15, please <a href="/contact">contact us</a>.</p>
        </Accordion>
        <Accordion id="item-2" title="When is the farm open?">
            <p>The farm operates on a drop-in basis during the following hours:</p>
            <p><strong>Memorial Day - Labor Day</strong>: 9 am - 8 pm</p>
            <p><strong>Labor Day - Memorial Day:</strong> 9 am - 5 pm</p>
            
            <p>However, can you do us a favor? Let us know about your planned visit by scheduling time on our farm calendar. This helps us keep the farm comfortable and fun for all. 
            </p>
        </Accordion>
        <Accordion id="item-3" title="Who can visit the farm?">
            <p>Our farm's mission is to foster free community recreational opportunities for people with disabilities who often experience barriers in other settings. Because of this, we prioritize our farm amenities for folks with disabilities, their family members and caregivers. We love welcoming all forms of visitors. However, if there are space or time constraints, we will prioritize those with the greatest need. We appreciate your understanding in centering our mission!</p>
        </Accordion>
        <Accordion id="item-4" title="Does the farm provide caregivers or Personal Care Assistants?">
            <p>The farm does not provide caregivers, Personal Care Assistants (PCAs) or other specific support on-site. We work to create a proactively accessible and inclusive environment to reduce potential barriers. However, if you have questions or accessibility ideas that would make a farm visit more viable for you, <a href="/contact">contact us</a> and we'll think through ideas together.</p>
        </Accordion>
        <Accordion id="item-5" title="Can I bring my dogs to the farm?">
            <p>We ask that you leave your pets at home. However, service animals are always welcome.</p>
        </Accordion>
        <Accordion id="item-6" title="What are the farm's accessibility amenities?">
            <p>We review our facilities often for opportunities to enhance physical-, medical- and sensory-related accessibility. We are always making improvements and welcome your feedback should you recognize additional needs. At this time, we have:</p>
            <ul>
                <li>Indoor</li>
                <ul>
                    <li>Wheelchair-friendly recreation center with smooth floors.</li>
                    <li>Two wheelchair accessible restrooms: one includes a hoyer lift and adult changing table.</li>
                    <li>Air-conditioning/heating.</li>
                    <li>Accessible driveway drop-off.</li>
                    <li>A serving kitchen with microwave & fridge that can be locked.</li>
                </ul>
                <li>Outdoor</li>
                <ul>
                    <li>Covered pavilion.</li>
                    <li>Paved walking/rolling/biking trail.</li>
                    <li>Completely fenced-in outdoor recreation area.</li>
                    <li>Wheelchair accessible pergola swing.</li>
                    <li>Ramped pontoon boat.</li>
                </ul>
            </ul>
        </Accordion>
        <Accordion id="item-7" title="Does the farm have animals?">
            <p>Due to the farm's drop-in nature, we have scaled down our animal operations. However, the farm is working to build specific programs to interact with guest animals alongside staff in the future. If you're looking for a traditional farm animal experience, we encourage you to head five miles down the road to <a href="https://www.windywillowfarmadventure.com" rel="noopener noreferrer" target="_blank">Windy Willow Farm Adventure</a>.</p>
        </Accordion>
        <Accordion id="item-8" title="Does the farm have programs?">
            <p>The farm periodically hosts short-term programs and projects, which you can see on our Programs & Events page. At this time, we are working to expand our program offerings so that there are more structured opportunities to interact with the farm.</p>
        </Accordion>
        <Accordion id="item-9" title="Are you affiliated with Great Day Farms, the egg company?">
            <p>We are incorporated as “A Great Day Farm,” have no connection to Great Day Farms and do not sell eggs.</p>
        </Accordion>
        <Accordion id="item-10" title="Does the farm accept donations?">
            <p>Absolutely! This is a free facility. As a result, we work very hard to raise funds throughout the year to keep the farm going and growing in a sustainable manner. We also occasionally request in-kind donations via our Amazon wishlist or through specific asks. Visit our Donate button or Support Us page to learn more.</p>
        </Accordion>
    </div>
</section>

<style>
    section {
        margin-bottom: var(--size-11)
    }
</style>