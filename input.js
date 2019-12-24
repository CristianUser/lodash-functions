const h = require('highland');

function parseJSON(string) {
  try {
    return JSON.parse(string)
  } catch (error) {
    return string;
  }
}

h(process.stdin)
  .map(m => m.toString())
  .map(parseJSON)
  .map(op => new h(op))
  .merge()
  .ratelimit(2, 5000)
  .each(sendEmail)

function sendEmail({ name, email, partner}) {
  console.log(
  `
  Sent to: ${email}.
  At: ${new Date().toISOString()}

  Hello ${name}!, your partner is ${partner}. We hope you enjoy it.


  `)
}