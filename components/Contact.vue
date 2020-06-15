<template>
  <section class="contact">
    <b-container>
      <b-row>
        <b-col lg="8" md="10" class="m-auto">
          <div class="sec-heading">
            <h3 class="sec-title">Get In Touch</h3>
            <p>To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="10" md="12" class="m-auto">
          <b-row>
            <b-col md="4">
              <address>
                <span>
                  <b-icon-map></b-icon-map>
                </span>
                848 E 28th ST, BROOKLYN
                <br />NEW YORK, USa
              </address>
              <address>
                <span>
                  <b-icon-envelope></b-icon-envelope>
                </span>
                <a href>example@spa.com</a>
                <a href>example@spa.com</a>
              </address>
              <address>
                <span>
                  <b-icon-phone></b-icon-phone>
                </span>
                <a href>tel:+02 365 2365 3265 (02)</a>
                <a href>tel:+01 365 2365 3265 (04)</a>
              </address>
            </b-col>
            <b-col md="7" class="offset-md-1">
              <b-form>
                <b-form-input placeholder="Name"></b-form-input>
                <b-form-input placeholder="Email Address"></b-form-input>
                <b-form-textarea class="comments" id="comments" placeholder="Write Comment"></b-form-textarea>
                <b-button type="submit" class="btn btn-round" id="submit">Submit now</b-button>
              </b-form>
              <div id="message"></div>
            </b-col>
          </b-row>
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
  section {
    display: block;
    position: relative;
    padding: 50px 0;
    width: 100%;
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
    address {
      color: #888;
      font-size: 14px;
      font-weight: 400;
      padding-left: 80px;
      position: relative;
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
      span {
        background-color: #ff817e;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 50px;
      }
      a {
        color: #888;
        display: block;
        font-size: 14px;
        font-weight: 400;
      }
    }
    form {
      width: 100%;
      input {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .comments {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .btn {
        border-radius: 50px;
        background-color: #ff817e;
        border-color: #fff;
        color: #fff;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        line-height: 0.8;
        text-transform: uppercase;
        min-width: 170px;
        padding: 20px 15px;
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  section {
    display: block;
    position: relative;
    padding: 50px 0;
    width: 100%;
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
    address {
      color: #888;
      font-size: 14px;
      font-weight: 400;
      padding-left: 80px;
      position: relative;
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
      span {
        background-color: #ff817e;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 50px;
      }
      a {
        color: #888;
        display: block;
        font-size: 14px;
        font-weight: 400;
      }
    }
    form {
      width: 100%;
      input {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .comments {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .btn {
        border-radius: 50px;
        background-color: #ff817e;
        border-color: #fff;
        color: #fff;
        display: inline-block;
        font-size: 13px;
        font-weight: 500;
        line-height: 0.8;
        text-transform: uppercase;
        width: 30%;
        padding: 20px 15px;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  section {
    display: block;
    position: relative;
    padding: 50px 0;
    width: 100%;
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
    address {
      color: #888;
      font-size: 14px;
      font-weight: 400;
      padding-left: 80px;
      position: relative;
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
      span {
        background-color: #ff817e;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 50px;
      }
      a {
        color: #888;
        display: block;
        font-size: 14px;
        font-weight: 400;
      }
    }
    form {
      width: 100%;
      input {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .comments {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .btn {
        border-radius: 50px;
        background-color: #ff817e;
        border-color: #fff;
        color: #fff;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        line-height: 0.8;
        text-transform: uppercase;
        min-width: 170px;
        padding: 20px 15px;
      }
    }
  }
}
@media (min-width: 1224px) {
  section {
    display: block;
    position: relative;
    padding: 50px 0;
    width: 100%;
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
    address {
      color: #888;
      font-size: 14px;
      font-weight: 400;
      padding-left: 80px;
      position: relative;
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
      span {
        background-color: #ff817e;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 50px;
      }
      a {
        color: #888;
        display: block;
        font-size: 14px;
        font-weight: 400;
      }
    }
    form {
      width: 100%;
      input {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .comments {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .btn {
        border-radius: 50px;
        background-color: #ff817e;
        border-color: #fff;
        color: #fff;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        line-height: 0.8;
        text-transform: uppercase;
        min-width: 170px;
        padding: 20px 15px;
      }
    }
  }
}

@media (min-width: 1824px) {
  section {
    display: block;
    position: relative;
    padding: 50px 0;
    width: 100%;
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
    address {
      color: #888;
      font-size: 14px;
      font-weight: 400;
      padding-left: 80px;
      position: relative;
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
      span {
        background-color: #ff817e;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 50px;
      }
      a {
        color: #888;
        display: block;
        font-size: 14px;
        font-weight: 400;
      }
    }
    form {
      width: 100%;
      input {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .comments {
        border: 1px solid #e3e6ea;
        display: block;
        padding: 10px 20px;
        margin-bottom: 25px;
        width: 100%;
      }
      .btn {
        border-radius: 50px;
        background-color: #ff817e;
        border-color: #fff;
        color: #fff;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        line-height: 0.8;
        text-transform: uppercase;
        min-width: 170px;
        padding: 20px 15px;
      }
    }
  }
}
</style>
