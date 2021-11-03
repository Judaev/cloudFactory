import {useMemo} from 'react';
import {Theme} from '../core/types/theme';
import useTheme from './useTheme';

export default function <T>(fn: (theme: Theme) => T): T {
  const theme = useTheme();
  return useMemo(() => fn(theme), [fn, theme]);
}
