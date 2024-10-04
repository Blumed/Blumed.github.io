<script>
import logo from "$lib/assets/logo.webp";
    import Dialog from "./Dialog.svelte";
    import Default from "./forms/Default.svelte";
    import Help from "./partials/Help.svelte";
    import Copy from "./partials/Copy.svelte";

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.877725471976!2d-93.19272972247029!3d44.415154771076175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f656bc8cc94367%3A0x4b9e436325622978!2sA%20Great%20Day%20Farm!5e0!3m2!1sen!2sus!4v1727530885289!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="directions to a great day farm" class="directions-iframe" />            
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
