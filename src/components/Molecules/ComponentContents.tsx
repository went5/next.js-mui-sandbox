import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";

type Props = {
  title?:String;
  children?: ReactNode;
};

const ComponentContents = ({title, children }: Props) => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box sx={{ p: 3, border: "1px solid #d9d9d9d9", borderRadius: 2 }}>
        {children}
      </Box>
    </>
  );
};

export default ComponentContents;
