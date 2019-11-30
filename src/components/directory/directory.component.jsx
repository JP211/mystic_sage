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
      }]
    };
  }

  render() {
    return (
      <div className = 'directory-menu'>
        { this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
