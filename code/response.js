
const responseData = [
  {
    data: {
      data: {
        returnFlag: 'S',
        returnMsg: ''
      },
      firstError: '',
      status: 'success'
    },
    status: 200
  },
  {
    data: {
      data: {
        returnFlag: 'E',
        returnMsg: 'error1'
      },
      errors: [],
      firstError: '',
      status: 'fail'
    },
    status: 200
  },
  {
    data: {
      data: null,
      firstError: 'error2',
      status: 'fail'
    },
    status: 200
  }
]


function response({ data: res }) {
  const { data, status, firstError } = res
  if (status === 'success' && data && data.returnFlag === 'S') {
    console.log('post success')
  } else {
    console.log( firstError ? firstError : data.returnMsg || 'something error')
  }
}


response(responseData[0])
response(responseData[1])
response(responseData[2])