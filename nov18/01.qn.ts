export function formatter(date: Date, stringFormatter: string): string {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  let result = "";
  let df = [];
  let sym = "";
  const [dateFormatter, timeFormatter] = stringFormatter.split(",");
  if (dateFormatter.includes("-")) df = dateFormatter.split("-");
  else df = dateFormatter.split("/");
  const tf = timeFormatter.trim().split(":");

  for (let i = 0; i < df.length; i++) {
    if (df[i] === "YYYY") result += year;
    else if (df[i] === "YY") result += year.toString().slice(2, 4);
    else if (df[i] === "MM") result += (month + 1).toString().padStart(2, "0");
    else if (df[i] === "M") result += month + 1;
    else if (df[i] === "DD") result += day.toString().padStart(2, "0");
    else if (df[i] === "D") result += day;
    if (i !== df.length - 1 && dateFormatter.includes("/")) result += "/";
    else if (i !== df.length - 1 && dateFormatter.includes("-")) result += "-";
  }
  result += ", ";
  for (let i = 0; i < tf.length; i++) {
    if (tf[i] === "HH") result += hour.toString().padStart(2, "0");
    else if (tf[i] === "H") result += hour;
    else if (tf[i] === "hh") {
      if (hour > 12) result += (hour - 12).toString().padStart(2, "0");
      else result += hour.toString().padStart(2, "0");
    } else if (tf[i] === "h") {
      if (hour > 12) result += hour - 12;
      else result += hour;
    } else if (tf[i] === "m") result += min;
    else if (tf[i] === "mm") result += min.toString().padStart(2, "0");
    else if (tf[i] === "ss") result += sec.toString().padStart(2, "0");
    else if (tf[i] === "s") result += sec;
    if (i !== tf.length - 1) result += ":";
  }
  return sym ? result + sym : result;
}
