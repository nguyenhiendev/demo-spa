<template>
  <section class="banner" data-aos="fade-up" data-aos-duration="2000">
    <div class="spa-img">
      <img src="@/assets/images/spa.png" alt />
    </div>
    <b-container >
      <b-row>
        <b-col lg="6" md="9">
          <div class="banner-content">
            <span>spa & beauty center</span>
            <h2>Beauty and success starts here.</h2>
            <p>Together creeping heaven upon third dominion be upon won't darkness rule behold it created good saw after she'd Our set living.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .col-lg-6 {
    margin-top: -30px;
  }
  .banner {
    background: url("../assets/images/leaf.png") no-repeat left center/12.5%;
    padding: 5% 0;
    .spa-img {
      width: 43.4%;
      position: absolute;
      right: 0;
      top: 0;
      img {
        display: none;
        width: 100%;
        height: auto;
        z-index: 0;
        margin-left: 54px;
      }
    }
    span {
      color: #ff817e;
      display: block;
      font-family: "Rufina", serif;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      color: #1e2528;
      font-size: 44px;
      line-height: 54px;
      margin-bottom: 25px;
    }
    p {
      color: #555;
      margin-bottom: 50px;
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .col-lg-6 {
    margin-top: -30px;
  }
  .banner {
    background: url("../assets/images/leaf.png") no-repeat left center/12.5%;
    padding: 5% 0;
    .spa-img {
      width: 43.4%;
      position: absolute;
      right: 0;
      top: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
        z-index: 0;
      }
    }
    span {
      color: #ff817e;
      display: block;
      font-family: "Rufina", serif;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      color: #1e2528;
      font-size: 23px;
      line-height: 75px;
      margin-bottom: 25px;
    }
    p {
      color: #555;
      margin-bottom: 50px;
      margin-right: 135px;
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .col-lg-6 {
    margin-top: -30px;
    margin-left: 150px;
  }
  .banner {
    background: url("../assets/images/leaf.png") no-repeat left center/12.5%;
    padding: 5% 0;
    .spa-img {
      width: 43.4%;
      position: absolute;
      right: 0;
      top: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
        z-index: 0;
      }
    }
    span {
      color: #ff817e;
      display: block;
      font-family: "Rufina", serif;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      color: #1e2528;
      font-size: 60px;
      line-height: 75px;
      margin-bottom: 25px;
    }
    p {
      color: #555;
      margin-bottom: 50px;
    }
  }
}
@media (min-width: 1224px) {
  .banner {
    background: url("../assets/images/leaf.png") no-repeat left center/12.5%;
    padding: 12% 0;
    .spa-img {
      width: 43.4%;
      position: absolute;
      right: 0;
      top: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
        z-index: 0;
      }
    }
    span {
      color: #ff817e;
      display: block;
      font-family: "Rufina", serif;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      color: #1e2528;
      font-size: 60px;
      line-height: 75px;
      margin-bottom: 25px;
    }
    p {
      color: #555;
      margin-bottom: 50px;
    }
  }
}
@media (min-width: 1824px) {
  .banner {
    background: url("../assets/images/leaf.png") no-repeat left center/12.5%;
    padding: 12% 0;
    .spa-img {
      width: 43.4%;
      position: absolute;
      right: 0;
      top: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    span {
      color: #ff817e;
      display: block;
      font-family: "Rufina", serif;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      color: #1e2528;
      font-size: 60px;
      line-height: 75px;
      margin-bottom: 25px;
    }
    p {
      color: #555;
      margin-bottom: 50px;
    }
  }
}
</style>
