export function addCity(city) {
  return {
    type: "@cities/ADDCITY",
    payload: { city },
  };
}

export function removeCity(id) {
  return {
    type: "@cities/REMOVECITY",
    payload: { id },
  };
}
