const { toNum } = require("./toNum")

const sub = (a, b) => toNum(a) - toNum(b)

module.exports = {sub}