<script>
    import logo from "$lib/assets/logo.webp";
    import Dialog from "./Dialog.svelte";
    import Default from "./forms/Default.svelte";
    import Help from "./partials/Help.svelte";
    import Copy from "./partials/Copy.svelte";
    import GoogleMaps from "./vendors/GoogleMaps.svelte";
    import IconFacebook from "./assets/icons/IconFacebook.svelte";
    import IconInstragram from "./assets/icons/IconInstragram.svelte";

    const address = "5575 115th St. East, Northfield, MN 55057";
</script>

<footer>
    <div class="footer-grid container">
        <div class="company-info">
            <div class="footer-group">
                <h3>Hours</h3>
                <time datetime="" class="company-hours"
                    >Daily from <strong>9am - 5pm</strong>
                    <Help id="footer-hours">
                        <p>
                            <strong>Memorial Day</strong> to
                            <strong>Labor Day</strong>: 9 am - 8 pm
                        </p>
                        <p>
                            <strong>Labor Day</strong> to
                            <strong>Memorial Day</strong>: 9 am - 5 pm
                        </p>
                    </Help>
                </time>
            </div>
            <div class="footer-group">
                <h3>Location</h3>
                <address>
                    <Copy text={address} />
                </address>
                <Dialog name="Get Directions" id="footer-directions-map">
                    <GoogleMaps />
                </Dialog>
            </div>
        </div>
        <address class="footer-group contact-info">
            <h3>Contact Us</h3>
            <div>
                Call or Text: <a href="tel:15076631370" title="click to call"
                    >(507) 663-1370</a
                >
            </div>
            <div>Email: <Copy text="hello@agreatday.org" /></div>
            <Dialog name="Email Us" id="footer-contact-form">
                <Default id="general-inquery" form="message" />
            </Dialog>
            <div class="social-icons">
                <a
                    class="social-icon icon-facebook"
                    href="https://www.facebook.com/AGreatDayFarmNorthfield/"
                    title="Follow us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconFacebook />
                    <span class="sr-only">Visit us on Facebook</span>
                </a>
            </div>
        </address>

        <div class="links">
            <h3>Quick Links</h3>
            <nav>
                <a href="/our-story">Our Story</a>
                <a href="/our-team">Our Team</a>
                <a href="/press">Press</a>
                <a href="/faq">Farm FAQ</a>
            </nav>
        </div>
    </div>

    <div class="company-legal">
        <div class="container">
            <div class="legal-content">
                <small>
                    Copyright &copy;{new Date().getFullYear()} A Great Day Farm.
                    All Rights Reserved |
                    <a href="/privacy-policy">Privacy Policy</a> |
                    <a href="/accessibility-policy">Accessibility Policy</a>
                </small>
                <small
                    >A Great Day Farm is a 501(c)3 private operating foundation
                    recognized by the IRS. Tax ID number: 46-4272037</small
                >
            </div>
        </div>
    </div>
    <div class="web-creator">
        <div class="container">
            <p>
                Made with love <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    fill="currentColor"
                    ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    /></svg
                >
                by
                <a
                    href="https://cullanluther.com"
                    target="_blank"
                    rel="noopener noreferrer">Cullan Luther</a
                >
            </p>
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
    .company-hours {
        position: relative;

        & p + p {
            margin-top: 0;
        }
    }
    .social-icons {
        margin-top: var(--size-2);
    }
    .social-icon {
        display: inline-block;
        padding: 10px;
        color: var(--text-1);
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
    .web-creator {
        & svg {
            display: inline;
            width: 18px;
            color: var(--brand);
            position: relative;
            top: 3px;
            margin-top: var(--size-2);
        }
    }
    @media (max-width: 768px) {
        nav a {
            padding-block: 8px;
        }
    }
</style>
