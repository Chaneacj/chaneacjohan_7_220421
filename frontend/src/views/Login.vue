<template>
  <div>
    <NavLogin/>

    <form >
      <LoginForm/>
    </form>
  </div>
  
</template>

<script>
import NavLogin from "@/components/NavLogin.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    NavLogin,
    LoginForm,
  },
};
</script>