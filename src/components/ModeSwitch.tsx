import { useThemeContext } from "../providers/ThemeContextProvider";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";

const SwitchStyled = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb": {
        backgroundColor: "black", // Thumb turns black when checked
      },
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 10 0 C 4.480469 0 0 4.480469 0 10 C 0 15.519531 4.480469 20 10 20 C 15.519531 20 20 15.519531 20 10 C 20 4.480469 15.519531 0 10 0 Z M 9.527344 0.828125 C 9.535156 0.828125 9.539062 0.828125 9.546875 0.828125 L 9.585938 1.507812 C 9.011719 1.535156 8.449219 1.617188 7.90625 1.757812 L 8.074219 2.417969 C 6.65625 2.777344 5.390625 3.523438 4.398438 4.542969 L 3.910156 4.066406 C 3.515625 4.472656 3.160156 4.917969 2.851562 5.398438 L 2.28125 5.019531 C 3.839844 2.617188 6.488281 0.984375 9.527344 0.828125 Z M 10.453125 0.828125 C 13.5 0.976562 16.15625 2.609375 17.71875 5.019531 L 17.148438 5.398438 C 16.839844 4.921875 16.484375 4.472656 16.089844 4.070312 L 15.605469 4.542969 C 14.613281 3.523438 13.34375 2.777344 11.925781 2.417969 L 12.09375 1.757812 C 11.550781 1.617188 10.988281 1.535156 10.414062 1.507812 Z M 10 3.828125 C 10.289062 3.824219 10.578125 3.84375 10.816406 3.878906 L 10.445312 6.972656 C 11.226562 7.085938 11.910156 7.496094 12.386719 8.085938 L 14.867188 6.222656 C 15.167969 6.597656 15.511719 7.1875 15.691406 7.632812 L 12.839844 8.855469 C 12.980469 9.207031 13.0625 9.59375 13.0625 10 C 13.0625 10.390625 12.988281 10.765625 12.855469 11.109375 L 15.683594 12.316406 C 15.511719 12.765625 15.171875 13.355469 14.875 13.734375 L 12.410156 11.886719 C 11.9375 12.488281 11.242188 12.910156 10.449219 13.027344 L 10.816406 16.070312 C 10.339844 16.144531 9.660156 16.144531 9.183594 16.074219 L 9.550781 13.027344 C 8.757812 12.910156 8.0625 12.488281 7.589844 11.886719 L 5.132812 13.730469 C 4.832031 13.355469 4.488281 12.765625 4.308594 12.320312 L 7.144531 11.105469 C 7.011719 10.761719 6.9375 10.390625 6.9375 10 C 6.9375 9.59375 7.019531 9.207031 7.160156 8.851562 L 4.316406 7.636719 C 4.488281 7.1875 4.828125 6.597656 5.125 6.21875 L 7.613281 8.085938 C 8.089844 7.496094 8.773438 7.085938 9.554688 6.972656 L 9.183594 3.882812 C 9.421875 3.84375 9.710938 3.828125 10 3.828125 Z M 1.828125 5.808594 L 2.441406 6.109375 C 2.183594 6.609375 1.972656 7.140625 1.816406 7.691406 L 2.46875 7.875 C 2.28125 8.550781 2.175781 9.265625 2.175781 10 C 2.175781 10.738281 2.28125 11.449219 2.46875 12.125 L 1.816406 12.3125 C 1.972656 12.863281 2.183594 13.390625 2.441406 13.890625 L 1.828125 14.191406 C 1.179688 12.933594 0.816406 11.511719 0.816406 10 C 0.816406 8.488281 1.179688 7.066406 1.828125 5.808594 Z M 18.171875 5.808594 C 18.820312 7.066406 19.183594 8.488281 19.183594 10 C 19.183594 11.511719 18.820312 12.933594 18.171875 14.191406 L 17.558594 13.890625 C 17.816406 13.390625 18.027344 12.863281 18.183594 12.3125 L 17.53125 12.125 C 17.71875 11.449219 17.824219 10.738281 17.824219 10 C 17.824219 9.265625 17.71875 8.550781 17.53125 7.875 L 18.183594 7.691406 C 18.027344 7.140625 17.816406 6.609375 17.558594 6.109375 Z M 2.851562 14.601562 C 3.160156 15.082031 3.515625 15.527344 3.910156 15.933594 L 4.398438 15.457031 C 5.390625 16.476562 6.65625 17.222656 8.074219 17.582031 L 7.90625 18.242188 C 8.449219 18.382812 9.011719 18.464844 9.585938 18.492188 L 9.546875 19.171875 C 6.5 19.023438 3.84375 17.390625 2.28125 14.980469 Z M 17.148438 14.601562 L 17.71875 14.980469 C 16.15625 17.390625 13.5 19.023438 10.453125 19.171875 L 10.414062 18.492188 C 10.988281 18.464844 11.550781 18.382812 12.09375 18.242188 L 11.925781 17.582031 C 13.34375 17.222656 14.613281 16.476562 15.605469 15.457031 L 16.089844 15.929688 C 16.484375 15.523438 16.839844 15.082031 17.148438 14.601562 Z M 17.148438 14.601562 "/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "white",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "white",
    width: 32,
    height: 32,
    "&.Mui-checked": { backgroundColor: "black" },
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 0.496094 9.730469 C 0.613281 6.613281 2.191406 3.734375 5.082031 1.835938 C 5.09375 1.835938 5.167969 1.808594 5.132812 1.875 C 4.902344 2.085938 0.789062 6.949219 4.578125 10.785156 C 4.578125 10.785156 6.566406 12.699219 8.109375 10.886719 C 8.109375 10.886719 9.632812 8.914062 8.089844 5.925781 C 8.089844 5.925781 7.699219 4.949219 6.292969 4.34375 L 7.425781 3.09375 C 7.425781 3.09375 8.382812 3.503906 9.125 4.617188 C 9.125 4.617188 9.164062 3.445312 8.265625 2.195312 L 10.023438 0.203125 L 11.761719 2.175781 C 11.761719 2.175781 10.960938 3.308594 10.902344 4.636719 C 10.902344 4.636719 11.449219 3.738281 12.621094 3.09375 L 13.734375 4.34375 C 13.734375 4.34375 12.664062 4.695312 11.949219 5.910156 C 11.332031 7.039062 10.855469 9.449219 11.976562 10.925781 C 11.976562 10.925781 13.226562 12.699219 15.429688 10.820312 C 15.429688 10.820312 19.476562 7.195312 15.011719 1.953125 C 15.011719 1.953125 14.769531 1.734375 15.042969 1.851562 C 17.015625 3.289062 19.378906 5.183594 19.621094 9.910156 C 19.523438 15.640625 15.6875 19.730469 10.082031 19.730469 C 4.59375 19.730469 0.328125 15.152344 0.496094 9.730469 "/></svg>')`,
    },

    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const ModeSwitch = () => {
  const { toggleMode, mode } = useThemeContext();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (mode === "dark") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [mode]);

  return <SwitchStyled checked={isChecked} onClick={toggleMode}></SwitchStyled>;
};

export default ModeSwitch;
