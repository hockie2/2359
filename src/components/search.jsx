import React from 'react';
import style from '../style.module.scss';

class Search extends React.Component {

      constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    // onInputChange(term) {
    //     this.setState({term});
    //     this.props.onTermChange(term);
    // }


  render() {

    return (
            <input type="search" className={style.search} onChange={event => this.props.onTermChange(event.target.value)} />
    );
  }
}

export default Search;
