import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  const { firstName, lastName } = tech;

  return (
    <ul className="collection-item">
      <li>
        <a href="#!">
          {firstName} {lastName}
        </a>
        <div className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </div>
      </li>
    </ul>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
