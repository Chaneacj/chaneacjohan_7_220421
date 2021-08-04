<template>
  <div>
    <NavLogin/>

    <form >
      <SignupForm v-on:data-sent="updateDataSignup"/>
       <!-- <LoginForm /> -->
    </form>
  </div>
  
</template>

<script>
import NavLogin from "@/components/NavLogin.vue";
import SignupForm from "@/components/SignupForm.vue";
// import LoginForm from "@/components/SignupForm.vue";

const axios = require('axios');

export default {
  name: "Signup",
  components: {
    NavLogin,
    SignupForm,
    // LoginForm
  },
  data: () => {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      
    };
  },
  methods: {
    updateDataSignup(data) {
      // Stock le prénom et nom
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.password = data.password;

      this.signup();
    },
 
    signup() {
      // Inscrit et connecte l'utilisateur
      axios.get('http://localhost:3000/api').then(reponse =>console.log(reponse))

    },
  },
};

</script>