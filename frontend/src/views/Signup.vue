<template>
  <div>
    <NavLogin/>

    <form >
      <SignupForm/>
       <!-- <LoginForm /> -->
    </form>
  </div>
  
</template>

<script>
import NavLogin from "@/components/NavLogin.vue";
import SignupForm from "@/components/SignupForm.vue";
// import LoginForm from "@/components/SignupForm.vue";

export default {
  name: "Signup",
  components: {
    NavLogin,
    SignupForm,
    // LoginForm
  }
};
</script>