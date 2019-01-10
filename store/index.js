import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const state = () => ({
  isAdmin: false,
  isQuestGiver: false,
  isParticipant: true,
  loadingState: false,
  currentUser: {
    AtQuest: '',
    Email: 'g.r.fisher.pl@gmail.com',
    OnTheMove: true,
    PatrolName: 'PatrolName1',
    QuestsVisited: {
      '12312RANDOM_ID': ['49.2966655° N', '19.9535503° E']
    },
    Score: 0
  }
})

export const mutations = {
  changeLoadingState(state, boolStatus) {
    state.loadingState = boolStatus
  },
}

export const actions = {
  register({ commit, dispatch }, payload) {
    commit('changeLoadingState', true)
    return firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        let uid = res.user.uid
        let newUserObject = {
          ...payload,
          uid
        }
        return dispatch('createTheAccount', newUserObject)
      })
      .catch(err => {
        console.log(err)
        commit('changeLoadingState', false)
        return false
      })
  }
}

// IDEA: this helper function resolves the collection choice (intended to be used more extensively upon game accounts creation at later stage)
function findAdequateCollection(accessLevel) {
  switch (accessLevel) {
    case 1:
      return 'GamePatrols'

    case 2:
      return 'QuestGivers'

    case 3:
      return 'Organisers'

    case 4:
      return 'Master'
  }
}