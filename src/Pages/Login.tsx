import {
  AppBar,
  Button,
  CssBaseline,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

function LoginPages() {
  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
      <AppBar position="fixed" color="secondary" style={{backgroundColor:"#F3BEE1"}} >
        <Toolbar>
        <img width="40" src="src\Photo\kitty.png" alt="" />&nbsp;&nbsp;

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Catmash
          </Typography>
        </Toolbar>
      </AppBar>

        <Container component="center" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          > 
            <Box  component="form" noValidate sx={{ mt: 1 }}>
            <img width="200" src="src\Photo\kitty.png" alt="" />&nbsp;&nbsp;
            <h3>LOGIN</h3>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default LoginPages;
