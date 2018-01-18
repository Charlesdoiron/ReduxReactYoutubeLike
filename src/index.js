import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
const API_KEY = "AIzaSyC8vG4FmdukMdSNAc7EHoov6FcZYZgcL2E"



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        //Par défaut à l'affichage 
        this.videoSearch('ReactJs')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term : term },
            videos => this.setState({
                videos,
                selectedVideo: videos[0]
            })
        );
    }

    render() {
      //Pour lancer la fun toutes les 0.3s on utilise lodash
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return ( 
        	<div>
        	<SearchBar 
        		onSearchTermChange={videoSearch}/>
            <VideoDetails 
            video = { this.state.selectedVideo }/> 
            <VideoList 
            onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) } 
            videos = { this.state.videos }/>
          </div>
        )
    }
}

ReactDOM.render( <App /> , document.querySelector('.container'))