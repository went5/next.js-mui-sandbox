import * as React from "react";
import Grid, { GridDirection } from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";

const gridItemsAlignment = [
  "flex-start",
  "center",
  "flex-end",
  "stretch",
  "baseline",
] as const;

type GridItemsAlignment = typeof gridItemsAlignment[number];

const gridJustifyContent = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
] as const;

type GridJustifyContent = typeof gridJustifyContent[number];

export default function Grids() {
  const [spacing, setSpacing] = React.useState(2);
  const [direction, setDirection] = React.useState<GridDirection>("row");
  const [justifyContent, setJustifyContent] = React.useState("center");
  const [alignItems, setAlignItems] =
    React.useState<GridItemsAlignment>("center");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number(event.target.value));
  };

  const settingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDirection(event.target.value as GridDirection);
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid
         sx ={{height:300}}
          container
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
          spacing={spacing}
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  p: 2,
                  pt: `${(value + 1) * 10}px`,
                  pb: `${(value + 1) * 10}px`,
                  height: "100%",
                  bgcolor: "blue",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {value}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }} elevation={5}>
          <Grid container>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 0.5, 1, 2, 3, 4].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">direction</FormLabel>
                <RadioGroup
                  name="direction"
                  aria-label="direction"
                  value={direction.toString()}
                  onChange={settingChange}
                  row
                >
                  {["row", "row-reverse", "column", "column-reverse"].map(
                    (value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    )
                  )}
                </RadioGroup>
              </FormControl>
            </Grid>{" "}
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">justifyContent</FormLabel>
                <RadioGroup
                  name="justifyContent"
                  aria-label="justifyContent"
                  value={justifyContent.toString()}
                  onChange={(event) => {
                    setJustifyContent(event.target.value);
                  }}
                  row
                >
                  {gridJustifyContent.map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">alignItems</FormLabel>
                <RadioGroup
                  name="alignItems"
                  aria-label="alignItems"
                  value={alignItems.toString()}
                  onChange={(event) => {
                    setAlignItems(event.target.value as GridItemsAlignment);
                  }}
                  row
                >
                  {gridItemsAlignment.map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
function ResponsiveStyleValue<T>(value: string): React.SetStateAction<string> {
  throw new Error("Function not implemented.");
}
