import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiPickersModal: {
      dialogRoot: {
        padding: "0px",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "460px",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    paperWidthSm: {
      maxWidth: "600px",
    },
    MuiCollapse: {
      // wrapperInner: {
      //   paddingLeft: "44px",
      // },
    },

    MuiInputAdornment: {
      positionStart: {
        paddingLeft: "14px",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "none",
        // padding: "10px 16px",
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: "0px !important",
        // color: "rgb(255, 125, 104) !important",
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "transparent",
      },
    },
    MuiPickerDTToolbar: { toolbar: { borderRadius: "8px 8px 0px 0px" } },

    MuiButton: {
      root: {
        "&.Mui-disabled": {
          color: "rgb(112, 107, 107)",
        },
      },
      contained: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "5px",
        whiteSpace: "pre",
        padding: "10px 20px",
      },
      outlined: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "50px",
        whiteSpace: "pre",
        padding: "10px 20px",
      },
      outlinedSizeLarge: {
        padding: "7px 35px",
      },
      containedSizeLarge: {},
    },
  },
};

const themesOptions = [
  {
    name: "LIGHT",
    overrides: {
      MuiMenu: {
        list: {
          outline: "0",
          background: "#ffffff",
        },
      },
      MuiDialog: {
        paper: {
          margin: "32px",
          background: "#ffffff",

          position: "relative",
          overflowY: "auto",
          // color: "#fff !important",
          borderRadius: "10px !important",
          "@media(max-width:767px)": {
            padding: "10px",
          },
        },
      },
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: "1px solid #575765",
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#FF6600 !important",
        },
        track: {
          backgroundColor: "#a8a4a4",
          opacity: "1",
        },
      },

      MuiInputBase: {
        root: {
          cursor: "text",
          display: "inline-flex",
          position: "relative",
          fontSize: "14px",
          boxSizing: "border-box",
          alignItems: "center",
          fontFamily: "Poppins",
          fontWeight: "300",
        },
      },
      MuiSelect: {
        icon: {
          color: "#000",
        },
      },
      MuiTableHead: {
        root: {
          background: "#4A4A57",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      MuiTableBody: {
        root: {
          background:
            "linear-gradient(152.97deg, rgb(255 255 255 / 65%) 0%, rgb(62 60 60 / 27%) 100%)",
        },
      },
      MuiTableRow: {
        root: {
          "&:hover": {
            backgroundColor: "#00000017",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },

      MuiTableCell: {
        head: {
          padding: "12px 12px",
          fontWeight: "300",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontStyle: "normal",
          color: "#FFF",
        },
        body: {
          fontSize: 12,
          color: "#9090A3",
        },
      },

      MuiButton: {
        containedPrimary: {
          borderRadius: "5px",
          color: "#ffffff",
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 600,
          padding: "10px 39px",
          marginRight: "10px",
          backgroundColor: "#FF6905",
          "&:hover": {
            color: "#000",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #FF6905, 0 -1px 0 0 #FF6905, 1px 0 0 0 #FF6905, -1px 0 0 0 #FF6905, 1px -1px 0 0 #FF6905, -1px 1px 0 0 #FF6905, 1px 1px 0 0 #FF6905, -1px -1px 0 0 #FF6905",
            backgroundColor: "transparent",
          },
        },

        containedSecondary: {
          borderRadius: "5px",
          color: "#000",
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 600,
          padding: "10px 39px",
          marginRight: "10px",
          backgroundColor: "#F3F5F9",
          "&:hover": {
            color: "#000",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #000, 0 -1px 0 0 #000, 1px 0 0 0 #000, -1px 0 0 0 #000, 1px -1px 0 0 #000, -1px 1px 0 0 #000, 1px 1px 0 0 #000, -1px -1px 0 0 #000",
            backgroundColor: "transparent",
          },
        },

        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.03) ",
          },
        },
        outlinedPrimary: {
          color: "#000",
          border: "1px solid #000 !important",
          "&:hover": {
            color: "#fff",
            boxShadow: "none !important",
            backgroundColor:
              "linear-gradient(180deg, #FDA645 0%, #FF00CD 100%)",
            // backgroundColor: "#51ACED !important",
            // border: "1px solid #51ACED !important",
          },
        },
      },
      MuiPickersCalendarHeader: {
        dayLabel: { color: "#000" },
      },
      MuiPickersClockNumber: { clockNumber: { color: "#000" } },
      MuiPickersDay: {
        day: {
          color: "#000",
        },
      },

      MuiPaginationItem: {
        page: {
          "&.Mui-selected": {
            backgroundColor: "#ff6600",
          },
        },
        root: {
          color: "#000",
        },
      },
      MuiPaper: {
        root: { color: "#000" },
        elevation2: {
          position: "relative",
          zIndex: "999",
          overflow: "hidden",
          padding: "20px",
          boxShadow: "-8px -8px 13px 0px #ffffff, 6px 13px 20px #d2d1db",
          borderRadius: "10px !important",
          backgroundColor: "#F5F5F5",
          "@media(max-width:767px)": {
            padding: "20px !important",
          },
        },
      },
      MuiIconButton: {
        root: {
          color: "#000000",
          padding: "4px",
          background: "transparent",
          borderRadius: "5px",
        },
      },

      MuiOutlinedInput: {
        inputMultiline: {
          padding: "1px !important",
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            boxShadow: "none",
          },
        },
        notchedOutline: {
          background: "rgba(0, 0, 0, 0.07)",
          borderColor: "rgb(230 226 230)",
        },
        input: {
          borderRadius: "10px",
          color: "#000",
          padding: "16px 14px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#000",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
    },
    typography: {
      fontFamily: "'Saira', sans-serif",
    },
    palette: {
      background: {
        card: "rgba(255, 255, 255, 0.03)",
        tab: "#fff",
        header: "#FFF",
        default: "#FFF",
        price: "#fef7fa",
        pricename: "#fef7fa",
        blackCard: "#fef7fa",
        tablehead: "#fef7fa",
        paperBack: "#F5F5F5",
        // new color
        profile: "#FFF6F6",
        backgroundBox: "rgba(0, 0, 0, 0.08)",
        cardBackground: "rgba(0, 0, 0, 0.08)",
        cardHeader: "#6C6C6C",
        tabBackground: "#E7E7E7",
        buttonTab: "#F3F5F9",
        border: "1px solid #E7E7E7",
        selectButton: "1rgba(0, 0, 0, 0.08)",
        profileBackground: "#FFF6F6",
      },

      primary: {
        main: "#000000", //black
      },
      secondary: {
        main: "#000000", //black
        icons: "#009900", //white
      },
      text: {
        primary: "#000", //black
        secondary: "#000", //white
        gray: "#000",
        graydark: "#000",
        white: "#000",
      },
    },
  },
  {
    name: "DARK",
    overrides: {
      MuiMenu: {
        list: {
          outline: "0",
          background: "#434242",
        },
      },

      MuiDialog: {
        paper: {
          background: "#26262C",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          "@media(max-width:767px)": {
            padding: "10px",
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#FF6600 !important",
        },
        track: {
          backgroundColor: "#E5E5E5",
          opacity: "1",
        },
      },
      MuiPickersDay: {
        day: {
          color: "#fff",
        },
      },
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: "1px solid #575765",
          },
        },
      },
      MuiPickersCalendarHeader: {
        dayLabel: { color: "#fff" },
      },
      MuiTableHead: {
        root: {
          background: "#4A4A57",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      MuiTableBody: {
        root: {
          background: "#2F2F37",
        },
      },
      MuiTableRow: {
        root: {
          "&:hover": {
            backgroundColor: "#ffffff14",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      MuiTableCell: {
        head: {
          padding: "12px 12px",
          fontWeight: "300",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontStyle: "normal",
        },
        body: {
          fontSize: 12,
          color: "#9090A3",
        },
      },
      MuiInputBase: {
        root: {
          cursor: "text",
          display: "inline-flex",
          position: "relative",
          fontSize: "14px",
          boxSizing: "border-box",
          alignItems: "center",
          fontFamily: "Poppins",
          fontWeight: "300",
          "&.Mui-disabled": {
            color: "#575765",
          },
        },
      },
      MuiSelect: {
        icon: {
          color: "#fff",
        },
        outlined: {
          border: "1px solid rgba(255, 105, 5, 0.30)",
          borderRadius: "4px",
          background: "rgba(255, 255, 255, 0.07)",
          color: "#FF6905",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          textTransform: "capitalize",
        },
        select: {
          "&:focus": {
            border: "1px solid rgba(255, 105, 5, 0.30)",
            borderRadius: "4px",
          },
        },
      },

      MuiButton: {
        containedPrimary: {
          borderRadius: "5px",
          color: "#ffffff",
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 600,
          padding: "10px 39px",
          marginRight: "10px",
          backgroundColor: "#FF6905",
          "&:hover": {
            color: "#ffffff",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #FF6905, 0 -1px 0 0 #FF6905, 1px 0 0 0 #FF6905, -1px 0 0 0 #FF6905, 1px -1px 0 0 #FF6905, -1px 1px 0 0 #FF6905, 1px 1px 0 0 #FF6905, -1px -1px 0 0 #FF6905",
            backgroundColor: "transparent",
          },
        },
        containedSecondary: {
          borderRadius: "5px",
          color: "#ffffff",
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 600,
          padding: "10px 39px",
          marginRight: "10px",
          backgroundColor: "#32323A",
          "&:hover": {
            color: "#ffffff",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #32323A, 0 -1px 0 0 #32323A, 1px 0 0 0 #32323A, -1px 0 0 0 #32323A, 1px -1px 0 0 #32323A, -1px 1px 0 0 #32323A, 1px 1px 0 0 #32323A, -1px -1px 0 0 #32323A",
            backgroundColor: "transparent",
          },
        },
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(255, 255, 255, 0.025) ",
            color: "#ffffff45",
          },
        },
      },
      MuiPaginationItem: {
        page: {
          "&.Mui-selected": {
            backgroundColor: "#ff6600",
          },
        },
        root: {
          color: "#ffffff",
        },
      },

      MuiPaper: {
        root: {
          color: "#fff",
        },
        elevation2: {
          position: "relative",
          zIndex: "999",
          padding: "20px",
          background: "#26262C",
          overflow: "hidden",
          boxShadow: "none",
          borderRadius: "10px !important",
          "@media(max-width:767px)": {
            padding: "15px !important",
          },
        },
      },
      MuiIconButton: {
        root: {
          color: "#fff",
          padding: "4px",
          background: "transparent",
          borderRadius: "5px",
          "&.Mui-disabled": {
            color: "#dadada52",
          },
        },
      },

      MuiOutlinedInput: {
        inputMultiline: {
          padding: "1px !important",
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            boxShadow: "none",
          },
        },
        notchedOutline: {
          background: "rgba(255, 255, 255, 0.025)",
          borderColor: "rgba(255, 255, 255, 0.025)",
        },
        input: {
          borderRadius: "10px",
          color: "#fff",
          padding: "16px 14px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#fff",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
    },
    typography: {
      fontFamily: "'K2D', sans-serif",
    },
    palette: {
      background: {
        card: "rgba(255, 255, 255, 0.03)",
        tab: "rgba(255, 255, 255, 0.07)",
        header: "#26262C",
        default: "#26262C",
        price: "#2B2B2B",
        pricename: "#474747",
        blackCard: "#1E1E1E",
        tablehead: "#1B1A1A",
        paperBack: "#191919",
        profile: "#32323A",
        backgroundBox: "#32323A",
        cardBackground: "#434242",
        cardHeader: "rgba(255, 255, 255, 0.07)",
        tabBackground: "rgba(0, 0, 0, 0.08)",
        buttonTab: "#32323A",
        border: "1px solid transparent",
        selectButton: "#1F1F24",
        profileBackground: "#32323A",
      },
      primary: {
        main: "#ffffff", //black
      },
      secondary: {
        main: "#D9D9D9", //white
        icons: "#FFFFFF", //white
      },
      text: {
        primary: "#FFFFFF", //white
        secondary: "rgba(255, 255, 255, 0.6)", //white
        gray: " #A9A9A9",
        graydark: "#A7A7A7",
        white: "#fff",
      },
    },
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
