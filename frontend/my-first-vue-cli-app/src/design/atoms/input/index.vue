<template>
  <input
    :placeholder="placeholder" 
    @input="onInput" 
    :class="{'IsValid': valid, 'Input': true}"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: String,
    minLength: Number
  },
  data () {
    return {
      value: "",
      valid: false
    }
  },
  methods: {
    onInput (e) {
      this.value = e.target.value
      if(this.value.length > this.minLength) this.valid = true
      else this.valid = false
      this.$emit('change', this.value)
    } 
  }
}
</script>

<style scoped lang="scss">
  .isValid {
    border: 5px solid blue;
  }
</style>