<template>
  <form @submit.prevent="test">
    <div>
      <div>
        <input
          type="email"
          placeholder="Votre email"
          id="email"
          required
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
          maxlength="60"
          aria-label="Entrez votre email"
          v-model="email"
        />
      </div>
    </div>
    <div>
      <div>
        <input
          type="password"
          placeholder="Votre mot de passe"
          id="password"
          required
          
          aria-label="Entrez votre mot de passe"
          aria-describedby="passwordInfo"
          v-model="password"
        />
      </div>
    </div>

    <input
          type="submit"
          id="submit"
        />

</form>
</template>

<script>
export default {
  name: "LoginForm",
  data(){
      return {
          email : '',
          password : '',
      }
  },
  methods: {
      test(){
          console.log(this.email , this.password);
      }
  }
  

};
</script>