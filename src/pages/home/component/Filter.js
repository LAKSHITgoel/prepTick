import React, { useState } from "react";
import clsx from 'clsx';
import { FormControl, Input, InputLabel, Fab, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search';
import Pagination from "./Pagination";

const useStyles = makeStyles(theme => ({
  inputSpacing: {
    margin: 10
  },
  flex:{
    display: "flex",
    justifyContent: 'space-between'
  },
  filterForm: {
    margin: 10,
  },
  pagination: {
    display:'flex',
    justifyContent:'center',
    margin: 10
  }
}));

const Filter = props => {
  const matches = useMediaQuery('(min-width: 980px)');
  const {
    getData,
    home: { meta : { items, page, count, ...metaRest} }
  } = props;
  const classes = useStyles();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className={clsx(classes.filterForm, {[classes.flex]: matches})}>
      <form onSubmit={()=> getData(page, company, role)}>
        <FormControl className={classes.inputSpacing}>
          <InputLabel htmlFor="company-filter">Search by Company</InputLabel>
          <Input
            onChange={e => setCompany(e.target.value)}
            value={company}
            name="company"
            type="text"
            id="company-filter"
            aria-label="Search by company name eg: Google"
          />
        </FormControl>
        <FormControl className={classes.inputSpacing}>
          <InputLabel htmlFor="role-filter">Search by Role</InputLabel>
          <Input
            onChange={e => setRole(e.target.value)}
            value={role}
            name="role"
            type="text"
            id="role-filter"
            aria-label="Search by role name eg: Manager"
          />
        </FormControl>
        <FormControl className={classes.inputSpacing}>
          <Fab color='secondary' size='medium'>
            <SearchIcon onClick={()=> getData(page, company, role)} />
          </Fab>
        </FormControl>
      </form>
      { !matches && <br />}
      <div className={classes.pagination}>
        <Pagination
          labelRowsPerPage={false}
          rowsPerPageOptions={false}
          rowsPerPage={items}
          count={count}
          page={page}
          getData={getData}
          {...metaRest}
        />
      </div>
    </div>
  );
};

export default Filter;
