import React, { PropTypes } from 'react';

const Project = (props) => {
  const navigate = () => location.href = props.link;

  return (
    <div className="project">
      <img className="project-img" src={props.image} alt="screen shot" />
      <div className="project-info">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button className="btn btn-primary" type="button" onClick={navigate}>Have a look</button>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
