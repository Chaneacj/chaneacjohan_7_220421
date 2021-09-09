<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="card-body">
      <div class="card-info">
        <p class="card-text">
          <small class="text-muted"><i class="far fa-calendar"></i>date</small>
        </p>
        <p class="card-text">
          <small class="text-muted"><i class="far fa-user"></i>user</small>
        </p>
      </div>
      <h5 class="card-title">Card title</h5>
      <img  class="card-img-top" alt="..."/>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
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
}
</style>