import previewAppImage from 'assets/images/home.png'
import 'assets/styles/Home.css'
import Login from 'components/auth/Login'

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="home__left">
                    <div>
                        <p className="home__left--best-app">🚀 Controla tu portfolio fácil y rápidamente</p>
                        <h1 className="home__left--title">Conéctate con tu cuenta de Google y registra tus acciones y criptomonedas</h1>
                        <p className="home__left--subtitle">Con esta aplicación puedes añadir tanto Acciones como Criptomonedas para controlar si llevas tu Portfolio en positivo o negativo</p>
                        <Login text="Conéctate con Google"/>
                    </div>
                </div>
                <div className="home__right">
                    <img src={previewAppImage} alt="preview app" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default Home
