import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const { firstName, lastName, id } = tech;

  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: "Tech deleted" });
  };

  return (
    <ul className="collection-item">
      <li>
        <a href="#!">
          {firstName} {lastName}
        </a>
        <div className="secondary-content">
          <i
            className="material-icons grey-text"
            onClick={onDelete}
            style={{ cursor: "pointer" }}
          >
            delete
          </i>
        </div>
      </li>
    </ul>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
