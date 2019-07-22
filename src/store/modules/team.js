import axios from '@/api/fetch'
import {getMyTeam,tabTeam} from '@/api/api'
const team = {
  state: {
    currentTeam: '',
    teamName: '',
    teamAvatar: '',
    teamList: '',
  },

  mutations: {
    SET_CURRENTTEAM: (state, currentTeam) => {
      state.currentTeam = currentTeam
    },
    SET_TTEAMNAME: (state, teamName) => {
      state.teamName = teamName
    },
    SET_TTEAMAVATAR: (state, teamAvatar) => {
      state.teamAvatar = teamAvatar
    },
    SET_TEAMLIST: (state, teamList) => {
      state.teamList = teamList
    },
  },

  actions: {
    getTeamList({commit, state}){
      axios({
        url: getMyTeam,
        method: "get",
      }).then(res => {
        // console.log(res)
        commit('SET_TEAMLIST',res.data.content)
      }).catch(error => {
        console.log(error.response)
      })
    },
    //切换团队
    switchoverTeam({dispatch,commit, state},id){
      axios({
        url:tabTeam+'/'+id,
        method:"put",
      }).then(res=>{
        console.log(res)
        if (res.data.code===1){
          dispatch('getUserInfo')
        }
      }).catch(error =>{
        console.log(error)
      })
    }
  }
}

export default team
