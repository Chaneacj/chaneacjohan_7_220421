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
            <a class="nav-link active" aria-current="page" href="#"
              ><router-link to="/"></router-link>Mon Compte</a>
            <a class="nav-link" href="#"
              ><router-link to="/Login">Déconnexion</router-link></a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped lang="scss">
nav {
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  //margin: 0;
  //padding: 15px 7% 15px 6%;
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
    //padding: 0 0 0 60px;
  }

  a:active {
    color: #0764e3;
  }
}

/* nav {
    display: block;
    margin: 0px;
} */

/* nav ul {
    list-style-type: none;
    display: flex;
    margin: 0px 0px 0px 0px;
} */
</style>