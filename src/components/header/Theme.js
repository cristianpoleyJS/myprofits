import { DARK, LIGHT, useThemeMode } from 'hooks/useThemeMode'
import IconDarkMode from 'components/icons/IconDarkMode'
import IconLightMode from 'components/icons/IconLightMode'

const Theme = () => {
  const [theme, setTheme] = useThemeMode()

  return (
    <>
      {
        theme === DARK
        ? <IconLightMode onClick={() => setTheme(LIGHT)} width={'40px'} height={'40px'} fill={'#fff'}/>
        : <IconDarkMode onClick={() => setTheme(DARK)} width={'40px'} height={'40px'} />
      }
    </>
  )
};

export default Theme