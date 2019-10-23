export const CALCULATION = 'CALCULATION';
export const CLEAR = 'CLEAR';

export const calculation = value =>{
	return{
		type : CALCULATION,
		value
	}
}

export const clearCalculation = value => {
  return {
    type: CLEAR,
    value
  }
};