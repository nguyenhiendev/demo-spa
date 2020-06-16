<template>
  <b-row class="service" data-aos="fade-up" data-aos-duration="2000">
    <b-col md="4" lg="3" class="col-service">
      <div class="hovereffect">
        <img src="@/assets/images/image1.jpg" class="img-responsive" alt />
        <div class="overlay">
          <a class="info" href="#">
            <h3>Body Treatment</h3>
          </a>
        </div>
      </div>
    </b-col>
    <b-col md="4" lg="3" class="col-service">
      <div class="hovereffect">
        <img src="@/assets/images/image6.jpg" class="img-responsive" alt />
        <div class="overlay">
          <a class="info" href="#">
            <h3>Body Treatment</h3>
          </a>
        </div>
      </div>
    </b-col>
    <b-col md="4" lg="3" class="col-service">
      <div class="hovereffect">
        <img src="@/assets/images/image9.jpg" class="img-responsive" alt />
        <div class="overlay">
          <a class="info" href="#">
            <h3>Body Treatment</h3>
          </a>
        </div>
      </div>
    </b-col>
    <b-col md="4" lg="3" class="col-service">
      <div class="hovereffect">
        <img src="@/assets/images/image10.jpg" class="img-responsive" alt />
        <div class="overlay">
          <a class="info" href="#">
            <h3>Body Treatment</h3>
          </a>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    img {
      display: block;
      width: 100%;
      position: relative;
      -webkit-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      a.info {
        display: inline-block;
        text-decoration: none;
        margin: 20px -20px 40px 10px;
        background-color: transparent;
        h3 {
          display: block;
          width: 300px;
          font-family: "Rufina", serif;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }
  }

  .hovereffect:hover img {
    filter: blur(10px);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  .hovereffect a.info {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0;
    filter: alpha(opacity=0);
    color: #fff;
    text-transform: uppercase;
  }

  .hovereffect:hover a.info {
    background: url(../assets/images/icon.png) no-repeat;
    background-position: center;
    width: 300px;
    padding-top: 70%;
    opacity: 1;
    margin-left: -10%;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .service {
    padding: 50px 0;
    width: 100%;
  }
  .col-service {
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
  }
  .row {
    margin: 0 auto;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    img {
      display: block;
      width: 100%;
      position: relative;
      -webkit-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      a.info {
        display: inline-block;
        text-decoration: none;
        margin: 50px 20px 80px 20px;
        background-color: transparent;
        h3 {
          display: block;
          width: 300px;
          font-family: "Rufina", serif;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }
  }

  .hovereffect:hover img {
    filter: blur(10px);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  .hovereffect a.info {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0;
    filter: alpha(opacity=0);
    color: #fff;
    text-transform: uppercase;
  }

  .hovereffect:hover a.info {
    background: url(../assets/images/icon.png) no-repeat;
    background-position: center;
    width: 300px;
    padding-top: 70%;
    opacity: 1;
    margin-left: -10%;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .service {
    padding: 50px 0;
    width: 100%;
  }
  .col-service {
    padding-right: 5px;
    padding-left: 5px;
    flex: 25%;
  }
  .row {
    margin: 0 auto;
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    img {
      display: block;
      width: 100%;
      position: relative;
      -webkit-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      a.info {
        display: inline-block;
        text-decoration: none;
        margin: 50px 20px 80px 20px;
        background-color: transparent;
        h3 {
          display: block;
          width: 300px;
          font-family: "Rufina", serif;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }
  }

  .hovereffect:hover img {
    filter: blur(10px);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  .hovereffect a.info {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0;
    filter: alpha(opacity=0);
    color: #fff;
    text-transform: uppercase;
  }

  .hovereffect:hover a.info {
    background: url(../assets/images/icon.png) no-repeat;
    background-position: center;
    width: 300px;
    padding-top: 70%;
    opacity: 1;
    margin-left: -10%;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .service {
    padding: 50px 0;
    width: 100%;
  }
  .col-service {
    padding-right: 5px;
    padding-left: 5px;
  }
  .row {
    margin: 0 auto;
  }
}
@media (min-width: 1224px) {
  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    img {
      display: block;
      width: 100%;
      position: relative;
      -webkit-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      a.info {
        display: inline-block;
        text-decoration: none;
        margin: 50px 20px 80px 20px;
        background-color: transparent;
        h3 {
          display: block;
          width: 300px;
          font-family: "Rufina", serif;
          font-weight: 700;
          margin-left: 2%;
          margin-bottom: 15%;
        }
      }
    }
  }

  .hovereffect:hover img {
    filter: blur(10px);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  .hovereffect a.info {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0;
    filter: alpha(opacity=0);
    color: #fff;
    text-transform: uppercase;
  }

  .hovereffect:hover a.info {
    background: url(../assets/images/icon.png) no-repeat;
    background-position: center;
    width: 300px;
    padding-top: 70%;
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .service {
    padding: 50px 0;
    width: 100%;
  }
  .col-service {
    padding-right: 5px;
    padding-left: 5px;
  }
  .row {
    margin: 0 auto;
  }
}
@media (min-width: 1824px) {
  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    img {
      display: block;
      width: 100%;
      position: relative;
      -webkit-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      a.info {
        display: inline-block;
        text-decoration: none;
        padding: 7px 14px;
        margin: 50px 0 0 0;
        background-color: transparent;
        h3 {
          display: block;
          width: 300px;
          font-family: "Rufina", serif;
          font-weight: 700;
          margin-left: 2%;
          margin-bottom: 70%;
        }
      }
    }
  }

  .hovereffect:hover img {
    filter: blur(10px);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  .hovereffect a.info {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0;
    filter: alpha(opacity=0);
    color: #fff;
    text-transform: uppercase;
  }

  .hovereffect:hover a.info {
    background: url(../assets/images/icon.png) no-repeat;
    background-position: center;
    width: 300px;
    margin-right: 10%;
    padding-top: 60%;
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .service {
    padding: 50px 0;
    width: 100%;
  }
  .col-service {
    padding-right: 5px;
    padding-left: 5px;
  }
  .row {
    margin: 0 auto;
  }
}
</style>
