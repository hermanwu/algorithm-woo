import React, { Component } from 'react';
import ImageList from './ImageList';
import GiphyDetails from './GiphyDetails';
import './GiphyApp.scss';

class GiphyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearchButtonDisabled: true,
            images: [],
            searchText: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value});

        !!event.target.value ?
            this.setState({isSearchButtonDisabled: false}) :
                this.setState({isSearchButtonDisabled: true});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({images: []});
        this.setState({isSearchButtonDisabled: true});

        const searchInput = this.state.searchText.replace(/ /g, '+');
        const queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' +
                            searchInput + '&api_key=dc6zaTOxFJmzC';

        fetch(queryUrl)
            .then(resp => resp.json())
            .then((respJson) => {
                if (respJson.data.length === 0) {
                    this.setState({images: []});
                    alert("No result, try a different word");
                } else {
                    this.setState({images: respJson.data.slice()});
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
                <h1>Search below to the wonderful world of Gifs</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           className="text-input"
                           value={this.state.searchText}
                           onChange={this.handleChange} />
                    <input type="submit"
                           className="btn"
                           value="Search"
                           disabled={this.state.isSearchButtonDisabled} />
                </form>

                {
                    this.state.images.length > 0 &&
                        <div>
                            <GiphyDetails details={this.state.images[0]}/>
                            <ImageList images={this.state.images}/>
                        </div>
                }

            </div>
        )
    }
}

export default GiphyApp;
