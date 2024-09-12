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
import { Link } from "react-router-dom";
import LoginForm from "../../components/login-form/LoginForm";

function Login() {
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
            Sign in
          </Typography>

          <LoginForm />

          <Grid2 container justifyContent="center">
            <Grid2>
              <MUILink to="/registration" component={Link} variant="body2">
                Don&apos;t have an account yet? Register now
              </MUILink>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}

export default Login;
