import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input className='search-box' 
                       type="search" 
                       placeholder={this.props.placeHolder} 
                       onChange={this.props.onSearchHandler} />
            </div>
        )
    }
}
export default SearchBox