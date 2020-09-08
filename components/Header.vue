<template>
  <div class="header">
    <b-container >
      <b-row class="align-items-end">
        <b-col md="3">
          <a href class="logo">
            <img src="@/assets/images/butterfly.png" />
            <p>Spa</p>
          </a>
        </b-col>
        <b-col md="9">
          <nav class="primary-menu">
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
          <nav class="mobile-menu">
            <b-button v-b-toggle.collapse-1 variant="#ff817e">
              <b-icon icon="list"></b-icon>
            </b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <ul>
                <li>
                  <a href="/project-spa/">Home</a>
                </li>
                <li>
                  <a href="/project-spa/about">About</a>
                </li>
                <li>
                  <a href="/project-spa/feature">feature</a>
                </li>
                <li>
                  <a href="/project-spa/service">service</a>
                </li>
                <li>
                  <a href="/project-spa/contact">Contact</a>
                </li>
              </ul>
            </b-collapse>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .btn {
    color: #ff817e;
    display: block;
    font-size: 18px;
    position: absolute;
    right: 0;
    top: -80px;
  }
  .b-icon {
    width: 35px;
    height: 35px;
  }
  .mt-2 {
    background-color: #fcf5ee;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 20px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      a {
        color: #263a41;
        display: block;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 10px 15px;
      }
    }
  }
  .col-md-3 {
    margin-right: -70px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .logo {
      display: block;
      max-width: 106px;
      img {
        width: 60px;
      }
      p {
        color: #1e2528;
        font-size: 40px;
        line-height: 60px;
        font-family: URW Chancery L, cursive;
        font-weight: 500;
      }
    }
    .primary-menu {
      display: none;
      position: relative;
      margin-bottom: 45px;
      z-index: 1;
      ul {
        background-color: #fcf5ee;
        display: none;
        text-align: center;
        padding: 10px 0;
        li {
          display: inline-block;
          a {
            color: #263a41;
            display: block;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 0 15px;
          }
        }
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .container {
    margin: 0;
  }
  .mobile-menu {
    display: none;
  }
  .col-md-3 {
    flex: 0 0 15%;
    padding-top:10px;
  }
  .col-md-9 {
    width: 70%;
    padding: 0;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .logo {
      display: block;
      max-width: 106px;
      img {
        width: 50px;
      }
      p {
        color: #1e2528;
        font-size: 30px;
        line-height: 60px;
        font-family: URW Chancery L, cursive;
        font-weight: 500;
      }
    }
    .btn-primary {
      display: none;
    }
    .primary-menu {
      position: relative;
      margin-bottom: 45px;
      z-index: 1;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          display: inline-block;
          a {
            color: #263a41;
            display: block;
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 0 15px;
          }
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .mobile-menu {
    display: none;
  }
  .col-md-3 {
    flex: 0 0 15%;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .logo {
      display: block;
      max-width: 106px;
      img {
        width: 60px;
      }
      p {
        color: #1e2528;
        font-size: 40px;
        line-height: 60px;
        font-family: URW Chancery L, cursive;
        font-weight: 500;
      }
    }
    .btn-primary {
      display: none;
    }
    .primary-menu {
      position: relative;
      margin-bottom: 45px;
      z-index: 1;
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
            padding: 0 15px;
          }
        }
      }
    }
  }
}
@media (min-width: 1224px) {
  .mobile-menu {
    display: none;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .logo {
      display: block;
      max-width: 106px;
      img {
        width: 60px;
      }
      p {
        color: #1e2528;
        font-size: 40px;
        line-height: 60px;
        font-family: URW Chancery L, cursive;
        font-weight: 500;
      }
    }
    .btn-primary {
      display: none;
    }
    .primary-menu {
      position: relative;
      margin-bottom: 45px;
      z-index: 1;
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
            padding: 0 15px;
          }
        }
      }
    }
  }
}
@media (min-width: 1824px) {
  .mobile-menu {
    display: none;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .logo {
      display: block;
      max-width: 106px;
      img {
        width: 60px;
      }
      p {
        color: #1e2528;
        font-size: 40px;
        line-height: 60px;
        font-family: URW Chancery L, cursive;
        font-weight: 500;
      }
    }
    .btn-primary {
      display: none;
    }
    .primary-menu {
      position: relative;
      margin-bottom: 45px;

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
  }
}
</style>
