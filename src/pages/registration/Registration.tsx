import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid2,
  Typography,
  Link as MUILink,
} from "@mui/material";
import RegistrationForm from "../../components/registration-form/RegistrationForm";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {/* Registration form UI */}
          <RegistrationForm />

          {/* redirect to login page */}
          <Grid2 container justifyContent="center">
            <Grid2>
              <MUILink to="/login" component={Link} variant="body2">
                Already have an account? Sign in
              </MUILink>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}

export default Registration;
