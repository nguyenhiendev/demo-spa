<template>
  <section class="appointment" data-aos="fade-up" data-aos-duration="2000">
    <div class="appointment-wrap">
      <figure>
        <img src="@/assets/images/image11.jpg" alt />
      </figure>
      <div class="appointment-form">
        <b-form>
          <div class="form-field half-width">
            <b-form-input placeholder="Name"></b-form-input>
            <b-form-input placeholder="Email address"></b-form-input>
          </div>
          <div class="form-field half-width">
            <div class="select-field">
              <b-form-select v-model="selected" class="select" :options="options"></b-form-select>
            </div>
            <b-form-input placeholder="Phone numer"></b-form-input>
          </div>
          <div class="form-field half-width">
            <b-form-input type="date"></b-form-input>
            <b-form-input type="time"></b-form-input>
          </div>
          <div class="form-field half-width">
            <b-form-textarea
              class="textarea-state"
              id="textarea-state"
              placeholder="Your Notes"
              rows="3"
            ></b-form-textarea>
          </div>
          <b-button class="btn btn-round" id="asubmit">Make an Appointment</b-button>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select service" },
        { value: "normal", text: "Normal Service" },
        { value: "vip", text: "VIP Serevice" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .appointment-wrap {
    display: flex;
    flex-wrap: wrap;
    figure {
      flex-basis: 40%;
      margin: 0;
      img {
        display: none;
        width: 100%;
        height: auto;
      }
    }
    .appointment-form {
      width: 100%;
      background-color: #fff9f8;
      form {
        input {
          width: 49%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #d4d3d3;
          color: #999;
          display: block;
          font-size: 12px;
          font-weight: 400;
          padding: 10px 0;
          margin-bottom: 30px;
        }
        max-width: 650px;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        .half-width {
          display: flex;
          flex-wrap: wrap;
          box-pack: justify;
          justify-content: space-between;
          position: relative;
          width: 97%;
          margin-left: 5px;
          .select-field {
            width: 49%;
            .select {
              text-transform: uppercase;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid #d4d3d3;
              color: #999;
              display: block;
              font-size: 12px;
              font-weight: 400;
              padding: 5px 0;
            }
          }
          .textarea-state {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #d4d3d3;
            color: #999;
            display: block;
            font-size: 12px;
            font-weight: 400;
            padding: 10px 0;
            margin-bottom: 30px;
            width: 100%;
            overflow: auto;
            resize: vertical;
          }
        }
        .btn {
          border-radius: 50px;
          background-color: #ff817e;
          color: #fff;
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          line-height: 0.8;
          text-transform: uppercase;
          min-width: 140px;
          padding: 10px 5px;
          border-color: white;
          margin-left: 5px;
        }
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .appointment-wrap {
    display: flex;
    flex-wrap: wrap;
    figure {
      flex-basis: 40%;
      margin: 0;
      img {
        display: block;
        width: 100%;
        height: 321px;
      }
    }
    .appointment-form {
      flex-basis: 60%;
      padding-left: 100px;
      background-color: #fff9f8;
      form {
        input {
          width: 49%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #d4d3d3;
          color: #999;
          display: block;
          font-size: 12px;
          font-weight: 400;
          padding: 10px 0;
          margin-bottom: 30px;
        }
        max-width: 650px;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        .half-width {
          display: flex;
          flex-wrap: wrap;
          box-pack: justify;
          justify-content: space-between;
          position: relative;
          width: 99%;
          .select-field {
            width: 49%;
            .select {
              text-transform: uppercase;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid #d4d3d3;
              color: #999;
              display: block;
              font-size: 12px;
              font-weight: 400;
              padding: 5px 0;
            }
          }
          .textarea-state {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #d4d3d3;
            color: #999;
            display: block;
            font-size: 12px;
            font-weight: 400;
            padding: 10px 0;
            margin-bottom: 30px;
            width: 100%;
            overflow: auto;
            resize: vertical;
          }
        }
        .btn {
          border-radius: 50px;
          background-color: #ff817e;
          color: #fff;
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          line-height: 0.8;
          text-transform: uppercase;
          min-width: 140px;
          padding: 10px 5px;
          border-color: white;
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1223px) {
  .appointment-wrap {
    display: flex;
    flex-wrap: wrap;
    figure {
      flex-basis: 40%;
      margin: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .appointment-form {
      flex-basis: 60%;
      padding-left: 100px;
      background-color: #fff9f8;
      form {
        input {
          width: 49%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #d4d3d3;
          color: #999;
          display: block;
          font-size: 12px;
          font-weight: 400;
          padding: 10px 0;
          margin-bottom: 30px;
        }
        max-width: 650px;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        .half-width {
          display: flex;
          flex-wrap: wrap;
          box-pack: justify;
          justify-content: space-between;
          position: relative;
          width: 99%;
          .select-field {
            width: 49%;
            .select {
              text-transform: uppercase;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid #d4d3d3;
              color: #999;
              display: block;
              font-size: 12px;
              font-weight: 400;
              padding: 5px 0;
            }
          }
          .textarea-state {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #d4d3d3;
            color: #999;
            display: block;
            font-size: 12px;
            font-weight: 400;
            padding: 10px 0;
            margin-bottom: 30px;
            width: 100%;
            overflow: auto;
            resize: vertical;
          }
        }
        .btn {
          border-radius: 50px;
          background-color: #ff817e;
          color: #fff;
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          line-height: 0.8;
          text-transform: uppercase;
          min-width: 140px;
          padding: 10px 5px;
          border-color: white;
        }
      }
    }
  }
}
@media (min-width: 1224px) {
  .appointment-wrap {
    display: flex;
    flex-wrap: wrap;
    figure {
      flex-basis: 40%;
      margin: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .appointment-form {
      flex-basis: 60%;
      padding-left: 50px;
      background-color: #fff9f8;
      form {
        input {
          width: 49%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #d4d3d3;
          color: #999;
          display: block;
          font-size: 12px;
          font-weight: 400;
          padding: 10px 0;
          margin-bottom: 30px;
        }
        max-width: 650px;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        .half-width {
          display: flex;
          flex-wrap: wrap;
          box-pack: justify;
          justify-content: space-between;
          position: relative;
          width: 100%;
          .select-field {
            width: 49%;
            .select {
              text-transform: uppercase;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid #d4d3d3;
              color: #999;
              display: block;
              font-size: 12px;
              font-weight: 400;
              padding: 5px 0;
            }
          }
          .textarea-state {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #d4d3d3;
            color: #999;
            display: block;
            font-size: 12px;
            font-weight: 400;
            padding: 10px 0;
            margin-bottom: 30px;
            width: 100%;
            overflow: auto;
            resize: vertical;
          }
        }
        .btn {
          border-radius: 50px;
          background-color: #ff817e;
          color: #fff;
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
          line-height: 0.8;
          text-transform: uppercase;
          min-width: 170px;
          padding: 20px 15px;
          border-color: white;
        }
      }
    }
  }
}
@media (min-width: 1824px) {
  .appointment-wrap {
    display: flex;
    flex-wrap: wrap;
    figure {
      flex-basis: 40%;
      margin: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .appointment-form {
      flex-basis: 60%;
      padding-left: 100px;
      background-color: #fff9f8;
      form {
        input {
          width: 49%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #d4d3d3;
          color: #999;
          display: block;
          font-size: 12px;
          font-weight: 400;
          padding: 10px 0;
          margin-bottom: 30px;
        }
        max-width: 650px;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        .half-width {
          display: flex;
          flex-wrap: wrap;
          box-pack: justify;
          justify-content: space-between;
          position: relative;
          width: 100%;
          .select-field {
            width: 49%;
            .select {
              text-transform: uppercase;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid #d4d3d3;
              color: #999;
              display: block;
              font-size: 12px;
              font-weight: 400;
              padding: 5px 0;
            }
          }
          .textarea-state {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #d4d3d3;
            color: #999;
            display: block;
            font-size: 12px;
            font-weight: 400;
            padding: 10px 0;
            margin-bottom: 30px;
            width: 100%;
            overflow: auto;
            resize: vertical;
          }
        }
        .btn {
          border-radius: 50px;
          background-color: #ff817e;
          color: #fff;
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
          line-height: 0.8;
          text-transform: uppercase;
          min-width: 170px;
          padding: 20px 15px;
          border-color: white;
        }
      }
    }
  }
}
</style>
