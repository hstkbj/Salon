<template>
    <footer id="footer" class="position-relative bg-transparent border-top-0">
        <div class="container pt-3">
            <div class="row">
                <div class="col">
                    <div class="alert alert-success d-none" id="newsletterSuccess">
                        <strong>Success!</strong> You've been added to our email list.
                    </div>
                    <div class="alert alert-danger d-none" id="newsletterError"></div>
                    <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
                        <h4
                            class="custom-primary-font font-weight-semi-bold text-color-primary positive-ls-2 line-height-4 text-3 ws-nowrap pe-3 pt-0 text-md-4-5 mb-3 mb-lg-0">
                            Subscribe to Newsletter:</h4>
                        <form id="newsletterForm" class="form-style-3 w-100" action="php/newsletter-subscribe.php"
                            method="POST">
                            <div class="d-flex">
                                <input class="form-control custom-form-control-newsletter-field box-shadow-none"
                                    placeholder="Email Address" name="newsletterEmail" id="newsletterEmail"
                                    type="text" />
                                <button
                                    class="btn btn-primary custom-form-control-newsletter-btn btn-px-3 btn-py-2 font-weight-bold"
                                    type="submit">
                                    <img width="6" height="18"
                                        src="../../../../public/img/demos/beauty-salon/icons/arrow.svg" alt="" data-icon
                                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                                        style="width: 27px;" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row gy-5 pt-5 pb-4">
                <div class="col">
                    <hr>
                </div>
            </div>
            <div class="row pt-3 pb-4 gy-5">
                <div class="col-lg-4">
                    <h4
                        class="custom-primary-font font-weight-semi-bold text-color-primary positive-ls-2 line-height-4 text-3 text-md-4-5 mb-4">
                        Opening Hours</h4>
                    <ul class="list list-unstyled">
                        <li><span class="text-color-grey text-color-hover-primary">Mon to Fri: 9:30 am — 7:00 pm</span>
                        </li>
                        <li><span class="text-color-grey text-color-hover-primary">Sat: 9:00 am — 2:00 pm</span></li>
                        <li><span class="text-color-grey text-color-hover-primary">Sun: Closed</span></li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <h4
                        class="custom-primary-font font-weight-semi-bold text-color-primary positive-ls-2 line-height-4 text-3 text-md-4-5 mb-4">
                        Navigation</h4>
                    <ul class="list list-unstyled columns-lg-2">
                        <li>
                            <a href="demo-beauty-salon.html" class="text-color-grey text-color-hover-primary">
                                Home
                            </a>
                        </li>
                        <li>
                            <a class="text-color-grey text-color-hover-primary" href="demo-beauty-salon-about.html">
                                About
                            </a>
                        </li>
                        <li>
                            <a class="text-color-grey text-color-hover-primary" href="demo-beauty-salon-services.html">
                                Services
                            </a>
                        </li>
                        <li>
                            <a class="text-color-grey text-color-hover-primary" href="demo-beauty-salon-gallery.html">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a class="text-color-grey text-color-hover-primary" href="demo-beauty-salon-blog.html">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a class="text-color-grey text-color-hover-primary" href="demo-beauty-salon-contact.html">
                                Contact
                            </a>
                        </li>
                        <li>
                            <span class="anim-hover-scale-1-1 transition-3ms d-inline-block">
                                <a class="text-color-primary" href="demo-beauty-salon-book-now.html">
                                    <strong>Book Now</strong>
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4
                        class="custom-primary-font font-weight-semi-bold text-color-primary positive-ls-2 line-height-4 text-3 text-md-4-5 mb-4">
                        Social Media</h4>
                    <ul class="social-icons social-icons-clean social-icons-medium">
                        <li class="social-icons-instagram">
                            <a href="http://www.instagram.com/" target="_blank" title="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="social-icons-x">
                            <a href="http://www.x.com/" target="_blank" title="X">
                                <i class="fab fa-x-twitter"></i>
                            </a>
                        </li>
                        <li class="social-icons-facebook">
                            <a href="http://www.facebook.com/" target="_blank" title="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row gy-5 pt-2 pb-4">
                <div class="col">
                    <hr>
                </div>
            </div>
            <div class="row pb-3">
                <div class="col-md-6 text-center">
                    <h4
                        class="custom-primary-font font-weight-semi-bold text-color-primary positive-ls-2 line-height-4 text-3 text-md-4-5 mb-2">
                        Find Us</h4>
                    <p class="text-color-grey text-4 mb-0">
                        999 Porto Theme Drive
                    </p>
                    <p class="text-color-grey text-4 mb-0">
                        West Hollywood, CA 90069
                    </p>
                </div>
                <div class="col-md-6 text-center">
                    <h4
                        class="custom-primary-font font-weight-semi-bold text-color-primary positive-ls-2 line-height-4 text-3 text-md-4-5 mb-2">
                        Contact Us</h4>
                    <p class="text-color-grey text-4 mb-0">
                        <a href="tel:123-456-7890" class="text-color-grey text-color-hover-primary">123-456-7890</a>
                    </p>
                    <p class="text-color-grey text-4 mb-0">
                        <a href="mailto:mail@domain.com"
                            class="text-color-grey text-color-hover-primary">mail@domain.com</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-copyright bg-transparent">
            <div class="container">
                <hr>
                <div class="row">
                    <div class="col mt-4 pb-5">
                        <p class="text-center text-3 text-color-grey mb-0">Porto Beauty Salon © 2024. All Rights
                            Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style></style>