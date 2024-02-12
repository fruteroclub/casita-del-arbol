export const truncateAddress = (address: string | undefined, start: number, end: number) => {
  if (!address) return "Could not format address...";
  return `${address.slice(0, start)}...${address.slice(0 - end)}`;
};
