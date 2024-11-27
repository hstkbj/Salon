<template>
    <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': false, 'stickyStartAt': 53, 'stickySetTop': '-53px'}">
        <div class="header-body border-top-0 h-auto box-shadow-none">
            <div class="header-top border-0 bg-dark text-light">
                <div class="container-fluid px-lg-5 h-100">
                    <div class="header-row h-100">
                        <div class="header-column justify-content-start">
                            <div class="header-row">
                                <nav class="header-nav-top">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item py-2 d-none d-sm-inline-flex pe-2">
                                            <span class="ps-0 font-weight-semibold text-color-light text-2 positive-ls-2">1234 Street Name, City Name</span>
                                        </li>
                                        <li class="nav-item py-2 pe-2">
                                            <a href="tel:123-456-7890" class="text-color-light text-2 positive-ls-2 text-color-hover-secondary font-weight-semibold">123-456-7890</a>
                                        </li>
                                        <li class="nav-item py-2 d-none d-md-inline-flex">
                                            <a href="mailto:mail@domain.com" class="text-color-light text-2 positive-ls-2 text-color-hover-secondary font-weight-semibold">mail@domain.com</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-column justify-content-end">
                            <div class="header-row">
                                <nav class="header-nav-top">
                                    <ul class="nav nav-pills p-relative bottom-2">
                                        <li class="nav-item py-2 d-none d-lg-inline-flex">
                                            <a href="http://www.facebook.com/" target="_blank" title="Facebook" class="text-color-light text-color-hover-secondary text-3 anim-hover-translate-top-5px transition-2ms"><i class="fab fa-facebook-f text-3 p-relative top-1"></i></a>
                                        </li>
                                        <li class="nav-item py-2 d-none d-lg-inline-flex">
                                            <a href="http://www.x.com/" target="_blank" title="X" class="text-color-light text-color-hover-secondary text-3 anim-hover-translate-top-5px transition-2ms"><i class="fab fa-x-twitter text-3 p-relative top-1"></i></a>
                                        </li>
                                        <li class="nav-item py-2 d-none d-lg-inline-flex">
                                            <a href="http://www.instagram.com/" target="_blank" title="Instagram" class="text-color-light text-color-hover-secondary text-3 anim-hover-translate-top-5px transition-2ms"><i class="fab fa-instagram text-3 p-relative top-1"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-container header-container-height-sm container-fluid px-lg-5 p-static">
                <div class="header-row">
                    <div class="header-column">
                        <div class="header-row">
                            <div class="header-logo">
                                <a href="index.html">
                                    <img alt="Porto" width="123" height="32" src="../../../../public/img/demos/beauty-salon/logo.png">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="header-nav header-nav-line header-nav-bottom-line header-nav-bottom-line-effect-1 justify-content-lg-start ps-lg-5">
                        <div class="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-dropdown-border-radius header-nav-main-arrows header-nav-main-full-width-mega-menu header-nav-main-mega-menu-bg-hover header-nav-main-effect-2">
                            <nav class="collapse">
                                <ul class="nav nav-pills" id="mainNav">
                                    <li>
                                        <router-link to="/" class="nav-link active">
                                            Home
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="nav-link" to="/about-us">
                                            About
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="nav-link" to="/service">
                                            Services
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="nav-link" to="/gallery">
                                            Gallery
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="nav-link" to="/blog">
                                            Blog
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="nav-link" to="/contact">
                                            Contact
                                        </router-link>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="demo-beauty-salon-book-now.html">
                                            <strong>Book Now</strong>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div class="header-nav-features header-nav-features-no-border pe-3 order-1 order-lg-2">
                        <div class="header-nav-feature header-nav-features-search d-inline-flex">
                            <a href="#" class="header-nav-features-toggle text-decoration-none" data-focus="headerSearch" aria-label="Search"><i class="fas fa-search header-nav-top-icon text-4"></i></a>
                            <div class="header-nav-features-dropdown" id="headerTopSearchDropdown">
                                <form role="search" action="page-search-results.html" method="get">
                                    <div class="simple-search input-group">
                                        <input class="form-control text-1" id="headerSearch" name="q" type="search" value="" placeholder="Search...">
                                        <button class="btn" type="submit" aria-label="Search">
                                            <i class="fas fa-search header-nav-top-icon"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>