import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar ui segment">
       <form className="ui form"onSubmit ="">
         <div className="field">
         <label className="ui label" htmlFor="">Video Search</label>
         <input className="ui input" type="text"/>
         </div>
       </form>
      </div>
    )
  }
}

export default SearchBar
