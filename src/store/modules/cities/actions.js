export function setCities(cities) {
  return {
    type: "@cities/SET",
    payload: { cities },
  };
}

export function getCities() {
  return {
    type: "@cities/GET_REQUESTED",
  };
}

export function addCity() {
  return {
    type: "@cities/ADD",
  };
}
