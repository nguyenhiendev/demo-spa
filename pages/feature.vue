<template>
  <div class="body">
    <!-- Header start -->
    <Header />
    <!-- Header end -->
    <!-- About section start -->
    <About />
    <!-- About section end -->
    <!-- Service section start -->
    <Service />
    <!-- Service section end -->
    <!-- Team section start -->
    <Team />
    <!-- Team section end -->
    <!-- Footer section start -->
    <Footer />
    <!-- Footer section end -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/components/About";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    About,
    Service,
    Team,
    Footer
  }
};
</script>

<style lang="scss">
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .carousel-caption {
    height: 100px;
  }
  .carousel-inner {
    height: 770px;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
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
