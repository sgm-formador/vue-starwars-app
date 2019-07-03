<template>
  <div>
    Character
  </div>
</template>
<script>
export default {
  beforeMount(){
    const id = this.$route.params.characterId
    console.log(id)
  }
}
</script>

