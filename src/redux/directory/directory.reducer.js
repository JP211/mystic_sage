const INITIAL_STATE = {
    sections: [
    {
      title: 'jewelry',
      imageURL: 'https://i.imgur.com/zYdMewx.jpg',
      id: 1,
      linkURL: 'jewelry'
    },
    {
      title: 'candles',
      imageURL: 'https://i.imgur.com/2il5E0I.jpg',
      id: 2,
      linkURL: ''
    },
    {
      title: 'teas',
      imageURL: 'https://i.imgur.com/SXovNoU.jpg',
      id: 3,
      linkURL: ''
    },
    {
      title: 'crystals',
      imageURL: 'https://i.imgur.com/tvUdU5g.jpg',
      size: 'large',
      id: 4,
      linkURL: ''
    },
    {
      title: 'sage kits',
      imageURL: 'https://i.imgur.com/QirD53O.jpg',
      size: 'large',
      id: 5,
      linkURL: ''
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
