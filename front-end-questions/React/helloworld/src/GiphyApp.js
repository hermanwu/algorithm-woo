import React, { Component } from 'react';
import './GiphyApp.scss';
import './ImageList';

class GiphyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearchButtonDisabled: true,
            searchText: "",
            searchResult: [],
            imgUrl: "",
            images: [],
        }
    }

    handleChange = (event) => {
        this.setState({ searchText: event.target.value});

        !!event.target.value ?
            this.setState({isSearchButtonDisabled: false}) :
                this.setState({isSearchButtonDisabled: true});
    }

    searchGiphy = (event) => {
        event.preventDefault();

        this.setState({isSearchButtonDisabled: true});

        const searchInput = this.state.searchText.replace(/ /g, "+");
        const queryUrl = "http://api.giphy.com/v1/gifs/search?q=" +
                            searchInput + "&api_key=dc6zaTOxFJmzC";

        fetch(queryUrl)
            .then(resp => resp.json())
            .then((respJson) => {
                console.log(respJson);
                if (respJson.data.length > 0) {
                    this.setState({imgUrl: respJson.data[0].images.fixed_height.url});
                    this.setState({images: respJson.data});
                }

                this.setState({isSearchButtonDisabled: false});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="giphy-app">
                <p>Search below to the wonderful world of Gifs</p>

                <form onSubmit={this.searchGiphy}>
                    <input type="text"
                               value={this.state.searchText}
                               onChange={this.handleChange} />
                    <input type="submit"
                           value="Search"
                           disabled={this.state.isSearchButtonDisabled} />
                </form>

                <div className="card">
                    <img src={this.state.imgUrl}
                         alt="gigphy search result"/>
                </div>
            </div>
        )
    }
}

export default GiphyApp;
