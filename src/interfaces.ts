export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'technical' | 'research' | 'soft';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ThemeProps {
  theme: {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        main: string;
        light: string;
        dark: string;
      };
      surface: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        light: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    transitions: {
      default: string;
      fast: string;
      slow: string;
    };
    gradients: {
      primary: string;
      glass: string;
    };
    glassMorphism: {
      background: string;
      backdropFilter: string;
      border: string;
    };
  };
} 