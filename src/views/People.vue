<template>
  <div class="people">
    <h1>People</h1>
    <div v-if="!peopleIsLoading" class="listado">
      <div class="item" v-for="(caracter, index) in peopleList" :key='index' @click="navigateWithId(caracter.url)">
        {{caracter.name}}
      </div>
      <button
        v-if="peopleListNext"
        v-bind:disabled="nextTenIsLoading"
        @click="getNextTen">
          {{nextTenIsLoading?'Loading...':'Load More'}}
      </button>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      peopleIsLoading: state => state.people.peopleIsLoading,
      nextTenIsLoading: state => state.people.nextTenIsLoading,
      peopleListNext: state => state.people.peopleListNext
    }),
    ...mapGetters({
      peopleList: 'people/peopleList'
    })
  },
  methods:{
    ...mapActions({
      getPeople: 'people/getPeopleList',
      getNextTen: 'people/getNextTen'
    }),
    navigateWithId(url) {
      const characterId = url.split('/')[5]
      this.$router.push({ name: 'character', params: { characterId }})
    }
  },
  beforeMount() {
    this.peopleList.length == 0 && this.$store.dispatch('people/getPeopleList')
  }
}
</script>
<style lang="postcss" scoped>
.people,
.listado,
.item {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.listado {
  padding: 0 1rem;
}
.item {
  border: 1px solid #f0f0f0;
  border-radius: .25rem;
  margin: 1rem 0 0;
  padding: .8rem;
  &:hover {
    background-color: #eee;
    cursor: pointer;
    font-weight: bold;
  }
}
button {
  align-self: center;
  background-color: #eee;
  border: none;
  margin: 1rem 0;
  max-width: 480px; 
  width: 100%;
}
</style>

