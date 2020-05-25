import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";
import TechItem from "./TechItem";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>

        <div className="collection">
          {!loading &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
