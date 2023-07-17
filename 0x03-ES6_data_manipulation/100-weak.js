export const weakMap = new WeakMap();

export function queryAPI(val) {
  if (!(weakMap.has(val))) {
    weakMap.set(val, 0);
  }
  weakMap.set(val, weakMap.get(val) + 1);
  if (weakMap.get(val) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return weakMap.get(val);
}
