function categoryToCh(category) {
  switch (category) {
    case "home":
      return "家居物業";
      break;
    case "shuttle-van":
      return "交通出行";
      break;
    case "grin-beam":
      return "休閒娛樂";
      break;
    case "utensils":
      return "餐飲食品";
      break;
    case "pen":
      return "其他";
      break;
    default:
      console.log('err')
  }
}
module.exports = categoryToCh