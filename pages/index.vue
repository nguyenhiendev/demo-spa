<template>
  <div class="body">
    <!-- Header start -->
    <Header />
    <!-- Header end -->
    <!-- Banner section start -->
    <Banner />
    <!-- Banner section end -->
    <!-- About section start -->
    <About />
    <!-- About section end -->
    <!-- Service section start -->
    <Service />
    <!-- Service section end -->
    <!-- Procedures section start -->
    <Procedures />
    <!-- Procedures section end -->
    <!-- Testimonial section start -->
    <Testimonial />
    <!-- Testimonial section end -->
    <!-- Team section start -->
    <Team />
    <!-- Team section end -->
    <!-- Appointment section start -->
    <Appointment />
    <!-- Appointment section end -->
    <!-- Contact section start -->
    <Contact />
    <!-- Contact section end -->
    <!-- Footer section start -->
    <Footer />
    <!-- Footer section end -->
    <client-only>
      <easy-go-top />
    </client-only>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Service from "@/components/Service";
import Procedures from "@/components/Procedures";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Banner,
    About,
    Service,
    Procedures,
    Testimonial,
    Team,
    Appointment,
    Contact,
    Footer
  }
};
</script>

<style lang="scss">
#easy-go-top {
  border-radius: 5px !important;
  box-shadow: none !important;
  background-color: #ff363c !important;
}
@media (min-device-width: 320px) and (max-device-width: 480px) {

  .carousel-caption {
    height: 100px;
  }
  .carousel-inner {
    height: 770px;
  }
}
@media (max-width: 1024px) {
  body {
    width: 67.5rem;
  }
}
body {
  color: #6c6c6f;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 27px;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Rufina", serif;
  font-weight: 700;
}
section {
  padding: 50px 0;
  width: 100%;
}
</style>
