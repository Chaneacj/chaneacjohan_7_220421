<template>
  <div id="app">
     <router-view></router-view>
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

html {
    height: 100%;
}

body {
    background: #F7F7F7;
    margin: 0;
    height: 100%;
}

h2, h3, h4, h5, figure, p{
    margin: 0;
}

ul {
    padding: 0;
}

a { 
    color: black;
}

a:link, a:visited, a:active {
    text-decoration: none;
}

a:visited  {
    text-decoration: none;
}

</style>




