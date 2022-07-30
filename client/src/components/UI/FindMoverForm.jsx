import React from 'react'
import '../../styles/find-mover-form.css'
import { Form, FormGroup } from "reactstrap";

const FindMoverForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Location" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Min Charges" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Max Charges" required />
        </FormGroup>
      </div>
    </Form>
  );
}

export default FindMoverForm