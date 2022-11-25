import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../Link";
import ProTip from "../ProTip";
import Copyright from "../Copyright";
import IndexList from "../components/Molecules/IndexList";
import { Avatar } from "@mui/material";
import BasicButtons from "../components/Molecules/BasicButtons";
import ComponentContents from "../components/Molecules/ComponentContents";
import Containers from "../components/Molecules/Containers";
import Grids from "../components/Molecules/Grids";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <ComponentContents title="BasicButtons" children={<BasicButtons />} />
          <ComponentContents title="Containers" children={<Containers />} />
          <ComponentContents title="Grids" children={<Grids />} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
