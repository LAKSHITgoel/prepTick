import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../../action/homeActions";
import Filter from "./component/Filter";
import QuestionContainer from "./container/QuestionContainer";

const Home = props => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <>
      <Filter {...props} />
      <QuestionContainer {...props} />
    </>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
