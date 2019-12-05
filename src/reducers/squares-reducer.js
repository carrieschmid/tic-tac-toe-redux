import c from './../constants';

export default (state = {}, action) => {
let newState;
 const { squares, xIsNext } = action;

    switch (action.type) {
    case c.RENDER_SQUARES:
    newState = Object.assign({}, state, {
        
         squares: squares,
         xIsNext: xIsNext,
         
        
       });
       return newState;
    
    
    default:
    return state;
    }
   };