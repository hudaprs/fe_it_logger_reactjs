import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import { getLogs } from "../../actions/logActions";

const Logs = (props) => {
  const { log, getLogs } = props;
  const { logs, loading } = log;

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) return <PreLoader />;

  return (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>

        {!loading &&
          logs.length !== 0 &&
          logs.map((log) => <LogItem key={log.id} log={log} />)}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getLogs })(Logs);
