import api from '@/services'

export default {
  namespaced: true,
  state: {
    peopleIsLoading: false,
    peopleListError: false,
    peopleList: [],
    peopleListNext: null,

    nextTenIsLoading: false,
    nextTenListError: false,

    characterIsLoading: false,
    characterError: false,
    characterDetail: null
  },
  getters: {
    peopleList: state => state.peopleList,
    // filterPeopleList: (state) => (filtro) => state.peopleList.filter((x) => x.name.match(filtro)),
    characterDetail: state => state.characterDetail
  },
  mutations: {
    getPeopleListRequest (state) {
      state.peopleIsLoading = true
      state.peopleListError = false
    },
    getPeopleListSuccess (state, payload) {
      state.peopleIsLoading = false
      state.peopleListError = false
      state.peopleList = payload.results
      state.peopleListNext = payload.next
    },
    getPeopleListFail (state, error) {
      state.peopleIsLoading = false
      state.peopleListError = error
    },
    getNextTenRequest (state) {
      state.nextTenIsLoading = true
      state.nextTenListError = false
    },
    getNextTenSuccess (state, payload) {
      state.nextTenIsLoading = false
      state.nextTenListError = false
      state.peopleList = payload.results
      state.peopleListNext = payload.next
    },
    getNextTenFail (state, error) {
      state.nextTenIsLoading = false
      state.nextTenListError = error
    },
    getCharacterDetailRequest (state) {
      state.characterIsLoading = true
      state.characterError = false
    },
    getCharacterDetailSuccess (state, payload) {
      state.characterIsLoading = false
      state.characterError = false
      state.characterDetail = payload
    },
    getCharacterDetailFail (state, error) {
      state.characterIsLoading = false
      state.characterError = error
    }
  },
  actions: {
    getPeopleList (context) {
      context.commit('getPeopleListRequest')
      api.people.getPeople().then(({ results, next }) => {
        const payload = {
          next,
          results
        }
        context.commit('getPeopleListSuccess', payload)
      }).catch(err => context.commit('getPeopleListFail', err))
    },
    getNextTen (context) {
      context.commit('getNextTenRequest')
      const page = context.state.peopleListNext
      const nextPage = page.slice(page.search('='))
      api.people.getNextTen(nextPage).then(({ results, next }) => {
        const payload = {
          next,
          results: [...context.state.peopleList, ...results]
        }
        context.commit('getNextTenSuccess', payload)
      }).catch(err => context.commit('getNextTenFail', err))
    },
    getCharacterDetail (context, payload) {
      context.commit('getCharacterDetailRequest')
      api.people.getCharacter(payload.id).then((character) => {
        context.commit('getCharacterDetailSuccess', character)
      }).catch(err => context.commit('getCharacterDetailFail', err))
    }
  }
}
