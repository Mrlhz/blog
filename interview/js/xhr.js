/**
 * @description 简易实现Ajax
 */
function xhr(config = {}) {
  return new Promise((resolve, reject) => {
    let {
      url,
      method = 'get',
      async = true,
      data = null,
      responseType,
      timeout = 0,
      withCredentials = false
    } = config

    // 1
    const request = new XMLHttpRequest()

    // 2
    request.open(method, url, async)

    // 3
    configureRequest()

    // 4
    addEvents()

    // 5
    request.send(data)

    function configureRequest() {
      if (responseType) request.responseType = responseType
      if (timeout) request.timeout = timeout
      // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials
      if (withCredentials) request.withCredentials = withCredentials
    }

    function addEvents() {
      request.onreadystatechange = function () {
        if (request.readyState !== XMLHttpRequest.DONE) return
        if (request.status === 0) return
        // 304
        if (request.status >= 200 && request.status < 300) {
          let response = responseType === 'text' ? request.responseText : request.response
          try {
            response = JSON.parse(response)
          } catch (e) {
            // reject(e)
          }
          resolve(response)
        }
      }

      request.ontimeout = function handleTimeout() {
        reject(`Timeout of ${config.timeout} ms exceeded`)
      }

      request.onerror = function () {
        reject('Network Error')
      }
    }
  })
}

// xhr({ url: location.href }).then((res) => {
//   console.log(res)
// })

xhr({ url: 'https://api.github.com/orgs/axios'}).then((res) => {
  console.log(res)
})
