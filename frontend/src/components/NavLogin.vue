<template>
  <header>
    <figure>
      <img id="logo" alt="Groupomania" src="../assets/logo.svg" />
    </figure>
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
    align-items: center;
    margin: 0;
    padding: 15px 7% 15px 6%;
    background: #ffffff;
    border-bottom: 2px solid #E8F0FC;

    #logo{
      position: relative;
      width: 30%;
    }

    a{
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #464655;
      padding: 0 0 0 60px;
    }

    a:active {
    color: 
    #0764E3;
    }
}

nav {
    display: block;
    margin: 0px;
}

nav ul {
    list-style-type: none;
    display: flex;
    margin: 0px 0px 0px 0px;
}



</style>