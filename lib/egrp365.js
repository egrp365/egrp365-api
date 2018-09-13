const axios = require('axios'),
  HTTP = axios.create({
  baseURL: 'https://egrp365.ru',
  timeout: 10000,
  headers: {'User-Agent': 'Nodejs Egrp365 Api module'},
})

let egrp365 = function (apiKey) {
  this.apiKey = apiKey
}

egrp365.prototype.send = async function (method, apiMethod, params) {
  try {
    let response, options = {
      params: Object.assign({}, params, {
        apiKey: this.apiKey,
      }),
    }

    let url = '/api/v2/' + apiMethod
    switch (method) {
      case 'POST':
        response = await HTTP.post(url, options)
        break
      case 'GET':
      default:
        response = await HTTP.get(url, options)
    }

    return response.data
  } catch (error) {
    return error
  }
}

egrp365.prototype.getDocs = function () {
  return this.send('GET', 'getDocs')
}

egrp365.prototype.getObjectsByKadnum = function (params) {
  return this.send('GET', 'getObjectsByKadnum', params)
}

egrp365.prototype.getObjectsByAddress = function (params) {
  return this.send('GET', 'getObjectsByAddress', params)
}

egrp365.prototype.getInfoByObjectId = function (params) {
  return this.send('GET', 'getInfoByObjectId', params)
}

egrp365.prototype.postOrder = function (params) {
  return this.send('POST', 'postOrder', params)
}

egrp365.prototype.getOrderStatus = function (params) {
  return this.send('POST', 'getOrderStatus', params)
}

module.exports = egrp365
