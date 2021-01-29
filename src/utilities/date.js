// eslint-disable-next-line import/prefer-default-export
export const addDays = (date, days) => {
  const res = new Date(Number(date));
  res.setDate(res.getDate() + days);
  return res;
};
