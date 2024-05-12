import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    surface: PaletteColor;
  }
  interface PaletteOptions {
    surface?: PaletteColorOptions;
  }
}
