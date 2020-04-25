import React from 'react';
import { Component } from 'react';

class Character extends Component {
    style = {
        border: "1px solid #00f",
    	width: "2%",
    	padding: "10px 15px",
    	fontWeight: "900",
    	background: "#0d234e"
    };
    render() {
        return (
            <div className="character">
				<p style={this.style} onClick={this.props.delete}>{this.props.character}</p>
			</div>
        );
    }
};
export default Character;