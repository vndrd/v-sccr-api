import axios from 'axios'
const state = {
    leagues:[],
    singleLeague: []
}
const getters = {
    getLeagues: (state) => state.leagues,
    getSingleLeague: (state) => state.singleLeague
}
const actions = {
    fetchLeagues: async function({commit}){
        const leagues = await axios({
            url: 'competitions',        
            
        }).then((response) => 
            response.data.competitions
        )
        commit('setLeagues',leagues)
    },
    fetchSingleLeague: async function({commit}){
        const league = await axios.get({
            url: 'http://footballdb.herokuapp.com/api/event/en.2013_14/round/4?callback=handleGames',        
        }).then(response => {
            console.log("2nd leagueaaa")
            console.log(response.data)
        }).catch( error => {
            console.log("ups error")
            console.log(error)
        })
        console.log("commit ")
        console.log({commit , league})
    }
}
const mutations = {
    setLeagues: (state,leagues) => state.leagues = leagues
}

export default {
    state,
    getters,
    actions,
    mutations
}