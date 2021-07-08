import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typograhy,
  Button,
  Box,
  Stepper,
  StepLabel,
  Step,
} from "@material-ui/core";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import { object, mixed, number } from "yup";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import MenuItem from "@material-ui/core/MenuItem";

import Upload from "material-ui-upload/Upload";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Registration = () => {
  const genderSelect = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];
  const classes = useStyles();
  const [gender, setGender] = React.useState("Male");
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const onFileLoad = (e, file) => console.log(e.target.result, file.name);
  return (
    <div className="main-content">
      <Card>
        <CardContent>
          <h2>Registration</h2>
          <FormikStepper
            initialValues={{
              firstName: "",
              lastName: "",
              OtherNames: "",
              PhoneNo: "",
              LocalGovt: "",
              Ward: "",
              State: "",
              ContactAddress: "",
              Gender: "",
              Religion: "",
              NextofKinFullName: "",
              NextofKinAddress: "",
              NextofKinPhoneNo: "",
              NextofKinEmail: "",
            }}
            onSubmit={() => {}}
          >
            <FormikStep label="Mor Info">
              <Box paddingBottom={2}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="firstName"
                        component={TextField}
                        label="First Name"
                        variant="outlined"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="lastName"
                        component={TextField}
                        label="Last Name"
                        variant="outlined"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="othernames"
                        component={TextField}
                        label="Other Names"
                        variant="outlined"
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              <Box paddingBottom={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="uncontrolled-native">
                          Gender
                        </InputLabel>
                        <NativeSelect
                          onChange={handleChange}
                          defaultValue="Male"
                          variant="outlined"
                          inputProps={{
                            name: "name",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </NativeSelect>
                      </FormControl>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="uncontrolled-native">
                          Gender
                        </InputLabel>
                        <NativeSelect
                          onChange={handleChange}
                          defaultValue="Islam"
                          inputProps={{
                            name: "name",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value="Christianity">Christianity</option>
                          <option value="Islam">Islam</option>
                          <option value="Others">Others</option>
                        </NativeSelect>
                      </FormControl>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  type="number"
                  name="phoneNo"
                  component={TextField}
                  label="Phone Number"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="address"
                  component={TextField}
                  label="Contact Address"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="state"
                        component={TextField}
                        label="State"
                        variant="outlined"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="localGovt"
                        component={TextField}
                        label="Local Government"
                        variant="outlined"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="ward"
                        component={TextField}
                        label="Council Ward"
                        variant="outlined"
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </FormikStep>

            <FormikStep>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="nextofKinFullName"
                  component={TextField}
                  label="Next of Kin Full Name"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="nextOfKinAdress"
                  component={TextField}
                  variant="outlined"
                  label="Next of Kin Address"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  type="number"
                  name="nextOfKinPhonNo"
                  component={TextField}
                  label="Next of Kin Phone Number"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="nextOfKinEmail"
                  component={TextField}
                  label="Next of Kin Email"
                  variant="outlined"
                />
              </Box>
            </FormikStep>
            <FormikStep>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  component={TextField}
                  label="Description"
                  variant="outlined"
                />
              </Box>
            </FormikStep>
          </FormikStepper>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;

export function FormikStep({ children }: FormikConfig<FormikValues>) {
  return <> {children} </>;
}

function getSteps() {
  return ["Personal Info", "Other Details", "Upload Documents"];
}

export function FormikStepper({
  children,
  label,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const labelNumber = getSteps();

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form autoComplete="off">
        <Stepper alternativeLabel activeStep={step}>
          {childrenArray.map((children) => (
            <Step key={props.data}>
              <StepLabel>{labelNumber[step]}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {currentChild}
        {step > 0 ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </Button>
        ) : null}
        <Button variant="contained" color="primary" type="submit">
          {isLastStep() ? "Submit" : "Next"}
        </Button>
      </Form>
    </Formik>
  );
}
