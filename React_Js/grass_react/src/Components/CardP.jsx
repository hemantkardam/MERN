import React from "react";

const CardP = (props) => {
  return (
    <>
    
      <div className="col-md-4 mb-4">
        <div className="card" style={{ width: "18rem;" }}>
          <div
            style={{
              height: "300px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={props.userI}
              style={{ height: "85%", width: "95%" }}
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.user}</h5>
            <p className="card-text">{props.descri}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardP;
