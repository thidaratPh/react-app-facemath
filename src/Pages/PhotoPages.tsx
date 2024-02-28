import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";

function PhotoPages() {
  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar
          position="fixed"
          color="secondary"
          style={{ backgroundColor: "#F3BEE1" }}
        >
          <Toolbar>
            <img width="40" src="src\Photo\kitty.png" alt="" />
            &nbsp;&nbsp;
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Catmash
            </Typography>
            <Button>
              <LogoutIcon color="error" />
            </Button>
          </Toolbar>
        </AppBar>

        <div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <h5>Photo</h5>
            </div>
            <div>
              <Button variant="contained" color="success">
                Add
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
export default PhotoPages;
