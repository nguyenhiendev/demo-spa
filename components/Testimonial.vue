<template>
  <section class="testimonial bg-lightred">
    <b-container>
      <b-row>
        <b-col lg="10" md="12" class="m-auto">
          <b-carousel id="carousel-1" :interval="2000" controls img-width="1024" img-height="480">
            <b-carousel-slide :imgBlank="true" imgBlankColor="#fff9f8">
              <div class="single-tst">
                <img src="@/assets/images/quote.png" alt />
                <p>First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.</p>
              </div>
              <div class="client-info">
                <img src="@/assets/images/client.png" alt />
                <p>
                  Jack Marsh,
                  <span>Executive</span>
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide :imgBlank="true" imgBlankColor="#fff9f8">
              <div class="single-tst">
                <img src="@/assets/images/quote.png" alt />
                <p>My partner and i had a wonderful stay. Our room was comfortable and clean. Breakfast was a treat there were plenty of options and the strawberry pancakes were so good! The young lady went out of our way to make sure we were comfortable and happy our entire stay. Looking forward to booking again.</p>
              </div>
              <div class="client-info">
                <img src="@/assets/images/images111.jpg" alt />
                <p>
                  Alexa Piper,
                  <span>Executive</span>
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide :imgBlank="true" imgBlankColor="#fff9f8">
              <div class="single-tst">
                <img src="@/assets/images/quote.png" alt />
                <p>
                  Great location, great service in a charming house and terrific breakfast!
                  Were there after going to Sandbank spending the day at the beach. Very convenient since it's only a short drive to be there. The room and - shared - bathroom were clean. Impressively quiet.
                </p>
              </div>
              <div class="client-info">
                <img src="@/assets/images/images112.jpg" alt />
                <p>
                  Hadley Reagan,
                  <span>Executive</span>
                </p>
              </div>
            </b-carousel-slide>
          </b-carousel>
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
  .pointer-event {
    text-shadow: #fff9f8;
  }
  .bg-lightred {
    background-color: #fff9f8;
    .single-tst {
      position: relative;
      text-align: center;
      img {
        margin: 0 auto 45px;
        width: 59px;
      }
      p {
        color: #263a41;
        font-size: 18px;
        font-weight: 400;
        line-height: 35px;
        font-family: "Rufina", serif;
        margin-bottom: 43px;
      }
    }
    .client-info {
      img {
        border-radius: 50%;
        margin-bottom: 22px;
        height: 76px;
        width: 76px;
      }
      p {
        font-size: 22px;
        margin-bottom: 0;
        color: #263a41;
        font-family: "Rufina", serif;
        line-height: 35px;
        span {
          display: inline-block;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          font-weight: 300;
        }
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .pointer-event {
    text-shadow: #fff9f8;
  }
  .bg-lightred {
    background-color: #fff9f8;
    .single-tst {
      position: relative;
      text-align: center;
      img {
        margin: 30px;
        width: 30px;
      }
      p {
        color: #263a41;
        font-size: 13px;
        font-weight: 400;
        line-height: 25px;
        font-family: "Rufina", serif;
      }
    }
    .client-info {
      img {
        border-radius: 50%;
        margin-bottom: 22px;
        height: 40px;
        width: 40px;
      }
      p {
        font-size: 16px;
        margin-bottom: 0;
        color: #263a41;
        font-family: "Rufina", serif;
        line-height: 35px;
        span {
          display: inline-block;
          font-family: "Roboto", sans-serif;
          font-size: 13px;
          font-weight: 300;
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .pointer-event {
    text-shadow: #fff9f8;
  }
  .bg-lightred {
    background-color: #fff9f8;
    .single-tst {
      position: relative;
      text-align: center;
      img {
        margin: 0 auto 45px;
        width: 59px;
      }
      p {
        color: #263a41;
        font-size: 18px;
        font-weight: 400;
        line-height: 35px;
        font-family: "Rufina", serif;
      }
    }
    .client-info {
      img {
        border-radius: 50%;
        margin-bottom: 22px;
        height: 76px;
        width: 76px;
      }
      p {
        font-size: 22px;
        margin-bottom: 0;
        color: #263a41;
        font-family: "Rufina", serif;
        line-height: 35px;
        span {
          display: inline-block;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          font-weight: 300;
        }
      }
    }
  }
}
@media (min-width: 1224px) {
  .pointer-event {
    text-shadow: #fff9f8;
  }
  .bg-lightred {
    background-color: #fff9f8;
    .single-tst {
      position: relative;
      text-align: center;
      img {
        margin: 0 auto 45px;
        width: 59px;
      }
      p {
        color: #263a41;
        font-size: 18px;
        font-weight: 400;
        line-height: 35px;
        font-family: "Rufina", serif;
      }
    }
    .client-info {
      img {
        border-radius: 50%;
        margin-bottom: 22px;
        height: 76px;
        width: 76px;
      }
      p {
        font-size: 22px;
        margin-bottom: 0;
        color: #263a41;
        font-family: "Rufina", serif;
        line-height: 35px;
        span {
          display: inline-block;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          font-weight: 300;
        }
      }
    }
  }
}
@media (min-width: 1824px) {
  .pointer-event {
    text-shadow: #fff9f8;
  }
  .bg-lightred {
    background-color: #fff9f8;
    .single-tst {
      position: relative;
      text-align: center;
      img {
        margin: 0 auto 45px;
        width: 59px;
      }
      p {
        color: #263a41;
        font-size: 18px;
        font-weight: 400;
        line-height: 35px;
        font-family: "Rufina", serif;
      }
    }
    .client-info {
      img {
        border-radius: 50%;
        margin-bottom: 22px;
        height: 76px;
        width: 76px;
      }
      p {
        font-size: 22px;
        margin-bottom: 0;
        color: #263a41;
        font-family: "Rufina", serif;
        line-height: 35px;
        span {
          display: inline-block;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
