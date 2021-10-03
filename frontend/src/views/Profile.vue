<template>
  <div>
    <Nav />
    <div class="container" style="max-width: 540px">
      <div class="card text-center">
        <div class="row card-info">
          <p class="col-3 card-text"></p>
          <p class="col-5 card-text"></p>
          <p class="col-2 card-text">
            <small class="text-muted">Modifier</small>
          </p>
          <p class="col-2 card-text">
            <small class="text-muted">Supprimer</small>
          </p>
        </div>
        <img
          class="img-circle"
          src="http://d13yacurqjgara.cloudfront.net/users/195163/screenshots/1755983/survey_2x.png"
          alt="Blueprint Wire illustration"
        />
        <div class="card-body">
          <h5 class="card-title">John Doe</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "profile",
  components: {
    Nav,
  },
};
</script>

<style scoped lang="scss">
.card {
  margin: auto;

  .card-title {
    margin-bottom: 11px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: #1a1a1a;
  }

  .card-text {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.3125px;
    color: #595959;
  }

  .card-info {
    .card-text {
      color: #595959;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 0.583333px;
    }
  }
  form {
    h1 {
      margin-bottom: 11px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: 1.33333px;
      color: #1a1a1a;
    }

    h2 {
      margin-bottom: 4px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.583333px;
      text-transform: uppercase;
      color: #595959;
    }

    p {
      margin-bottom: 20px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.3125px;
      color: #595959;
    }

    label {
      color: #595959;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 0.583333px;
    }

    input {
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 0.4em 1em;
      width: -moz-available;
      width: -webkit-fill-available;
      width: fill-available;
      margin: 2px auto 10px;
      color: #ededed;
      line-height: 20px;
      border-radius: 8px;
      border: 2px solid #ededed;
      background: #ffffff;
      &:focus {
        border: 4px solid #0764e3;
      }
    }

    #content {
      font-size: 10px;
      letter-spacing: 0.18px;
      padding: 0.2em 0.8em;
      width: -moz-available;
      width: -webkit-fill-available;
      width: fill-available;
      margin: 1px auto 7px;
      color: #0764e3;
      line-height: 20px;
      border-radius: 6px;
      border: 2px solid #0764e3;
      background: #ffffff;
    }

    #submit {
      max-width: 200px;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      background: #ffffff;
      color: #0764e3;
      border: none;
      border: 2px solid #0764e3;
      letter-spacing: 0.2px;
      margin-top: 8px;
    }
  }
}
</style>