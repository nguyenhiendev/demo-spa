<template>
  <footer class="footer" data-aos="fade-up" data-aos-duration="2000">
    <b-container>
      <b-row>
        <b-col md="12" class="text-center">
          <a href="#" class="logo foo-logo">
            <img src="../assets/images/butterfly.png" alt />
            <p>Spa</p>
          </a>
          <nav class="foo-nav">
            <ul>
              <li>
                <a href="/project-spa/">Home</a>
              </li>
              <li>
                <a href="/project-spa/about">About</a>
              </li>
              <li>
                <a href="/project-spa/feature">Feature</a>
              </li>
              <li>
                <a href="/project-spa/service">Service</a>
              </li>
              <li>
                <a href="/project-spa/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div class="foo-social">
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
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .footer {
    background-color: #fff9f8;
    padding: 80px 0 60px;
  }
  .foo-logo {
    margin: 0 auto;
    display: block;
    max-width: 109px;
    img {
      display: block;
      width: 60px;
      height: auto;
      margin: 0 auto;
    }
    p {
      color: #1e2528;
      font-size: 40px;
      line-height: 60px;
      font-family: URW Chancery L, cursive;
      font-weight: 500;
    }
  }
  .foo-nav {
    margin: 30px 0;
    position: relative;
    display: none;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          color: #263a41;
          display: block;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0 20px;
        }
      }
    }
  }
  .foo-social {
    margin-bottom: 30px;
    a {
      border-right: 1px solid #b1b4bb;
      color: #3a414e;
      display: inline-block;
      font-size: 14px;
      line-height: 0.8;
      padding: 0 10px;
      i {
        font-family: "themify";
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .footer {
    background-color: #fff9f8;
    padding: 80px 0 60px;
  }
  .foo-logo {
    margin: 0 auto;
    display: block;
    max-width: 109px;
    img {
      display: block;
      width: 50px;
      height: auto;
      margin: 0 auto;
    }
    p {
      color: #1e2528;
      font-size: 30px;
      line-height: 60px;
      font-family: URW Chancery L, cursive;
      font-weight: 500;
    }
  }
  .foo-nav {
    margin: 30px 0;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          color: #263a41;
          display: block;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0 20px;
        }
      }
    }
  }
  .foo-social {
    margin-bottom: 30px;
    a {
      border-right: 1px solid #b1b4bb;
      color: #3a414e;
      display: inline-block;
      font-size: 14px;
      line-height: 0.8;
      padding: 0 10px;
      i {
        font-family: "themify";
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .footer {
    background-color: #fff9f8;
    padding: 80px 0 60px;
  }
  .foo-logo {
    margin: 0 auto;
    display: block;
    max-width: 109px;
    img {
      display: block;
      width: 60px;
      height: auto;
      margin: 0 auto;
    }
    p {
      color: #1e2528;
      font-size: 40px;
      line-height: 60px;
      font-family: URW Chancery L, cursive;
      font-weight: 500;
    }
  }
  .foo-nav {
    margin: 30px 0;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          color: #263a41;
          display: block;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0 20px;
        }
      }
    }
  }
  .foo-social {
    margin-bottom: 30px;
    a {
      border-right: 1px solid #b1b4bb;
      color: #3a414e;
      display: inline-block;
      font-size: 14px;
      line-height: 0.8;
      padding: 0 10px;
      i {
        font-family: "themify";
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}
@media (min-width: 1224px) {
  .footer {
    background-color: #fff9f8;
    padding: 80px 0 60px;
  }
  .foo-logo {
    margin: 0 auto;
    display: block;
    max-width: 109px;
    img {
      display: block;
      width: 60px;
      height: auto;
      margin: 0 auto;
    }
    p {
      color: #1e2528;
      font-size: 40px;
      line-height: 60px;
      font-family: URW Chancery L, cursive;
      font-weight: 500;
    }
  }
  .foo-nav {
    margin: 30px 0;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          color: #263a41;
          display: block;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0 20px;
        }
      }
    }
  }
  .foo-social {
    margin-bottom: 30px;
    a {
      border-right: 1px solid #b1b4bb;
      color: #3a414e;
      display: inline-block;
      font-size: 14px;
      line-height: 0.8;
      padding: 0 10px;
      i {
        font-family: "themify";
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}
@media (min-width: 1824px) {
  .footer {
    background-color: #fff9f8;
    padding: 80px 0 60px;
  }
  .foo-logo {
    margin: 0 auto;
    display: block;
    max-width: 109px;
    img {
      display: block;
      width: 60px;
      height: auto;
      margin: 0 auto;
    }
    p {
      color: #1e2528;
      font-size: 40px;
      line-height: 60px;
      font-family: URW Chancery L, cursive;
      font-weight: 500;
    }
  }
  .foo-nav {
    margin: 30px 0;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          color: #263a41;
          display: block;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0 20px;
        }
      }
    }
  }
  .foo-social {
    margin-bottom: 30px;
    a {
      border-right: 1px solid #b1b4bb;
      color: #3a414e;
      display: inline-block;
      font-size: 14px;
      line-height: 0.8;
      padding: 0 10px;
      i {
        font-family: "themify";
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}
</style>
