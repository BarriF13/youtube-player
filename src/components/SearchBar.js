import React, { Component } from 'react'

export class SearchBar extends Component {

  state = { userInput: '' };

  onInputChange = (e) => {

    this.setState({ userInput: e.target.value })
  };

  onFormSubmit=(e)=>{
    e.preventDefault();

   //we call call back from parent component 

  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="ui label" htmlFor="">Video Search</label>
            <input className="ui input" type="text" value={this.state.userInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
