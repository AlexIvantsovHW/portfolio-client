export const dataConvector = (date: string) => {
  const timestamp = Date.parse(date);

  if (!isNaN(timestamp)) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    return `${year}.${month}`;
  } else {
    return "incorrect date format!";
  }
};
