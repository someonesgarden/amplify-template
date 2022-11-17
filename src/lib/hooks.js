import axios from 'axios'
import moment from 'moment'

export const login = (mode = 'location') => {
  if (mode === 'popup') {
    window.open('/popup', 'LOGIN', 'width=380,height=620')
  } else if (mode === 'location' || mode === 'from_popup') {
    let params = { backto: mode === 'location' ? '/' : '/popup_result' }
    axios
      .get('/api/spotify/auth/authorize_url', { params })
      .then(function (res) {
        window.location.href = res.data + '&show_dialog=true'
      })
  }
}

export const checkExpire = (expires_time) => {
  //console.log("\u001b[31m diff", (parseInt(expires_time) - moment(new Date()).unix()*1000)/3600000);
  return (
    !!expires_time && parseInt(expires_time) > moment(new Date()).unix() * 1000
  )
}
