import commentListReducer from './../../src/reducers/comment-list-reducer';

describe('commentListReducer', () => {
  let action;
  const sampleCommentData = {
    name: 'Klarky Cent',
    alias: 'Supermane',
    comment: 'Spoderman sux',
    timeOpen: 1500000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(commentListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new comment data to masterCommentList', () => {
    const {name, alias, comment, timeOpen, id} = sampleCommentData;
    action = {
      type: 'ADD_COMMENT',
      name: name,
      alias: alias,
      comment: comment,
      timeOpen: timeOpen,
      id: id
    };
    expect(commentListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        alias: alias,
        comment: comment,
        timeOpen: timeOpen,
        id: id
      }
    });
  });
});
