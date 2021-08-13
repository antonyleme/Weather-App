const INITIAL_STATE = {
  data: [],
  isLoading: true,
  error: null,
};

export default function cities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@cities/SET": {
      return {
        ...state,
        data: action.payload.cities,
        isLoading: false,
      };
    }
    case "@cities/ADD": {
      return {
        ...state,
        data: [...state.cities, action.city],
      };
    }
    case "@cities/GET_REQUESTED": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "@cities/GET_SUCCESS": {
      return {
        ...state,
        data: action.cities,
        isLoading: false,
      };
    }
    case "@cities/GET_FAILED": {
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    }
    default:
      return state;
  }
}
