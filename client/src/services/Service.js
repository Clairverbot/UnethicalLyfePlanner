import Api from '@/services/Api'

export default {
  fetchPosts (s) {
    return Api().get(s)
  },

  addPost (s,params) {
    return Api().post(s, params)
  }
}
