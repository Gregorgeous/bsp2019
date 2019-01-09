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

export const mutations = {}

export const actions = {}
