<template>
  <form class="sign">
    Sign in form
    Bonjour {{username}}
    <!-- on passe des propriétés aux composants enfants -->
    <!-- récupère une action de l'enfant avec la fonction emit('nom de la fonction', value)
      et dans le parent avec @nomDeLaFonction="(e) => " on recupere la valeur
     -->
    <Typer label="Email" :minLength="9" placeholder="someEmail" @change="(e) => this.email = e" />
    <Typer label="Password" :minLength="15" placeholder="somePassword" @change="updatePassword" />
    <button @click="connect"> connect </button>
  </form>
</template>

<script>
import Typer from '@/design/molecules/typer'

export default {
  name: 'Sign',
  // tous les composants que celui-ci va utiliser
  components:{
    Typer
  },
  // les données qui sont propres au composant
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  // une fonction executée 1 fois au démarrage du composant
  mounted(){
    this.username = 'Franck'
  },
  // toutes les méthodes que le composant va pouvoir utiliser
  methods: {
    connect () {
      //API call to connect user
      console.log(this.email, this.password)
    },
    updatePassword (e) {
      this.password = e
    }
  }
}
</script>

<style scoped lang="scss">
  // avec ::v-deep on peut injecter du code CSS au css d'un composant enfant
  ::v-deep .Input{
    width: 40rem;
    background:red;
  }
</style>