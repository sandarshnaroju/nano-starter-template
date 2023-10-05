const newTable = {
  name: 'new',
  properties: {
    key: 'string',
    value: 'string',
  },
  primaryKey: 'key',
};

export const DataBaseConfig = {
  // schema: [newTable],
  // schemaVersion: 3,
};
export const CLIENT_ID = 'client-Id';
export const CLIENT_SECRET = 'Client-secret';
export const APP_URL = 'app url';
export const RELOAD_TIME = 10000; 
 const lightTheme = {
  name: "light",
  isDark: false,
  colors: {
    primary: "blue",
    secondary: "#800460",
    background: "#e0f4f4",
  },
};
const darkTheme = {
  name: "dark",
  isDark: true,
  colors: {
    primary: "black",
    secondary: "yellow",
    background: "gray",
  },
};

export const THEMES = [lightTheme, darkTheme];
  
