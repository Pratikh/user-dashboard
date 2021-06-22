import { Form } from "react-bootstrap";
import { dipatcherType, inputEventHandler } from "../util";

interface ExperianceType {
  localDispatcher: dipatcherType;
  totalExperiance?: number;
}

export default function ExperianceDetails({
  localDispatcher,
  totalExperiance = 2,
}: ExperianceType) {
  const commonInputChangeHandler = inputEventHandler(localDispatcher);

  return (
    <Form.Group className="col-md-4 py-5 border-right">
      <div className="d-flex mb-2">
        <h4>Experiance details</h4>
      </div>
      <Form.Group>
        <Form.Label>Total experiance in Years</Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          value={totalExperiance}
          onChange={commonInputChangeHandler}
          my-custom-prop-name="totalExperiance"
          maxLength={3}
          my-custom-type="number"
        />
      </Form.Group>
    </Form.Group>
  );
}
