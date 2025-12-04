// renvoie un tableau de sous-tableaux de max size
export function chunk(arr, size = 25) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}