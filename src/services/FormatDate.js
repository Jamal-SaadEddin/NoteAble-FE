export default function formatDate(dateString, dateType) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0"); // Pad with zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed, add 1
  const year = date.getFullYear();

  if (dateType === "/") return `${day}/${month}/${year}`;
  if (dateType === "-") return `${year}-${month}-${day}`;
}
