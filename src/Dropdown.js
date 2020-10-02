import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
	super(props);
	this.dropdown = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Icon")[0];
	this.content = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Content")[0];
	this.label = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Label")[0];
    }
    render() {
	if(this.props.mode === "hover") {
	    return React.cloneElement(
		this.dropdown,
		this.props,
		this.dropdown.props.children);
	} else if(this.props.mode === "expand") {
	    let folded = this.props.folded === "true";
	    return (<>
			<div className={"card_dropdown" + (folded ? " folded" : "")}>
			    <div className={"card_title_wrapper" + (folded ? " folded" : "")}>
				<div className={"card_title_mover" + (folded ? " folded" : "")}>
				    <p>
					{this.label}
				    </p>
				</div>
				<div className={"card_dropdown_mover" + (folded ? " folded" : "")}>
				    <div className={"card_dropdown_content_wrapper" + (folded ? " folded" : "")}>
					<div className={"card_dropdown_content" + (folded ? " folded" : "")}>
					    {this.content}
					</div>
				    </div>
				</div>
			    </div>
			    {React.cloneElement(
				this.dropdown,
				this.props,
				this.dropdown.props.children)}
			</div>
			<div className={"card_dropdown hack" + (folded ? " folded" : "")}>
			    <div className={"card_title_wrapper" + (folded ? " folded" : "")}>
				<div className={"card_title_mover honk" + (folded ? " folded" : "")}>
				    <p>
					{this.label}
				    </p>
				</div>
				<div className={"card_dropdown_mover" + (folded ? " folded" : "")}>
				    <div className={"card_dropdown_content_wrapper" + (folded ? " folded" : "")}>
					<div className={"card_dropdown_content" + (folded ? " folded" : "")}>
					    {this.content}
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </>
		   );
	}
    }
}

export default Dropdown;
