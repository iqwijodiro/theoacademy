export const state = () => ({
  urlPublicAPI: process.env.SEGO_API_PUBLIC,
  urlAPI: process.env.SEGO_API,
  course: {},
  division: {},
  client: process.env.CLIENT // '6049278bc32f0d0015e108e9' // process.env.CLIENT
})

export const mutations = {
  setCourse (state, obj) {
    state.course = obj
  },
  setProgram (state, obj) {
    state.division = obj
  }
}