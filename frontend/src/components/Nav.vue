<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><figure class="navbar-brand" collapse>
            <img id="logo" alt="Groupomania" src="../assets/logo.svg" /></figure
        ></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active"  href="#"
              ><router-link to="/Feed">Feed</router-link></a
            >
            <a class="nav-link active" href=""
              ><router-link to="/Profile"></router-link>Profile</a
            >
            <a @click="logout" class="nav-link" href=""
              ><router-link to="/">Déconnexion</router-link></a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
          methods: {
            logout() {
              localStorage.clear();
            }
        }
};

</script>

<style scoped lang="scss">
nav {
  background: #ffffff;
  border-bottom: 2px solid #e8f0fc;

  #logo {
    position: relative;
    width: 30%;
  }

  a {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #464655;
  }

  a:active {
    color: #0764e3;
  }
}
</style>