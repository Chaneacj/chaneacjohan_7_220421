<template>
<div class="container">
  <div class="row">
    <div class="col-sm-4 col-lg-6">
    <figure>
      <img id="illustration" alt="Groupomania" src="../assets/start.svg" />
    </figure>
  </div>
  <div class="col-sm-8 col-lg-6">
  <form @submit.prevent="sendData">
          <h2>Hey, look who's here!</h2>
    <h1>Create account</h1>
    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
        <label>first name</label>
        <input
          type="text"
          placeholder="Votre prénom"
          id="firstName"
          required
          maxlength="30"
          aria-label="Entrez votre prénom"
          v-model="firstName"
        />
      <label>Last name</label>
        <input
          type="text"
          placeholder="Votre nom"
          id="lastName"
          required
          maxlength="30"
          aria-label="Entrez votre nom"
          v-model="lastName"
        />
      <label>E-mail</label>
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
      <label>Password</label>
        <input
          type="password"
          placeholder="Votre mot de passe"
          id="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          aria-label="Entrez votre mot de passe"
          aria-describedby="passwordInfo"
          v-model="password"
        />
      
    

    <input
      type="submit"
      id="submit"
    />
  </form>
  </div>
  </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "SignupForm",
  data: () => {
  return {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    };
  },
  methods : {
    sendData(){
      let contact = {
        email : this.email,
        password : this.password,
        firstName : this.firstName,
        lastName : this.lastName,
      }

      console.log(this.email)
      axios.post("http://localhost:3000/api/signup" , contact)
      .then((json) => {
          console.log(json)
      })
    }
  }
};
</script>

<style scoped lang="scss">

#illustration {
  margin-top: 50px;
  /* width: 65%; */
}

form {
  h1 {
    margin-bottom: 11px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 1.33333px;
    color: #1a1a1a;
  }

  h2 {
    margin-bottom: 4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.583333px;
    text-transform: uppercase;
    color: #595959;
  }

  p {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.3125px;
    color: #595959;
  }

  label {
    color: #595959;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 0.583333px;
  }

  input {
    font-size: 14px;
    letter-spacing: 0.25px;
    padding: 0.4em 1em;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    margin: 2px auto 10px;
    color: #ededed;
    line-height: 20px;
    border-radius: 8px;
    border: 2px solid #ededed;
    background: #ffffff;

    &:focus {
      border: 4px solid #0764e3;
    }
  }

  #submit {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    background: #0764e3;
    color: #ffffff;
    border: none;
    border: 2px solid #0764e3;
    letter-spacing: 0.25px;
    margin-top: 10px;
  }
}
</style>