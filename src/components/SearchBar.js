import React from 'react'
import '../index.css';
class SearchBar extends React.Component {

    state = { term: '' };
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className='search-bar'>
                <div className="ui segment">
                    <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                        <div className="field">
                        <label>React Image App</label>
                            
                            <label className="label" htmlFor="query"> 
                                {" "}
                                📷
                                </label>
                            <input type="text" name="search"
                            placeholder={`Try "dog" or "apple"`}
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}  />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
