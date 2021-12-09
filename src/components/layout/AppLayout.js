import { onAuthStateChanged, LOGIN_SUCCESS, IS_LOGGED } from 'store/actions/authActions'
import { useThemeMode } from 'hooks/useThemeMode'
import Header from 'components/header/Header'
import Content from 'components/layout/Content'
import Home from 'components/layout/Home'
import { useDispatch, connect } from 'react-redux'
import { useEffect } from 'react'

const AppLayout = ({ isLogged }) => {
    useThemeMode()
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
        <Header />
        { 
          isLogged === null
          ? <>loading</>
          :
              !isLogged
              ? <Home />
              : <Content />
        }
      </>
    )
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(AppLayout)