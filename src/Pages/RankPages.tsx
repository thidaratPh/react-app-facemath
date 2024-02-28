import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import { LineChart } from "@mui/x-charts/LineChart";
import FavoriteIcon from "@mui/icons-material/Favorite";

function RankPages() {
  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#F3BEE1" }}>
        <Toolbar>
          <img width="40" src="src\Photo\kitty.png" alt="" />
          &nbsp;&nbsp;
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rank Photo
          </Typography>
          <IconButton aria-label="TimelineIcon">
            <TimelineIcon />
          </IconButton>
          <IconButton aria-label="AddToPhotosOutlinedIcon">
            <AddToPhotosOutlinedIcon />
          </IconButton>
          <IconButton aria-label="ArrowBackIcon">
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="error" aria-label="ExitToAppOutlinedIcon">
            <ExitToAppOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={9}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345, alignItems: "center" }}>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="src\Photo\cat1.jpg"
                alt="Cat"
              />
              <h5>แมวเป้า</h5>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              52222
            </Card>
          </Grid>

          <Grid item xs={2}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]} //กำหนดค่าแกน
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default RankPages;
