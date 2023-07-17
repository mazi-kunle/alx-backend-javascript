export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  return map.forEach(
    (value, key) => (
      map.get(key) === 1 ? map.set(key, 100) : map.set(key, value)
    ),
  );
}
