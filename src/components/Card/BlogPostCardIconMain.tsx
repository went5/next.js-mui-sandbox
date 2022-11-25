import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { Bedtime } from "@mui/icons-material";
export default function BlogPostCardIconMain() {
  return (
    <Stack direction="row">
      <Box sx={{ p: 2 }}>
        <Bedtime fontSize="large" />
      </Box>
      <Stack>
        <Typography variant="h6">Importing Assets</Typography>
        <Stack direction="row">
          <Typography variant="body2">2022/01/23</Typography>
          <Box
            sx={{
              backgroundColor: "primary.main",
              px: 1,
              mx: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant="body2">#Unity</Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
