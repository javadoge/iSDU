var termBegin = { month: 8, date: 11 }//开学第一周第一天
function getWeek_day() {//获取当前周、星期
  var current = {};//当前时间
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var date = now.getDate()
  var day = now.getDay()
  var month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    month_days[1] = 29
  current.day = day;
  if (day == 0)
    current.day = 7;
  var days = date - termBegin.date;
  if (termBegin.month > month || termBegin.month == month && days < 0)//当前在暑假则判为第一周第一天
    current = { week: 0, day: 1 };
  else {
    for (let m = termBegin.month; m < month; m++)
      days += month_days[m];
    current.week = Math.floor(days / 7)
  }
  return current;
}
function wd_toDate(week, day) {//将周、星期转化成日期
  var date = new Date(2017, termBegin.month, termBegin.date);
  date.setDate(week * 7 + day - 1 + termBegin.date)
  return date;
}
function getClasstime() {//当前是否夏令时
  var now = new Date();
  var month = now.getMonth();
  return month >= 4 && month <= 8;
}
module.exports = {
  getWeek_day: getWeek_day,
  wd_toDate: wd_toDate,
  getClasstime: getClasstime
}