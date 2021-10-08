import { AppBar, Button, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.title}>
          <Button component={NavLink} to={"/"} color="inherit">
            Micro frontend App
          </Button>
        </div>

        <Button component={NavLink} to={"/posts"} color="inherit">
          Posts
        </Button>
        <Button color="inherit">Comments</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
