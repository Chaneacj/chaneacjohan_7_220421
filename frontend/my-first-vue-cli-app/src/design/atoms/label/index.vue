<template>
  <!-- insertion d'une valeur depuis une prop ou une data -->
  <div>{{value}}</div>
</template>

<script>
export default {
  // le nom du composant (il faut qu'il soit unique)
  name: 'Label',
  // les propriétés héritées du parent
  props: {
    value: String,
  }
}
</script>

<!-- le scss qui est unique au composant grâce à l'élement "scoped" -->
<style scoped lang="scss">
</style>