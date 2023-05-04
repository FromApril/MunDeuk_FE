export const getAmountWithComma = (amount: number) => {
  if (!amount) {
    return "";
  }

  return Number(amount).toLocaleString();
};
