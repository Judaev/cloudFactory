import {useRecoilValue} from 'recoil';
import {Theme} from '../core/types/theme';
import themeAtom from '../store/recoil/app/themeAtom';

export default function (): Theme {
  const theme = useRecoilValue(themeAtom);
  return theme;
}
