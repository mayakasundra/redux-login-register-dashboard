import { authEndPoint } from '../../../api/api-end-point'
import commonAPI from '../../../api/common'

class authService {
  post(endPoint, data) {
    // https://real-pear-fly-kilt.cyclic.app/accounts/authenticate
    return commonAPI.post(`/${authEndPoint}/${endPoint}`, data)
  }
}

export default new authService()
