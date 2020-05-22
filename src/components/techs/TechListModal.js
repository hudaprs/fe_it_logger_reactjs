import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    try {
      const techs = await fetch("/techs");
      const data = await techs.json();

      setTechs(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

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

export default TechListModal;
