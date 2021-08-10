export function addTemperature(temperature) {
  return {
    type: "@temperatures/UPDATE",
    payload: { temperature },
  };
}
