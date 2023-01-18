import React from "react";

function Display({ boxes }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">here are the boxes</h5>
          <div className="d-flex flex-wrap gap-2">
            {boxes.map((box, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: box.color,
                    width: `${box.dimensions}px`,
                    height: `${box.dimensions}px`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
