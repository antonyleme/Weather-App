export function updateTemperatures(days) {
  return {
    type: "@temperatures/UPDATE",
    payload: { days },
  };
}
