/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  delay=2000
): (...args: Params) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
