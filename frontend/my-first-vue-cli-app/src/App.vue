<template>
  <div id="app">
    <nav>
      <!-- un lien de navigation (semblable au "a") -->
      <router-link to="/">Home</router-link>
      <!-- on peut aussi utiliser le nom de la route -->
      <router-link to="Sign">Sign</router-link>
    </nav>
    <!-- ici est injecté le routeur -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<!-- css partagé par tous les composants de l'app -->
<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  font-family: 'Lato', sans-serif;
}

#nav {
  padding: 10px;
  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #464655;
    &.router-link-exact-active {
      color: #0764E3;
    }
  }
}
</style>




