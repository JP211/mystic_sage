import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'jewelry',
        imageURL: 'https://imgur.com/zYdMewx',
        id: 1
      },
      {
        title: 'candles',
        imageURL: 'https://imgur.com/2il5E0I',
        id: 2
      },
      {
        title: 'teas',
        imageURL: 'https://imgur.com/SXovNoU',
        id: 3
      },
      {
        title: 'crystals',
        imageURL: 'https://imgur.com/tvUdU5g',
        id: 4
      },
      {
        title: 'sage kits',
        imageURL: 'https://imgur.com/QirD53O',
        id: 5
      }]
    }
  }

  render() {
    return (
      <div className = 'directory-menu'>
        { this.state.sections.map(({title, imageURL, id}) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;
