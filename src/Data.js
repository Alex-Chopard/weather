import React from 'react'

class Search extends React.Component {
    state = {
        city: 'Paris'
    }

    render () {
        return (
            <div>
                <p>{this.state.city }</p>
                <label>
                    City: <input type="text" placeholder="City" value={this.state.city} onChange={
                        event => {
                            this.setState({
                                city: event.target.value
                            });
                        }
                    }/>
                </label>
                <button>submit</button>
            </div>
        );
    }
}

export default Search;