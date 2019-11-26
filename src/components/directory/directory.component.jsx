import React from 'react';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'jewelry',
        imageURL: 'URL',
        id: 1
      },
      {
        title: 'candles',
        imageURL: 'URL',
        id: 2
      },
      {
        title: 'teas',
        imageURL: 'URL',
        id: 3
      },
      {
        title: 'crystals',
        imageURL: 'URL',
        id: 4
      },
      {
        title: 'sage kits',
        imageURL: 'URL',
        id: 5
      }]
    }
  }
}
