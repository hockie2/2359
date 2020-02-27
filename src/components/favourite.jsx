import React from 'react';
import style from '../style.module.scss';

class Favourite extends React.Component {


  render() {

        const { favCount } = this.props;

    return (
        <div className={style.top_wrapper}>
            <div className={style.gallereasy}>Galler<span>easy</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;Favourite&nbsp;({favCount})</div>
        </div>
    );
  }

}


export default Favourite;