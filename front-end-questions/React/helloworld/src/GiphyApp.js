import React, { Component } from 'react';
import './GiphyApp.css';

class GiphyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            searchResult: [],
            imgUrl: "",
        }
    }

    handleChange = (e) => {
        this.setState({ searchText: e.target.value});
    }

    searchGiphy = () => {
        const searchInput = this.state.searchText.replace(/ /g, "+");
        const queryUrl = "http://api.giphy.com/v1/gifs/search?q=" +
                            searchInput + "&api_key=dc6zaTOxFJmzC";
        fetch(queryUrl)
            .then(resp => resp.json())
            .then((respJson) => {
                console.log(respJson);
                this.setState({imgUrl: respJson.data[0].images.fixed_height.url});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <label>
                    Name:
                    <input type="text" value={this.state.searchText} onChange={this.handleChange} />
                </label>
                <button onClick={this.searchGiphy}>Search</button>
                <img src={this.state.imgUrl}
                     alt="gigphy search result"/>
            </div>
        )
    }
}

export default GiphyApp;
