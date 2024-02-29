import {
  AppBar,
  Button,
  Card,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function AddPhotoPages() {
  // function selectFile(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
  //   throw new Error("Function not implemented.");
  // }
  function selectFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      const preview = document.getElementById("preview");
      preview.src = reader.result;
    };

    reader.readAsDataURL(file);
  }
  return (
    <>
        <AppBar position="fixed" style={{ backgroundColor: "#F3BEE1" }}>
          <Toolbar>
            <img width="40" src="src\Photo\kitty.png" alt="" />
            &nbsp;&nbsp;
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add Photo
            </Typography>
            <IconButton aria-label="TimelineIcon">
            <TimelineIcon />
          </IconButton>
          <IconButton aria-label="ArrowBackIcon">
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="error" aria-label="ExitToAppOutlinedIcon">
            <ExitToAppOutlinedIcon />
          </IconButton>
          </Toolbar>
        </AppBar>

        <Container
          component="center"
          sx={{
            marginTop: 3,
            display: "flex",
          }}
        >
          <Card
            sx={{
              marginTop: 8,
              display: "flow",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img width="300px" id="preview" />
            <TextField
              type="file"
              margin="normal"
              id="file"
              required
              fullWidth
              autoFocus
              onChange={selectFile}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoComplete="name"
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Card>
        </Container>
    </>
  );
}

export default AddPhotoPages;
