import { DARK, LIGHT, useThemeMode } from 'hooks/useThemeMode'
import IconDarkMode from 'components/icons/IconDarkMode'
import IconLightMode from 'components/icons/IconLightMode'

const Theme = () => {
  const [theme, setTheme] = useThemeMode()

  return (
    <>
      {
        theme === DARK
        ? <IconLightMode onClick={() => setTheme(LIGHT)} width={'30px'} height={'30px'} fill={'#fff'}/>
        : <IconDarkMode onClick={() => setTheme(DARK)} width={'30px'} height={'30px'} />
      }
    </>
  )
};

export default Theme