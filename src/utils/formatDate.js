const formatDate = (receivedDate, reversed = false) => {
  const [year, month, day] = receivedDate.replaceAll("-", "/").split("/");
  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Avr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "Aou",
    9: "Sep",
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Avr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Aou",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  if (reversed) return `${month} ${months[year]} ${day}`;
  return `${day} ${months[month]} ${year}`;
};

export default formatDate;
