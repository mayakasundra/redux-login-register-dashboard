import { authEndPoint } from '../../../api/api-end-point'
import commonAPI from '../../../api/common'

class registerService {
  post(endPoint, data) {
    
    return commonAPI.post(`/${authEndPoint}/${endPoint}`, data)
  }
}

export default new registerService()
