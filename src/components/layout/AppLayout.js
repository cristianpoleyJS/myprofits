import { onAuthStateChanged, LOGIN_SUCCESS, IS_LOGGED } from 'store/actions/authActions'
import { useThemeMode } from 'hooks/useThemeMode'
import Header from 'components/header/Header'
import Footer from 'components/layout/Footer'
import Content from 'components/layout/Content'
import Loading from 'components/common/Loading'
import AppParticles from 'components/layout/AppParticles'
import Home from 'components/layout/Home'
import { useDispatch, connect } from 'react-redux'
import 'assets/styles/AppLayout.css'
import { useEffect } from 'react'

const AppLayout = ({ isLogged }) => {
    const [themeMode] = useThemeMode()
    const dispatch = useDispatch()
    
    useEffect(() => {
        onAuthStateChanged(
          (userChanged) => {
            dispatch({ type: LOGIN_SUCCESS, payload: userChanged })
            dispatch({ type: IS_LOGGED, payload: true })
          },
          () => {
            dispatch({ type: IS_LOGGED, payload: false })
          })
    }, [dispatch])
    
    return (
      <>
        <main>
          <Header />
          { 
            isLogged === null
            ? <Loading />
            :
                !isLogged
                ? <Home />
                : <Content />
          }
          <Footer />
        </main>
        <AppParticles color={themeMode} />
      </>
    )
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(AppLayout)