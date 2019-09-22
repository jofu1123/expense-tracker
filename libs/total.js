function total(records) {
  let count = 0

  for (let i = 0; i < records.length; i++) {
    count += Number(records[i].amount)
  }
  return count
}
module.exports = total