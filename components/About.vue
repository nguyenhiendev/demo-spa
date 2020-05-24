<template>
  <section class="about">
    <img src="@/assets/images/rose.png" alt class="flower-1" />
    <img src="@/assets/images/jasmine.png" alt class="flower-2" />
    <b-container>
      <b-row>
        <b-col lg="10" md="12" md-auto>
          <div class="sec-heading">
            <img src="@/assets/images/butterfly.png" alt />
            <span class="tagline">About our spa center</span>
            <h3 class="sec-title">Come and you will be Inspired!</h3>
            <p>It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker</p>
          </div>
          <a href="#" class="btn btn-round">Read more</a>
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
  .about {
    text-align: center;
    .flower-1 {
      left: 3%;
      top: 140%;
      max-width: 100px;
      position: absolute;
    }
    .flower-2 {
      right: 135px;
      max-width: 80px;
      position: absolute;
      display: none;
    }
    .sec-heading {
      margin-bottom: 70px;
      position: relative;
      text-align: center;
      img {
        max-width: 84px;
        margin: 0 auto 40px;
      }
      .tagline {
        color: #888;
        display: block;
        font-size: 20px;
        font-weight: 400;
        line-height: 0.8;
        text-transform: uppercase;
        margin-bottom: 27px;
      }
      .sec-title {
        color: #1e2528;
        font-size: 33px;
        margin-bottom: 32px;
        font-family: "Rufina", serif;
        font-weight: 700;
      }
      p {
        color: #888;
        margin-bottom: 0;
      }
    }
    .btn {
      background-color: #ff817e;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      padding: 20px 15px;
    }
    .btn-round {
      border-radius: 50px;
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .about {
    text-align: center;
    .flower-1 {
      left: 16%;
      max-width: 160px;
      position: absolute;
    }
    .flower-2 {
      right: 135px;
      max-width: 80px;
      position: absolute;
    }
    .sec-heading {
      margin-bottom: 70px;
      position: relative;
      text-align: center;
      margin-left: 50px;
      img {
        max-width: 84px;
        margin: 0 auto 40px;
      }
      .tagline {
        color: #888;
        display: block;
        font-size: 20px;
        font-weight: 400;
        line-height: 0.8;
        text-transform: uppercase;
        margin-bottom: 27px;
      }
      .sec-title {
        color: #1e2528;
        font-size: 42px;
        margin-bottom: 32px;
        font-family: "Rufina", serif;
        font-weight: 700;
      }
      p {
        color: #888;
        margin-bottom: 0;
      }
    }
    .btn {
      background-color: #ff817e;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      padding: 20px 15px;
    }
    .btn-round {
      border-radius: 50px;
      margin-left: 50px;
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .about {
    text-align: center;
    .flower-1 {
      left: 16%;
      max-width: 160px;
      position: absolute;
    }
    .flower-2 {
      right: 135px;
      max-width: 80px;
      position: absolute;
    }
    .sec-heading {
      margin-bottom: 70px;
      position: relative;
      text-align: center;
      margin-left: 200px;
      img {
        max-width: 84px;
        margin: 0 auto 40px;
      }
      .tagline {
        color: #888;
        display: block;
        font-size: 20px;
        font-weight: 400;
        line-height: 0.8;
        text-transform: uppercase;
        margin-bottom: 27px;
      }
      .sec-title {
        color: #1e2528;
        font-size: 42px;
        margin-bottom: 32px;
        font-family: "Rufina", serif;
        font-weight: 700;
      }
      p {
        color: #888;
        margin-bottom: 0;
      }
    }
    .btn {
      background-color: #ff817e;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      padding: 20px 15px;
    }
    .btn-round {
      border-radius: 50px;
      margin-left: 200px;
    }
  }
}
@media (min-width: 1224px) {
  .about {
    text-align: center;
    .flower-1 {
      left: 16%;
      max-width: 160px;
      position: absolute;
    }
    .flower-2 {
      right: 135px;
      max-width: 80px;
      position: absolute;
    }
    .sec-heading {
      margin-bottom: 70px;
      position: relative;
      text-align: center;
      margin-left: 200px;
      img {
        max-width: 84px;
        margin: 0 auto 40px;
      }
      .tagline {
        color: #888;
        display: block;
        font-size: 20px;
        font-weight: 400;
        line-height: 0.8;
        text-transform: uppercase;
        margin-bottom: 27px;
      }
      .sec-title {
        color: #1e2528;
        font-size: 42px;
        margin-bottom: 32px;
        font-family: "Rufina", serif;
        font-weight: 700;
      }
      p {
        color: #888;
        margin-bottom: 0;
      }
    }
    .btn {
      background-color: #ff817e;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      padding: 20px 15px;
    }
    .btn-round {
      border-radius: 50px;
      margin-left: 200px;
    }
  }
}
@media (min-width: 1824px) {
  .about {
    text-align: center;
    .flower-1 {
      left: 16%;
      top: 135%;
      max-width: 160px;
      position: absolute;
    }
    .flower-2 {
      right: 135px;
      top: 170%;
      max-width: 80px;
      position: absolute;
    }
    .sec-heading {
      margin-bottom: 70px;
      position: relative;
      text-align: center;
      img {
        max-width: 84px;
        margin: 0 auto 40px;
      }
      .tagline {
        color: #888;
        display: block;
        font-size: 20px;
        font-weight: 400;
        line-height: 0.8;
        text-transform: uppercase;
        margin-bottom: 27px;
      }
      .sec-title {
        color: #1e2528;
        font-size: 42px;
        margin-bottom: 32px;
        font-family: "Rufina", serif;
        font-weight: 700;
      }
      p {
        color: #888;
        margin-bottom: 0;
      }
    }
    .btn {
      background-color: #ff817e;
      color: #fff;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 0.8;
      text-transform: uppercase;
      min-width: 170px;
      padding: 20px 15px;
    }
    .btn-round {
      border-radius: 50px;
    }
  }
}
</style>
