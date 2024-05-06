export const formatCurrency = (
  amount: number | string,
  currencyType: string = "NGN",
  localeArg: string = "en-NG"
) => {
  const formattedAmount = amount.toLocaleString(localeArg, {
    style: "currency",
    currency: currencyType,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedAmount;
};
