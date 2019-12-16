import React from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  gray: {
    color: "#7a7a7a",
    fontSize: "0.7rem"
  },
  root: {
    padding: "1rem",
    margin: "1rem"
  },
  role: {
    color: "rgba(83, 83, 83, 0.87)"
  },
  question: {
    color: "rgb(100,100,100)"
  }
}));

const Question = ({
  id,
  attributes: { role, company, title, category, interview_round }
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.role} variant="h6" component="h5">
        {role}
      </Typography>
      <Divider />
      <Typography
        component={() => <p dangerouslySetInnerHTML={{ __html: title }} />}
      />
      <Typography
        className={classes.gray}
        component={() => (
          <img
            height="25"
            width="25"
            alt={company}
            src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${company.toLowerCase()}.svg`}
          />
        )}
      />
      <Typography className={classes.gray} component="p">
        Category: {category}
      </Typography>
      <Typography className={classes.gray} component="p">
        Interview: {interview_round}
      </Typography>
    </Paper>
  );
};

export default Question;
