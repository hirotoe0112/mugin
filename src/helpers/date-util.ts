/**
 * Dateをyyyy-mm-dd形式に変換
 */
export const dateToIsoString = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
