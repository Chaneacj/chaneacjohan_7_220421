<template>
  <form @submit.prevent="test">
    <h2>Hey, look who's here!</h2>
    <h1>Before the start</h1>
    <p>Fill in the form below to get instant access to all major features.</p>
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
      aria-label="Entrez votre mot de passe"
      aria-describedby="passwordInfo"
      v-model="password"
    />

    <input type="submit" id="submit" value="Connexion" />
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    test() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped lang="scss">
form {
  width: 40%;
  position: absolute;
  left: 50%;
  top: 170px;


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
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 0.583333px;
  }

  input {
    font-size: 9px;
    letter-spacing: 0.25px;
    padding: 0.3em 0.5em;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    margin: 0px auto 10px;
    color: #595959;
    font-size: 16px;
    line-height: 20px;
    border-radius: 8px;
    border: 2px solid #e0dedd;
    background: #ffffff;
  }

  input:focus {
  color: #0764e3;
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