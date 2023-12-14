/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-this-alias */

export default function debounce(
  loadData: () => void,
  debounceTimeout: number,
) {
  let timeOut: NodeJS.Timeout | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    // @ts-ignore
    const context = this;
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      loadData.apply(context, args);
      timeOut = null;
    }, debounceTimeout);
  };
}
