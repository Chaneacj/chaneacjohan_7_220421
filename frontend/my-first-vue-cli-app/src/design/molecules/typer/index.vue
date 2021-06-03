<template>
  <span>
    <Label value="value"/>
    <Input :placeholder="placeholder" :minLength="minLength"/>
  </span>
</template>

<script>
import Label from '../../atoms/label'
import Input from '../../atoms/input'

export default {
  name: 'Typer',
  props: {
    value: String,
    placeholder: String,
    minLength: Number
  },
  components: {
    Label, Input
  }
}
</script>

<style scoped lang="scss">
  ::v-deep .Label{
    background:red;
  }

  ::v-deep .Input{
    width: 10rem;
  }
</style>