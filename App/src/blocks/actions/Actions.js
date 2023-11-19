import React from "react";

const Actions = () => {
  return (
    <div className="d-flex align-items-center" style={{ backgroundColor: "#30b6c0" }}>
      <div className="links">
        <div className="links-items">
          <div className="links-item">
            <a
              className="btn btn-lg btn-link border-0 p-0 "
              href={process.env.PUBLIC_URL + "/contacts"}
            >
              <span>Pide Cita</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
