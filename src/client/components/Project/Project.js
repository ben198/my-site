import React, { Component, PropTypes } from 'react';

class Project extends Component {

    navigate() {
        return location.href = this.props.link;
    }

    render() {
        return (
            <div className="project">
                <img className="project-img" src={this.props.image}/>
                <div className="project-info">
                    <h3>{this.props.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.navigate.bind(this)}>
                        Have a look
                    </button>
                </div>
            </div>
        );
    }

}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Project;