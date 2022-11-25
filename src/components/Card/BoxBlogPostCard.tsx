import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Image from "next/image";

export default function BoxBlogPostCard() {

  return (
    <Card sx={{ display: "flex", maxWidth: 800 }}>
      <Image
        src="https://img.icons8.com/color/240/000000/idea.png"
        alt="Live from space album cover"
        width={100}
        height={100}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            VContainerを使ってHPバーを作ってみた
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            2022/01/23
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
