<template>
  <section class="team" data-aos="fade-up" data-aos-duration="2000">
    <b-container>
      <b-row>
        <b-col lg="8" md="10" class="m-auto">
          <div class="sec-heading">
            <h3 class="sec-title">Experienced Team</h3>
            <p>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <div class="single-memb">
            <img src="@/assets/images/image3.jpg" alt />
            <div class="mems-details">
              <h6>Joseph Austin</h6>
              <span>Thai Message</span>
              <div class="memb-socical">
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'vimeo']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'instagram']" class="icon alt" />
                </a>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="single-memb">
            <img src="@/assets/images/image5.jpg" alt />
            <div class="mems-details">
              <h6>David Hannan</h6>
              <span>Thai Message</span>
              <div class="memb-socical">
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'vimeo']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'instagram']" class="icon alt" />
                </a>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="single-memb">
            <img src="@/assets/images/image8.jpg" alt />
            <div class="mems-details">
              <h6>Cheryl Harris</h6>
              <span>Thai Message</span>
              <div class="memb-socical">
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'vimeo']" class="icon alt" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'instagram']" class="icon alt" />
                </a>
              </div>
            </div>
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
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;
    .sec-title {
      color: #1e2528;
      font-size: 33px;
      margin-bottom: 32px;
    }
  }
  .single-memb {
    position: relative;
    width: 100%;
    padding-bottom: 15px;
    img {
      width: 100%;

    }
  }
  .mems-details {
    background-color: #fff;
    -webkit-box-shadow: 0 5px 20px #f0f0f0;
    box-shadow: 0 5px 20px #f0f0f0;
    max-width: calc(100% - 25px);
    margin: -50px auto 0;
    padding: 30px;
    position: relative;
    text-align: center;
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    z-index: 1;
    h6 {
      color: #263a41;
      font-size: 22px;
      margin-bottom: 0;
    }
    span {
      display: block;
      margin-bottom: 15px;
    }
    a {
      border: 1px solid #30383b;
      border-radius: 50%;
      color: #30383b;
      display: inline-block;
      font-size: 13px;
      text-align: center;
      line-height: 30px;
      margin: 0 5px;
      height: 30px;
      width: 30px;
    }
    a:hover {
      background-color: #ff817e;
      border-color: #ff817e;
      color: #fff;
      text-decoration: none;
      outline: 0px;
    }

    .memb-socical {
      margin-top: 0;
      opacity: 0;
      transition: all 500ms ease-out;
      margin-top: -30px;
    }
    &:hover {
      .memb-socical {
        margin-top: 30px;
        opacity: 1;
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;
    .sec-title {
      color: #1e2528;
      font-size: 30px;
      margin-bottom: 32px;
    }
  }
  .single-memb {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .mems-details {
    background-color: #fff;
    -webkit-box-shadow: 0 5px 20px #f0f0f0;
    box-shadow: 0 5px 20px #f0f0f0;
    max-width: calc(100% - 25px);
    margin: -50px auto 0;
    padding: 30px;
    position: relative;
    text-align: center;
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    z-index: 1;
    h6 {
      color: #263a41;
      font-size: 22px;
      margin-bottom: 0;
    }
    span {
      display: block;
      margin-bottom: 15px;
    }
    a {
      border: 1px solid #30383b;
      border-radius: 50%;
      color: #30383b;
      display: inline-block;
      font-size: 13px;
      text-align: center;
      line-height: 30px;
      margin: 5px 5px;
      height: 30px;
      width: 30px;
    }
    a:hover {
      background-color: #ff817e;
      border-color: #ff817e;
      color: #fff;
      text-decoration: none;
      outline: 0px;
    }

    .memb-socical {
      margin-top: 0;
      opacity: 0;
      transition: all 500ms ease-out;
      margin-top: -30px;
    }
    &:hover {
      .memb-socical {
        margin-top: 30px;
        opacity: 1;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;
    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
  }
  .single-memb {
    position: relative;
    width: 100%;
    img {
      width: 289px;
      height: 349px;
    }
  }
  .mems-details {
    background-color: #fff;
    -webkit-box-shadow: 0 5px 20px #f0f0f0;
    box-shadow: 0 5px 20px #f0f0f0;
    max-width: calc(100% - 25px);
    margin: -50px auto 0;
    padding: 30px;
    position: relative;
    text-align: center;
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    z-index: 1;
    h6 {
      color: #263a41;
      font-size: 22px;
      margin-bottom: 0;
    }
    span {
      display: block;
      margin-bottom: 15px;
    }
    a {
      border: 1px solid #30383b;
      border-radius: 50%;
      color: #30383b;
      display: inline-block;
      font-size: 13px;
      text-align: center;
      line-height: 30px;
      margin: 0 5px;
      height: 30px;
      width: 30px;
    }
    a:hover {
      background-color: #ff817e;
      border-color: #ff817e;
      color: #fff;
      text-decoration: none;
      outline: 0px;
    }

    .memb-socical {
      margin-top: 0;
      opacity: 0;
      transition: all 500ms ease-out;
      margin-top: -30px;
    }
    &:hover {
      .memb-socical {
        margin-top: 30px;
        opacity: 1;
      }
    }
  }
}
@media (min-width: 1224px) {
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;
    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
  }
  .single-memb {
    position: relative;
    width: 100%;
    img {
      width: 360px;
      height: 434px;
    }
  }
  .mems-details {
    background-color: #fff;
    -webkit-box-shadow: 0 5px 20px #f0f0f0;
    box-shadow: 0 5px 20px #f0f0f0;
    max-width: calc(100% - 25px);
    margin: -50px auto 0;
    padding: 30px;
    position: relative;
    text-align: center;
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    z-index: 1;
    h6 {
      color: #263a41;
      font-size: 22px;
      margin-bottom: 0;
    }
    span {
      display: block;
      margin-bottom: 15px;
    }
    a {
      border: 1px solid #30383b;
      border-radius: 50%;
      color: #30383b;
      display: inline-block;
      font-size: 13px;
      text-align: center;
      line-height: 30px;
      margin: 0 5px;
      height: 30px;
      width: 30px;
    }
    a:hover {
      background-color: #ff817e;
      border-color: #ff817e;
      color: #fff;
      text-decoration: none;
      outline: 0px;
    }

    .memb-socical {
      margin-top: 0;
      opacity: 0;
      transition: all 500ms ease-out;
      margin-top: -30px;
    }
    &:hover {
      .memb-socical {
        margin-top: 30px;
        opacity: 1;
      }
    }
  }
}
@media (min-width: 1824px) {
  .sec-heading {
    margin-bottom: 70px;
    position: relative;
    text-align: center;
    .sec-title {
      color: #1e2528;
      font-size: 42px;
      margin-bottom: 32px;
    }
  }
  .single-memb {
    position: relative;
    width: 100%;
    img {
      width: 360px;
      height: 434px;
    }
  }
  .mems-details {
    background-color: #fff;
    -webkit-box-shadow: 0 5px 20px #f0f0f0;
    box-shadow: 0 5px 20px #f0f0f0;
    max-width: calc(100% - 25px);
    margin: -50px auto 0;
    padding: 30px;
    position: relative;
    text-align: center;
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    z-index: 1;
    h6 {
      color: #263a41;
      font-size: 22px;
      margin-bottom: 0;
    }
    span {
      display: block;
      margin-bottom: 15px;
    }
    a {
      border: 1px solid #30383b;
      border-radius: 50%;
      color: #30383b;
      display: inline-block;
      font-size: 13px;
      text-align: center;
      line-height: 30px;
      margin: 0 5px;
      height: 30px;
      width: 30px;
    }
    a:hover {
      background-color: #ff817e;
      border-color: #ff817e;
      color: #fff;
      text-decoration: none;
      outline: 0px;
    }

    .memb-socical {
      margin-top: 0;
      opacity: 0;
      transition: all 500ms ease-out;
      margin-top: -30px;
    }
    &:hover {
      .memb-socical {
        margin-top: 30px;
        opacity: 1;
      }
    }
  }
}
</style>
