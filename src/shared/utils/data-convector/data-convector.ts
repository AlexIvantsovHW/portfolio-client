export const dataConvector = (date: string) => {
  const timestamp = Date.parse(date);

  if (!isNaN(timestamp)) {
    const d = new Date(timestamp);
    const current = new Date();

    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");

    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;

    return `${year}.${month}`;
  } else {
    return "incorrect date format!";
  }
};
