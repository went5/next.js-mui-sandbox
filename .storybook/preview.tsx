import theme from "../src/theme";
import theme2 from "../src/theme2";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import * as nextImage from "next/image";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export enum KEYS {
  THEME_KEY = "THEME_KEY",
}

export function getItem(key: KEYS) {
  const value = localStorage.getItem(KEYS.THEME_KEY);
  if (value !== null) {
    return value;
  }
  return "";
}

export function getTheme(key: KEYS) {
  const value = localStorage.getItem(KEYS.THEME_KEY);
  switch (value) {
    case "theme":
      return theme;
    case "theme2":
      return theme2;
    default:
      return theme;
  }
}

export const decorators = [
  (Story) => {
    const [themeString, setThemeString] = React.useState(
      getItem(KEYS.THEME_KEY)
    );
    const [Utheme, setUTheme] = React.useState(getTheme(KEYS.THEME_KEY));
    const handleChange = (event: SelectChangeEvent<string>) => {
      setThemeString(event.target.value);
      localStorage.setItem(KEYS.THEME_KEY, event.target.value);
      console.log(event.target.value);
      // todo recoilで状態管理する
      switch (event.target.value) {
        case "theme":
          setUTheme(theme);
          break;
        case "theme2":
          setUTheme(theme2);
          break;
      }
    };
    return (
      <ThemeProvider theme={Utheme}>
        <CssBaseline />
        <Box sx={{ minWidth: 120 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <FormControl sx={{ minWidth: 300 }}>
              <FormLabel id="demo-simple-select-label">Theme</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-simple-select-label"
                id="demo-simple-select"
                value={themeString}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="theme"
                  control={<Radio />}
                  label="theme"
                />
                <FormControlLabel
                  value="theme2"
                  control={<Radio />}
                  label="theme2"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Story />
      </ThemeProvider>
    );
  },
];

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});
