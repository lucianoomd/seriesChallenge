import API from './API'

export default class LoginService extends API {
  /*
    ============================================================
    ======================= Local data =========================
    ============================================================
  */
  async savePinLocally(pin: string) {
    const result = await this.localStorageSet('@pin', pin)
    return result
  }

  async getPinLocally() {
    return await this.localStorageGet('@pin')
  }

  async validatePin(pin) {
    const response = { data: false, error: '' }
    if (pin === '111111') response.data = true
    return response
  }
}

