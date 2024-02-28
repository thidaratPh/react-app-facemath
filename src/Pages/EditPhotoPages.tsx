import { AppBar, Button, CssBaseline, TextField, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function EditPhotoPages() {
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
          </Toolbar>
        </AppBar>

        <Container component="center" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <img width="200" src="src\Photo\kitty.png" alt="" />
              &nbsp;&nbsp;
              <h3>Add Photo</h3>
              <TextField
                margin="normal"
                required
                fullWidth
                id="photo"
                label="Add Photo"
                name="Add Photo"
                autoComplete="photo"
                autoFocus
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
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default EditPhotoPages;
