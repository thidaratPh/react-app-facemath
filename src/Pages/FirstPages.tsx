import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';

function FirstPages() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="fixed" color="secondary" style={{backgroundColor:"#F3BEE1"}}>
        <Toolbar>
        <img width="40" src="src\Photo\kitty.png" alt="" />&nbsp;&nbsp;

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Catmash
          </Typography>
          <Button variant="contained" style={{backgroundColor:"#E7B7D9",color:"black"}}>
            Login
          </Button>{" "}
          &nbsp;
          <Button variant="contained" style={{backgroundColor:"#8B3DFF"}}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography>
            Catmash
            มีลักษณะเป็นเกมการจับคู่รูปภาพของแมวสองแล้วให้ผู้ใช้ที่เข้าชมทายว่าตัวไหนน่ารักว่าหรือน่าสนใจมากกว่า
          </Typography>
        </Grid>
        
        <Grid item xs={4}>
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
        
        <Grid item xs={4}>
          {/* photo 2 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="300"
              width="300"
              image="src\Photo\cat2.jpg"
              alt="Cat"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default FirstPages;
