import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const HideonScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default (props) => {
  return (
    <HideonScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">PrepTick</Typography>
        </Toolbar>
      </AppBar>
    </HideonScroll>
  );
}
