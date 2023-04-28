import { authEndPoint } from '../../../api/api-end-point'
import commonAPI from '../../../api/common'

class dashboardService {
  get() {
    // https://real-pear-fly-kilt.cyclic.app/accounts
    return commonAPI.get(`/${authEndPoint}`)
  }
}



export default new dashboardService()
