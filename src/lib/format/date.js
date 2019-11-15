export default function () {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
}
