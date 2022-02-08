import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // if it is not wrapping the component
    throw new Error('useTheme to be used inside a ThemeProvider');
  }

  return context;
};
