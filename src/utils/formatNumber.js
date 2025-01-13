const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    useGrouping: true,
    minimumFractionDigits: 0, // Optional: Number of decimal places
    maximumFractionDigits: 2, // Optional: Number of decimal places
  })
    .format(number)
    .replace(/,/g, " ");
};
export default formatNumber;
