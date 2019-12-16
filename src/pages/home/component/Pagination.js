import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function PaginationActions(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {
    count,
    page,
    rowsPerPage,
    onChangePage,
    next,
    prev,
    last
  } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 1);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, prev);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, next);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, last);
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const Pagination = ({
  count,
  rowsPerPage,
  page,
  getData,
  prev,
  next,
  last
}) => {
  return (
    <TablePagination
      labelRowsPerPage={false}
      rowsPerPageOptions={[]}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page - 1}
      onChangePage={(e, page) => getData(page)}
      ActionsComponent={props => (
        <PaginationActions
          prev={prev}
          next={next}
          last={last}
          {...props}
        />
      )}
    />
  );
};

export default Pagination;
