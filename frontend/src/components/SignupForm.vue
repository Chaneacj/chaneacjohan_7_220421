<template>
  <form @submit.prevent="test">
    <div>
      <div>
        <input
          type="text"
          placeholder="Votre prénom"
          id="firstName"
          required
          maxlength="30"
          aria-label="Entrez votre prénom"
          v-model="firstName"
          v-on:input="sendData"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Votre nom"
          id="lastName"
          required
          maxlength="30"
          aria-label="Entrez votre nom"
          v-model="lastName"
          v-on:input="sendData"
        />
      </div>
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
          v-on:input="sendData"
        />
      </div>
        <div>
        <input
          type="password"
          placeholder="Votre mot de passe"
          id="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          aria-label="Entrez votre mot de passe"
          aria-describedby="passwordInfo"
          v-model="password"
          v-on:input="sendData"
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
  name: "SignupForm",

};
</script>