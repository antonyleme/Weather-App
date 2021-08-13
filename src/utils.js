const getMax = (day) => {
  const maxArr = [day.manha.temp_max, day.tarde.temp_max, day.noite.temp_max];

  let max = maxArr[0];
  for (let i = 0; i < maxArr.length; i++) {
    if (maxArr[i] > max) max = maxArr[i];
  }

  return max;
};

const getMin = (day) => {
  const minArr = [day.manha.temp_min, day.tarde.temp_min, day.noite.temp_min];

  let min = minArr[0];
  for (let i = 0; i < minArr.length; i++) {
    if (minArr[i] < min) min = minArr[i];
  }

  return min;
};

export { getMax, getMin };
