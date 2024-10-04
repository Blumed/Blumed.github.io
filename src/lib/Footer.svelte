<script>
import logo from "$lib/assets/logo.webp";
    import Dialog from "./Dialog.svelte";
    import Default from "./forms/Default.svelte";
    import Help from "./partials/Help.svelte";
    import Copy from "./partials/Copy.svelte";
    import GoogleMaps from "./vendors/GoogleMaps.svelte";

    const address = "5575 115th St. East, Northfield, MN 55057";
</script>

<footer>
    <div class="footer-grid container">
        <div class="company-info">
            <div class="footer-group">
                <h3>Hours</h3>
                <time datetime="">Everyday from <strong>9am - 8pm</strong></time>
                <Help id="footer-hours">
                    <p>hello</p>
                </Help>
            </div>
            <div class="footer-group">
                <h3>Location</h3>
                <address>
                    <Copy text={address} />
                </address>
                <Dialog name="Get Directions" id="footer-directions-map" >
                    <GoogleMaps />
                </Dialog>
            </div>
        </div>
        <address class="footer-group contacti-info">
            <h3>Contact Us</h3>
            <div>Phone: <a href="tel:15076631370" title="click to call">(507) 663-1370</a></div>
            <div>Email: <Copy text="hello@agreatday.org" /></div>
            <Dialog name="Email Us" id="footer-contact-form" >
                <Default id="general-inquery" form="message"/>
            </Dialog>
        </address>

        <div class="links">
            <h3>Quick Links</h3>
            <nav>
                <a href="/about">About</a>
                <a href="/our-team">Team</a>
                <a href="/press">Press</a>
                <a href="/faq">Farm Faq's</a>
                <a href="/accessibility-policy">Accessibility Policy</a>
            </nav>
        </div>
    </div>

    <div class="company-legal">
        <div class="container">

        <div class="legal-content">
            <small>
                Copyright &copy;{new Date().getFullYear()} A Great Day Farm. All
                Rights Reserved |
                <a href="/privacy-policy">Privacy Policy</a>
            </small>
            <small>A Great Day Farm is a 501(c)3 private operating foundation recognized by the IRS. Tax ID number: 46-4272037</small>
        </div>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: var(--surface-1);
        padding-block: var(--size-8) var(--size-3);
        margin-top: var(--size-8);

        & > .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

            & h3 {
                font-size: var(--size-4);
            }
        }
    }

    nav {
        display: flex;
        flex-direction: column;
    }
    .company-legal {
        & > .container {
            display: grid;
            grid-template-columns: auto auto;
            gap: 30px;
            justify-content: flex-start;
        }
    }

    .footer-group {
        margin-bottom: 1.5rem;
    }
    .company-legal {
        margin-top: var(--size-5);

        & h3 {
            display: inline;
            font-size: var(--size-3);
            margin-top: var(--size-3);
        }

        & small {
            display: block;
            max-inline-size: fit-content;
        }
    }

    @media (max-width: 768px) {
        nav a {
            padding-block: 8px;
        }
    }
</style>
