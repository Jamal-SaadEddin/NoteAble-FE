export default function formatDate(dateString) {
  const parts = dateString.split("/");
  const day = parts[0].padStart(2, "0"); // Pads the day with a zero if it is only one digit
  const month = parts[1].padStart(2, "0"); // Pads the month with a zero if it is only one digit
  const year = parts[2];

  // Format the date as 'yyyy-mm-dd'
  return `${year}-${month}-${day}`;
}
