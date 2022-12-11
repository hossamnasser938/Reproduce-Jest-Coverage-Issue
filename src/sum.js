const { toNum } = require("./toNum")

const sum = (a, b) => toNum(a) + toNum(b)

module.exports = {sum}