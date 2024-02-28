import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

function HomePages() {
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
            <Button color="primary">
              <PersonRoundedIcon />
            </Button>{" "}
            &nbsp;
            <Button>
              <LogoutIcon color="error" />
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3}>
          <Grid item xs>
            {/* photo 1 */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="src\Photo\cat1.jpg"
                alt="Cat"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
            {/* photo 1 */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="src\Photo\cat1.jpg"
                alt="Cat"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          {/* แรงค์ด้านข้าง */}
          <Grid
            item
            xs={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            
          >
            <Card sx={{ display: "flex" }} >
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image="src\Photo\cat2.jpg"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    จับฉันไว้ทำไม๊
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    ThidaZaZa
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image="src\Photo\cat2.jpg"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    จับฉันไว้ทำไม๊
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    ThidaZaZa
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image="src\Photo\cat2.jpg"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    จับฉันไว้ทำไม๊
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    ThidaZaZa
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default HomePages;
