// remove item in array by id
export function removeItemById(array, item) {
  const fetch = array.find((x) => x.id === item);
  const index = array.indexOf(fetch);
  array.splice(index, 1);
}
