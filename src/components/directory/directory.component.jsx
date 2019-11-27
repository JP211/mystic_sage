import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'jewelry',
        imageURL: 'https://i.imgur.com/zYdMewx.jpg',
        id: 1
      },
      {
        title: 'candles',
        imageURL: 'https://i.imgur.com/2il5E0I.jpg',
        id: 2
      },
      {
        title: 'teas',
        imageURL: 'https://i.imgur.com/SXovNoU.jpg',
        id: 3
      },
      {
        title: 'crystals',
        imageURL: 'https://i.imgur.com/tvUdU5g.jpg',
        size: 'large',
        id: 4
      },
      {
        title: 'sage kits',
        imageURL: 'https://i.imgur.com/QirD53O.jpg',
        size: 'large',
        id: 5
      }]
    };
  }

  render() {
    return (
      <div className = 'directory-menu'>
        { this.state.sections.map(({title, imageURL, id, size}) => (
          <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
