export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_COMMENT': {
    const {name, alias, comment, timeOpen, id} = action;
    let newState = Object.assign({}, state, {
      [id] : {
        name: name,
        alias: alias,
        comment: comment,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  }
  default:
    return state;
  }
};
