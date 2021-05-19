function switch_format_date(date_str, splitter="-", joiner="/") {
  const date_str_split = date_str.split(splitter);
  return [date_str_split[2], date_str_split[1], date_str_split[0]].join(joiner);
}

function format_date(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('/');
}