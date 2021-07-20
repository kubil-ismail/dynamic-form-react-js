import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Formik, Form } from "formik";
import { initialValues, validationSchema, formInput } from "./FormSchema";
import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="row mt-5 justify-content-md-center">
        <div className="col-lg-6">
          <div className="card">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(val) => console.log(val)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                isValid,
              }) => (
                <Form className="row g-3 card-body">
                  {formInput.map((val, key) => (
                    <Input
                      key={key}
                      id={val.name}
                      name={val.name}
                      label={val.label}
                      type={val.type}
                      options={val.options}
                      grid={val.grid}
                      placeholder={val.placeholder}
                      value={values[val.name]}
                      error={touched[val.name] && Boolean(errors[val.name])}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      helperText={touched[val.name] ? errors[val.name] : ""}
                      handleSelect={(value) => setFieldValue(val.name, value)}
                    />
                  ))}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Process
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
