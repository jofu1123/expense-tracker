function categoryToCh(category) {
  const categoryArr = [
    {
      "en": "home",
      "ch": "家居物業"
    },
    {
      "en": "shuttle-van",
      "ch": "交通出行"
    },
    {
      "en": "grin-beam",
      "ch": "休閒娛樂"
    },
    {
      "en": "utensils",
      "ch": "餐飲食品"
    },
    {
      "en": "pen",
      "ch": "其他",
    }
  ]

  let newCategory = categoryArr.map((item) => {
    if (item.en === category) {
      item.isSelected = true
    }
    return item
  })
  return newCategory

}
module.exports = categoryToCh