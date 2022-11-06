function getPercent(percent, number) {
  if(percent < 1 || percent > 100) {
    console.log("Данные не верны, введите проценты от 1 до 100 включительно")
  } else if(number < 1 || number > 1000) {
       console.log("Данные не верны, введите число от 1 до 1000 включительно")
  } else {
        return(percent / 100 * number)
}}
module.exports = getPercent;
