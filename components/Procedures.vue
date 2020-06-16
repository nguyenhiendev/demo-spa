<template>
  <section class="procedures" data-aos="fade-up" data-aos-duration="2000">
    <b-container>
      <b-row>
        <b-col lg="8" md="10" class="m-auto">
          <div class="sec-heading">
            <h3 class="sec-title">Popular Procedures</h3>
            <p>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-card
          title="Massage Therapy"
          img-src="@/assets/images/image2.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text
            class="text-center"
          >Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.</b-card-text>
          <b-button href="#" class="btn btn-round">read more</b-button>
        </b-card>
        <b-card
          title="Massage Therapy"
          img-src="@/assets/images/image4.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text
            class="text-center"
          >Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.</b-card-text>
          <b-button href="#" class="btn btn-round">read more</b-button>
        </b-card>
        <b-card
          title="Massage Therapy"
          img-src="@/assets/images/image7.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text
            class="text-center"
          >Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.</b-card-text>
          <b-button href="#" class="btn btn-round">read more</b-button>
        </b-card>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mb-2 {
    max-width: 100%;
  }
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;

    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
    p {
      color: #888;
      margin-bottom: 0;
    }
  }
  .card {
    margin: 10px;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
    .card-title {
      color: #263a41;
      font-size: 22px;
      font-family: "Rufina", serif;
      font-weight: 700;
      text-align: center;
    }
    .btn {
      background-color: #30383b;
      margin-bottom: 30px;
      padding: 15px;
      border-radius: 50px;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      border-color: #fff;
    }
    &:hover {
      .btn {
        background-color: #ff817e;
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .row {
    flex-wrap: unset;
  }
  .mb-2 {
    max-width: 31%;
  }
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;

    .sec-title {
      color: #1e2528;
      font-size: 30px;
      margin-bottom: 32px;
    }
    p {
      color: #888;
      margin-bottom: 0;
    }
  }
  .card {
    margin: 10px;
    margin-bottom: 30px;
    text-align: center;
    .card-title {
      color: #263a41;
      font-size: 22px;
      font-family: "Rufina", serif;
      font-weight: 700;
      text-align: center;
    }
    .btn {
      background-color: #30383b;
      margin-bottom: 30px;
      padding: 13px;
      border-radius: 50px;
      color: #fff;
      display: inline-block;
      font-size: 13px;
      font-weight: 500;
      line-height: 0.5;
      text-transform: uppercase;
      width: 100%;
      border-color: #fff;
    }
    &:hover {
      .btn {
        background-color: #ff817e;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .mb-2 {
    max-width: 31%;
  }
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;

    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
    p {
      color: #888;
      margin-bottom: 0;
    }
  }
  .card {
    margin: 10px;
    margin-bottom: 30px;
    text-align: center;
    .card-title {
      color: #263a41;
      font-size: 22px;
      font-family: "Rufina", serif;
      font-weight: 700;
      text-align: center;
    }
    .btn {
      background-color: #30383b;
      margin-bottom: 30px;
      padding: 15px;
      border-radius: 50px;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      border-color: #fff;
    }
    &:hover {
      .btn {
        background-color: #ff817e;
      }
    }
  }
}
@media (min-width: 1224px) {
  .mb-2 {
    max-width: 31%;
  }
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;

    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
    p {
      color: #888;
      margin-bottom: 0;
    }
  }
  .card {
    margin: 10px;
    margin-bottom: 30px;
    text-align: center;
    .card-title {
      color: #263a41;
      font-size: 22px;
      font-family: "Rufina", serif;
      font-weight: 700;
      text-align: center;
    }
    .btn {
      background-color: #30383b;
      margin-bottom: 30px;
      padding: 15px;
      border-radius: 50px;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      border-color: #fff;
    }
    &:hover {
      .btn {
        background-color: #ff817e;
      }
    }
  }
}
@media (min-width: 1824px) {
  .mb-2 {
    max-width: 31%;
  }
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;

    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
    p {
      color: #888;
      margin-bottom: 0;
    }
  }
  .card {
    margin: 10px;
    margin-bottom: 30px;
    text-align: center;
    .card-title {
      color: #263a41;
      font-size: 22px;
      font-family: "Rufina", serif;
      font-weight: 700;
      text-align: center;
    }
    .btn {
      background-color: #ff817e;
      margin-bottom: 30px;
      padding: 15px;
      border-radius: 50px;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      border-color: #fff;
    }
    &:hover {
      .btn {
        background-color: #ff817e;
      }
    }
  }
}
</style>
