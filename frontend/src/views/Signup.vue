<template>
  <div>
    <NavLogin/>

    <form >
      <SignupForm/>
    </form>
  </div>
  
</template>

<script>
import NavLogin from "@/components/NavLogin.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
  name: "Login",
  components: {
    NavLogin,
    SignupForm,
  },
};
</script>