import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault();


        this.props.onSearchSubmit(this.state.term);

    }

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
                    <label>Image Search:</label>
                    <input 
                        type="text" 
                        className="ui form" 
                        value={this.state.term}
                        onChange={(event) => this.setState({ term: event.target.value})}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;