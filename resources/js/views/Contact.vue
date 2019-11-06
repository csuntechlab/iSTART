<template>
    <div class="contact-page container">
        <navbar :displayCurrentPage="$route.name" />
        <main class="contact-page__content">
            <div class="contact-page__wrapper">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="contact-page__header">Contact Us</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="contact-page__text">Do you have urgent substance-use related questions? You can call the <abbr title="Substance Abuse and Mental Health Services Administration">SAMHSA</abbr> 24/7 hotline:xxx.</p>
                            <p class="contact-page__text">If you have <strong>non-urgent</strong> substance-related questions, you can email our Tarzana Treatment Centers counselor confidentially (Use iSTART as subject line): xxxxxxxx</p>
                            <p class="contact-page__text">For non-urgent participation questions: <a href="mailto: iSTART@csun.edu">iSTART@csun.edu</a> or</p>
                            <p class="contact-page__text">For Technical Assistance if you experience problems with the web-app: xxxx</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Contact',
  mixins: [changeRouteTitle],
  components: {
    Navbar
  }
}
</script>
