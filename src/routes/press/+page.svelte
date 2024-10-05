<script>
    import IconMic from "$lib/assets/icons/IconMic.svelte";
    import IconNews from "$lib/assets/icons/IconNews.svelte";
    import Dialog from "$lib/Dialog.svelte";
    import Default from "$lib/forms/Default.svelte";
    import Hero from "$lib/Hero.svelte";
</script>

<Hero
    title="Press Example Text"
    content="Collection of A Great Day Farm articles in the news. Going to add a bit more text here so you can see how a bit more text looks here."
/>

<section class="section articles">
    <div class="container">
        <h2>News articles and stories</h2>
        <div class="cards">
            <article class="card">
                <span class="card-type"><IconNews /></span>
                <h3>Northfield News</h3>
                <time>Sep 30, 2018</time>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, veritatis laborum libero.
                </p>
                <a
                    class="btn"
                    href="https://www.southernminn.com/northfield_news/news/a-great-day-from-family-home-to-5-acre-escape-for-developmentally-disabled/article_245e388f-d84f-57d6-9ac9-a1370db98ee8.html"
                    target="_blank"
                    rel="noopener noreferrer">Read Article</a
                >
            </article>
            <article class="card">
                <span class="card-type"><IconNews /></span>
                <h3>Pioneer Press</h3>
                <time>Nov 1, 2018</time>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, veritatis laborum libero.
                </p>
                <a
                    class="btn"
                    href="https://www.twincities.com/2018/09/16/parents-of-disabled-kids-turn-northfield-farm-into-free-rec-facility-for-others"
                    target="_blank"
                    rel="noopener noreferrer">Read Article</a
                >
            </article>
            <article class="card">
                <span class="card-type"><IconMic /></span>
                <h3>KYMN Radio</h3>
                <time>Aug 7, 2018</time>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, veritatis laborum libero.
                </p>
                <a
                    class="btn"
                    href="https://kymnradio.net/2018/08/07/greg-closser/"
                    target="_blank"
                    rel="noopener noreferrer">Listen to Interview</a
                >
            </article>
            <article class="card card-invert">
                <h3>Feature us in your next article</h3>
                <p>
                    We are always creating community events. Lets get in touch.
                </p>
                <Dialog name="media contact" id="press">
                    <Default id="press-contact" form="message" />
                </Dialog>
            </article>
        </div>
    </div>
</section>

<style>
    h3 {
        font-size: var(--font-size-fluid-1);
    }
</style>
