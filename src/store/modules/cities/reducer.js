const INITIAL_STATE = {
  data: [],
};

export default function cities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@cities/ADDCITY": {
      return {
        ...state,
        data: [...state.data, action.payload.city],
      };
    }
    case "@cities/REMOVECITY": {
      return {
        ...state,
        data: state.data.filter((city) => city.id != action.payload.id),
      };
    }
    default:
      return state;
  }
}
