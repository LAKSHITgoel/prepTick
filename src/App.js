import React from "react";
import Router from "./Router";
import Navbar from "./common/Navbar";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import rootSaga from "./sagas";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

sagaMiddleware.run(rootSaga);

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.appBarSpacer} />
          <Router />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
