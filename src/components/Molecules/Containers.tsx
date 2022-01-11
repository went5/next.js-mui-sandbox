import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";

export default function Containers() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "blue", height: "10vh" }} />
      </Container>
    </>
  );
}
