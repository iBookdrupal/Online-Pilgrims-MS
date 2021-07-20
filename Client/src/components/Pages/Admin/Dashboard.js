import React, { useContext, Redirect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chart from "../Chart/Chart.jsx";
import GroupedChart from "../Chart/GroupedChart.jsx";
import DoughnutChart from "../Chart/DoughnutChart.jsx";
import PieChart from "../Chart/PieChart.jsx";
import { useQuery } from "@apollo/react-hooks";

import { FETCH_USERS_QUERY } from "../../../api/user.js";
import { AuthContext } from "../../../context/auth.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard(props) {
  const { loading, error, data } = useQuery(FETCH_USERS_QUERY);
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="main-content">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <GroupedChart />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <DoughnutChart />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <PieChart />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
