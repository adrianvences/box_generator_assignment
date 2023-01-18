
import { useState } from "react";

const Form = ({boxes,setBoxes}) => {
  const [color, setColor] = useState("");
  const [dimensions, setDimensions] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newBox = {
      color, dimensions,
    };
    setBoxes([
      ...boxes,
      newBox,
    ]);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Design your box!
            <form onSubmit={submitHandler}>
              <div class="row mb-3">
                <label for="color" class="col-sm-2 col-form-label">
                  Color:
                </label>
                <div class="col-sm-10">
                  <input
                    type="color"
                    class="form-control"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="dimensions" class="col-sm-2 col-form-label">
                  Dimensions:
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="dimensions"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
              
            </form>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Form;
