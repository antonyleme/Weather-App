import { getMax, getMin } from "~/utils";
const INITIAL_STATE = {
  max: {},
  min: {},
};

export default function temperatures(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@temperatures/UPDATE": {
      const minArr = [];
      const maxArr = [];

      const { days } = action.payload;

      console.log(days);
      for (let i = 0; i < days.length; i++) {
        console.log(days[i]);
        let maxTemp = {
          temperature: days[i][1].manha
            ? getMax(days[i][1])
            : days[i][1].temp_max,
          local: days[i][1].manha
            ? days[i][1].manha.entidade
            : days[i][1].entidade,
        };
        let minTemp = {
          temperature: days[i][1].manha
            ? getMin(days[i][1])
            : days[i][1].temp_min,
          local: days[i][1].manha
            ? days[i][1].manha.entidade
            : days[i][1].entidade,
        };

        maxArr.push(maxTemp);
        minArr.push(minTemp);
      }

      console.log(maxArr, minArr);

      let maxTemp = state.max;
      let minTemp = state.min;
      for (let i = 0; i < maxArr.length; i++) {
        if (
          maxArr[i].temperature > maxTemp.temperature ||
          !maxTemp.temperature
        ) {
          maxTemp = maxArr[i];
        }
        if (
          minArr[i].temperature < minTemp.temperature ||
          !minTemp.temperature
        ) {
          minTemp = minArr[i];
        }
      }

      return {
        ...state,
        max: maxTemp,
        min: minTemp,
      };
    }
    default:
      return state;
  }
}
