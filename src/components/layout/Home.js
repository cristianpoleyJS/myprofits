import previewAppImage from 'assets/images/home.png'
import 'assets/styles/Home.css'

const Home = () => {
    return (
        <>
            <section className="home">
                <p className="home__best-app">🚀 Controla tus finanzas fácil y rápidamente</p>
                <div className="home__wrapper-content">
                    <span>
                        <h1 className="home__title">Enjoy the buy and sell crypto</h1>
                        <p className="home__subtitle">Con esta aplicación puedes añadir tanto Stocks como Criptomonedas para controlar si llevas tu Portfolio en positivo o negativo</p>
                    </span>
                    <img src={previewAppImage} alt="preview app"/>
                </div>
            </section>
        </>
    )
}

export default Home
