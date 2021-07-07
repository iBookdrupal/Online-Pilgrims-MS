import { useState } from "react";
import { Formik, Form, Field } from "formik";

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Field name="firstName" />
          <Field name="lastName" />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Field name="contact" />
          <Field name="address" />
          <button type="button">Back</button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

const RegisterForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contact: "",
  });
  const handleNextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePreviousStep} data={data} />,
  ];
  console.log(data);
  return (
    <>
      <div className="pusher">
        <div className="main-content">
          <h3>Multi Step Form with Formik</h3>
          {steps[currentStep]}
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
