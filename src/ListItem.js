import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class ListItem extends Component {
  render() {
    const classes = ["list-item", this.props.classes].join(" ");
    const imageClasses = [
      "list-item-image text-muted",
      this.props.imageClasses,
    ].join(" ");

    return (
      <div className={classes} onClick={this.props.onClick}>
        {this.props.icon && (
          <FontAwesomeIcon className={imageClasses} icon={this.props.icon} />
        )}
        <div className="list-item-content">
          <div className={"list-item-title " + this.props.titleClasses}>
            {this.props.title}
          </div>
          {this.props.description && (
            <div className="list-item-description">
              {this.props.description}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ListItem;
