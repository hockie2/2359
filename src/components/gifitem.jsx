import React from 'react';
import style from '../style.module.scss';

class GifItem extends React.Component {


    constructor(){
        super();
        this.state = {
            favourited: false
        }
        this.liked = this.liked.bind(this);
    }


   liked(){
        const { favourited } = this.state;
        let { gif, favouriteList, addCount, minusCount, updateFavList } = this.props;
        let url = gif.images.downsized.url;

        if(!favourited){
            console.log('Liked!')

            this.setState({favourited:true});
            addCount();

            //update favourite list in giflist component
            favouriteList.push(url)
            updateFavList();
        }
        else{
            console.log('Unliked!')

            this.setState({favourited:false});
            minusCount();

            let index = favouriteList.indexOf(url);
            if (index !== -1){
                favouriteList.splice(index, 1)
            };

            // favouriteList = favouriteList.filter(e => e !== url)

            updateFavList();
        }
   }

  render() {

    const favourited = this.state.favourited? style.gifItem_wrapper_favourited : style.gifItem_wrapper_unfavourited;

    return (
            <div className={favourited}>
                <i className='bx bxs-heart'/>
                <img src={this.props.gif.images.downsized.url} alt='gif_item' id={this.key} className={style.gifItem} onClick={this.liked} />
            </div>
    );
  }

}


export default GifItem;