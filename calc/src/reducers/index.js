 const CALCULATION = 'CALCULATION';
 const CLEAR = 'CLEAR';

const initialState = {
  calculationArray: [],
  result: 0
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATION:
      return {
        result: eval(action.value),
        calculationArray: [...state.calculationArray,action.value],
      };
    case CLEAR:
      return {
        result: 0,
      	calculationArray: [...state.calculationArray,action.value],
      };
    default:
      return state;
  }
};

export default calcReducer;