/**
 * @description 
 *
 * @param {*} data
 * @param {string} [split='.']
 * @returns
 */
function convertFlatToTree (data, split = '.') {

  return Object.keys(data).reduce((result, key) => {

    key.split(split).reduce((acc, cur, index, keys) => {
      acc[cur] = acc[cur] || {}
      if (index === keys.length - 1) {
        return acc[cur] = data[key]
      }
      return acc[cur]
    }, result)

    return result
  }, {})

}

module.exports = convertFlatToTree
