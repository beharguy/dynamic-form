export function set(item = {}, path = [], newValue) {
  if (path.length === 0) return undefined;

  if (path.length === 1) {
    return {
      ...item,
      [path[0]]: newValue
    };
  }

  return {
    ...item,
    [path[0]]: set(item[path[0]], path.slice(1), newValue)
  };
}