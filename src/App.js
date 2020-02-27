import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search';
import GifList from './components/giflist';
import Favourite from './components/favourite';
import style from './style.module.scss';


class App extends React.Component {
   constructor() {
        super();
        this.state = {
            term: '',
            gifs: [],
            favCount: 0,
            gifsNum: 8
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.addCount = this.addCount.bind(this);
        this.minusCount = this.minusCount.bind(this);
        this.fetchMore = this.fetchMore.bind(this);
    }

    componentDidMount(){
        console.log('LOADED')
    }


    handleTermChange(term2) {
        let term = term2;
        let gifsNum = this.state.gifsNum;
        let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&limit=${gifsNum}`;

        this.setState({term: term})

        let promise = fetch(url)
        promise.then(res => res.json())
        .then(gifs => {
            this.setState({gifs: gifs.data})
        })
    };

    addCount(){
        let favCount = this.state.favCount
        favCount++
        this.setState({favCount})
    }

    minusCount(){
        let favCount = this.state.favCount
        favCount--
        this.setState({favCount})
    }

    fetchMore(){
        console.log('FETCH')
        let gifsNum = this.state.gifsNum
        let term = this.state.term
        let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&limit=${gifsNum}`;

        gifsNum = gifsNum + 8;

        let promise = fetch(url)
        promise.then(res => res.json())
        .then(gifs => {
            this.setState({gifs: gifs.data, gifsNum: gifsNum}, () => console.log(this.state.gifs))
        })
    }

    showFavourite(){


    }

  render() {
    const { term, key, gifs, favCount } = this.state;
    const { handleTermChange, addCount, minusCount, fetchMore } = this;
    const fetchMoreButton = gifs.length > 0 ? <button className={style.fetch} onClick={fetchMore}> Fetch more </button> : null

    return (
      <div className={style.app_wrapper}>
        <Favourite favCount={favCount} />
        <Search onTermChange={handleTermChange} term={term}/>
        <GifList
            key = {key}
            gifs = {gifs}
            favCount = {favCount}
            addCount = {addCount}
            minusCount = {minusCount}
        />
        {fetchMoreButton}
        <div className={style.footer}>
            <div>Gallereasy POC web app</div>
            <div>2359 Media</div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
