import React from 'react';
import style from '../style.module.scss';
import GifItem from './gifitem';


class GifList extends React.Component {


    constructor(){
        super();
        this.state = {
            favouriteList:[],
            favBoxVisibility: true
        }
        this.updateFavList = this.updateFavList.bind(this)
    }

    updateFavList(){
        let favouriteList = this.state.favouriteList
        this.setState({ favouriteList:favouriteList})
        console.log(favouriteList)
    }


  render() {
        const { favouriteList } = this.state;
        const { gifs, favCount, addCount, minusCount } = this.props;
        const { updateFavList } = this;

        const gifItems = gifs.map(image => {
            return (
                <GifItem
                    key = {image.id}
                    gif = {image}
                    favCount = {favCount}
                    addCount = {addCount}
                    minusCount = {minusCount}
                    favouriteList = {favouriteList}
                    updateFavList = {updateFavList}
                />
            )
        });

        const favBox = favouriteList.map( favItem => {
            return (
                    <img src = {favItem} className={style.favImage}/>
            )
        })

        const favBoxVisibility = this.state.favBoxVisibility ? style.favBox : style.favBox_hidden

        return (
            <div className={style.gifList_wrapper}>
                {gifItems}
                <div className={favBoxVisibility}>
                    <box-icon name='x-circle' onClick={e => this.setState({favBoxVisibility: false})}/>
                    {favBox}
                </div>
            </div>
        );

    }
}

export default GifList;
