import React, { Fragment, useState, useEffect } from "react";
import LogItem from "./LogItem";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);

    const logs = await fetch("/logs");
    const data = await logs.json();

    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ul className="collection-with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>

        {!loading && logs.length === 0 ? (
          <p className="center">No Logs Found</p>
        ) : (
          logs.map((log) => <li key={log.id}>{log.message}</li>)
        )}
      </ul>
    </Fragment>
  );
};

export default Logs;
