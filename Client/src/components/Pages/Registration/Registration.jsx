import React, { useState } from "react";
import { gql } from "graphql-tag";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import MenuItem from "@material-ui/core/MenuItem";

import Upload from "material-ui-upload/Upload";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../../utils/hooks";
import { FETCH_REGISTRATION_QUERY } from "../../../api/registration";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
    name: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const { onChange, onSubmit, values } = useForm(registrationUser, {
    firstName: "",
    lastName: "",
    otherNames: "",
    phoneNo: "",
    localGovt: "",
    ward: "",
    state: "",
    contactAddress: "",
    gender: "",
    religion: "",
    nextofKinFullName: "",
    nextofKinAddress: "",
    nextofKinPhoneNo: "",
    nextofKinEmail: "",
  });

  const [addRegistration, { loading }] = useMutation(REGISTRATION_USER, {
    update(proxy, { data: { registration: userData } }) {
      //props.history("/");
    },
    variables: values,
  });

  function registrationUser() {
    addRegistration();
  }

  return (
    <div className="main-content">
      <Card>
        <CardContent>
          <h2 style={{ textAlign: "center" }}>Registration</h2>
          <FormikStepper
            initialValues={{
              firstName: "",
              lastName: "",
              otherNames: "",
              phoneNo: "",
              localGovt: "",
              ward: "",
              state: "",
              contactAddress: "",
              gender: "",
              religion: "",
              nextofKinFullName: "",
              nextofKinAddress: "",
              nextofKinPhoneNo: "",
              nextofKinEmail: "",
            }}
            onSubmit={onSubmit}
          >
            <FormikStep label="Mor Info">
              <Box paddingBottom={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
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
                  <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="lastName"
                        component={TextField}
                        label="Last Name"
                        variant="outlined"
                        maxLength={20}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                      <Field
                        fullWidth
                        name="otherNames"
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
                            name: "gender",
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
                          Religion
                        </InputLabel>
                        <NativeSelect
                          onChange={handleChange}
                          defaultValue="Islam"
                          inputProps={{
                            name: "religion",
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
                  name="contactAddress"
                  component={TextField}
                  label="Contact Address"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
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
                  <Grid item xs={12} sm={4}>
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
                  <Grid item xs={12} sm={4}>
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
                  name="nextofKinAddress"
                  component={TextField}
                  variant="outlined"
                  label="Next of Kin Address"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  type="number"
                  name="nextofKinPhoneNo"
                  component={TextField}
                  label="Next of Kin Phone Number"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  type="email"
                  name="nextofKinEmail"
                  component={TextField}
                  label="Next of Kin Email"
                  variant="outlined"
                />
              </Box>
            </FormikStep>
            <FormikStep>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Document Type</StyledTableCell>
                      <StyledTableCell align="right">File Type</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>Passport</strong>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          fullWidth
                          size="small"
                          type="file"
                          name="passport"
                          component={TextField}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          variant="contained"
                          color="default"
                          className={classes.button}
                          startIcon={<CloudUploadIcon />}
                          size="small"
                        >
                          Upload
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>Payment Receipt</strong>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          fullWidth
                          size="small"
                          type="file"
                          name="paymentReceipt"
                          component={TextField}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          variant="contained"
                          color="default"
                          className={classes.button}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>ID Card/Voters Card </strong>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Field
                          fullWidth
                          size="small"
                          type="file"
                          name="passport"
                          component={TextField}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          variant="contained"
                          color="default"
                          className={classes.button}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
          console.log(values);
          console.log(helpers);

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

const REGISTRATION_USER = gql`
  mutation registration(
    $firstName: String
    $lastName: String
    $otherNames: String
    $gender: String
    $religion: String
    $phoneNo: String
    $contactAddress: String
    $state: String
    $localGovt: String
    $nextofKinFullName: String
    $nextofKinAddress: String
    $nextofKinPhoneNo: String
    $nextofKinEmail: String
  ) {
    registration(
      registrationInput: {
        firstName: $firstName
        lastName: $lastName
        otherNames: $otherNames
        gender: $gender
        religion: $religion
        phoneNo: $phoneNo
        contactAddress: $contactAddress
        state: $state
        localGovt: $localGovt
        nextofKinFullName: $nextofKinFullName
        nextofKinAddress: $nextofKinAddress
        nextofKinPhoneNo: $nextofKinPhoneNo
        nextofKinEmail: $nextofKinEmail
      }
    ) {
      firstName
      lastName
      otherNames
      religion
      gender
      phoneNo
      contactAddress
      state
      localGovt
      nextofKinFullName
      nextofKinAddress
      nextofKinPhoneNo
      nextofKinEmail
    }
  }
`;
