const plays = require('./data/plays.json')
const invoices = require('./data/invoices.json')
console.log(plays, invoices, invoices.performances)


function statement(invoice, plays) {
  let totalAmount = 0
  let volumeCredits = 0

  let result = `Statement for ${invoice.customer}\n`
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format
  for (let perf of invoice.performances) {
    const play = plays[perf.playID]
    let thisAmount = 0
    const type = play.type
    const audience = perf.audience
    const fn = calc[type]
    if (fn) {
      thisAmount = fn(audience)
    } else {
      throw new Error(`unknow type: ${type}`)
    }
    // add volumecredits
    volumeCredits += calcVolumeCredits(audience, type)

    // print line for this order
    result += ` ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`
    totalAmount += thisAmount
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`
  result += `You earned ${volumeCredits} credits\n`
  return result
}

const calc = {
  tragedy: function (audience) {
    let amount = 40000
    if (audience > 30) {
      amount += 1000 * (audience - 30)
    }
    return amount
  },
  comedy: function (audience) {
    let amount = 30000
    if (audience > 20) {
      amount += 10000 + 500 * (audience - 20)
    }
    amount += 300 * audience
    return amount
  },
  default: function () {

  }
}

function calcVolumeCredits(audience, playType) {
  let volumeCredits = 0
  // add volumecredits
  volumeCredits += Math.max(audience - 30, 0)
  // add extra for every ten comedy attendess
  if (playType === 'comedy') {
    volumeCredits += Math.floor(audience / 5)
  }
  console.log(volumeCredits)
  return volumeCredits
}


console.log(statement(invoices, plays))