<template>
  <div>
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <h5 class="card-title">Name</h5>
          </div>
        </div>
      </div>
      <div>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
};
</script>

<style>
.card {
  max-width: 720px;
  margin: auto;
}
</style>
