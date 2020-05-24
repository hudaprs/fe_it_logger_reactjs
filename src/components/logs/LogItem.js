import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { id, message, attention, date, tech } = log;

  const onDelete = (e) => {
    e.preventDefault();

    deleteLog(id);

    M.toast({ html: "Log Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red" : "blue"}-text`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id} </span>
          last updated by <span className="black-text">{tech} </span>
          on <Moment format="MMMM do YYYY, HH:mm:ss">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
