import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  const { id, message, attention, date, tech } = log;

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red" : "blue"}-text`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id} </span>
          last updated by <span className="black-text">{tech} </span>
          on <Moment format="MMMM do YYYY, HH:mm:ss">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
