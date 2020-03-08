import React from 'react';
import style from '../style.module.scss';

class Search extends React.Component {

      constructor() {
        super();
        this.state = {
            term: ''
        }
    }

  render() {

    return (
            <input type="search" className={style.search} onChange={e => this.props.onTermChange(e.target.value)} />
    );
  }
}

export default Search;
