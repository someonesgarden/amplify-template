import axios from 'axios'

export const login = () => {
  let params = {}
  params.backto = '/'
  axios
    .get('/api/spotify/auth/authorize_url', { params: params })
    .then(function (res) {
      window.location.href = res.data + '&show_dialog=true'
    })
}
