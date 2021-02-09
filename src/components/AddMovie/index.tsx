import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const AddMovie = (): JSX.Element => {
  return (
    <div className="addmovie">
      <div className="addmovie__wrapper">
        <div className="banner__title">
          <Form>
            <FormGroup>
              <Label> + ADD MOVIE</Label>
              <Input type="text" placeholder="Movie Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Router>
              <Link to="/" className="btn btn-danger ml-2">
                Cancel
              </Link>
            </Router>
          </Form>
        </div>
      </div>
    </div>
  );
};
