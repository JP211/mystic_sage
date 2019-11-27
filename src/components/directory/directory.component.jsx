import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'JEWELRY',
        imageURL: 'https://i.imgur.com/zYdMewx.jpg',
        id: 1
      },
      {
        title: 'CANDLES',
        imageURL: 'https://i.imgur.com/2il5E0I.jpg',
        id: 2
      },
      {
        title: 'TEAS',
        imageURL: 'https://i.imgur.com/SXovNoU.jpg',
        id: 3
      },
      {
        title: 'CRYSTALS',
        imageURL: 'https://i.imgur.com/tvUdU5g.jpg',
        id: 4
      },
      {
        title: 'SAGE KITS',
        imageURL: 'https://i.imgur.com/QirD53O.jpg',
        id: 5
      }]
    };
  }

  render() {
    return (
      <div className = 'directory-menu'>
        { this.state.sections.map(({title, imageURL, id}) => (
          <MenuItem key={id} title={title} imageURL={imageURL} />
        ))}
      </div>
    );
  }
}

export default Directory;
