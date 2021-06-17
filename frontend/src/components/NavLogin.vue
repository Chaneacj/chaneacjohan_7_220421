<template>
  <header>
    <h1>
      <img id="logo" alt="Groupomania" src="../assets/logo.svg" />
    </h1>
    <nav>
      <ul>
      <li><router-link to="/">Connexion</router-link></li>
      <li><router-link to="/Signup">Inscription</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavLogin",
};
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: O;
    background: #ffffff;

    #logo{
      position: relative;
      width: 30%;
      left: 10%;
    }

    a{
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #0764E3;
    }

    a:active {
    color: #464655;
    }
}

nav {
    display: block;
    margin: 0px;
}

nav ul {
    list-style-type: none;
    display: flex;
 margin: 0px 0px 0px xx ;
}



</style>