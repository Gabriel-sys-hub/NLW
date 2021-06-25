import { ThemeContext } from '../Contexts/ThemeContext';
import { useContext } from 'react';


export function useTheme() {
  const value = useContext(ThemeContext);

  return value;
}
