import c from './../constants';

export default (state = {}, action) => {
let newState;
 const { squares, xIsNext } = action;

    switch (action.type) {
    case c.RENDER_SQUARES:
    newState = Object.assign({}, state, {
        [id]: {
         squares: squares,
         xIsNext: xIsNext,
         id: id
        }
       });
       return newState;
    
    // case c.CHANGE_PLAYER:
    // const changePlayer = Object.assign({}, squares[id], {xIsNext});
    // newState=Object.assign({}, state, {
    // [id]: changePlayer
    // });
    // return newState;
    
    // default:
    //  return state;
    // }
   };