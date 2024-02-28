import { AppBar, Button, CssBaseline, Grid, TextField, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function SignupPage() {
  return (
    
    <Container component="main" maxWidth="xs">
      <AppBar position="fixed" color="secondary" style={{backgroundColor:"#F3BEE1"}} >
        <Toolbar>
        <img width="40" src="src\Photo\kitty.png" alt="" />&nbsp;&nbsp;

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Catmash
          </Typography>
        </Toolbar>
      </AppBar>

      
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default SignupPage;
