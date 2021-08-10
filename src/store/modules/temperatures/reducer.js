const INITIAL_STATE = {
  max: {},
  min: {},
};

export default function temperatures(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@temperatures/UPDATE": {
      return {
        ...state,
        data: [
          ...state.data.filter(
            (temperature) =>
              temperature.cityId != action.payload.temperature.cityId
          ),
          action.payload.temperature,
        ],
      };
    }
    default:
      return state;
  }
}
