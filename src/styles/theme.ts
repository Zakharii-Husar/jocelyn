export const theme = {
  colors: {
    primary: {
      main: '#2C3E50',
      light: '#34495E',
      dark: '#1A252F',
    },
    background: {
      main: '#F5F6FA',
      light: '#FFFFFF',
      dark: '#E4E6F0',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      light: '#FFFFFF',
    },
    error: '#E74C3C',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Poppins', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    default: '0.3s ease',
  },
  layout: {
    maxWidth: '1200px',
  },
} as const;

export type Theme = typeof theme; 