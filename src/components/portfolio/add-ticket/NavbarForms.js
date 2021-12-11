import FormStock from 'components/portfolio/add-ticket/FormStock'
import FormCrypto from 'components/portfolio/add-ticket/FormCrypto'
import 'assets/styles/NavbarForms.css'
import Button from 'components/common/Button'
import Modal from 'components/common/Modal'
import { useState } from 'react'

const NavbarForms = ({ email }) => {
    const [openedStock, setOpenedStock] = useState(false)
    const [openedCrypto, setOpenedCrypto] = useState(false)

    const closeModalStock = () => {
        setOpenedStock(false)
    }
    const closeModalCrypto = () => {
        setOpenedCrypto(false)
    }
    return (
        <nav className="navbarforms">
            <Modal isOpen={openedStock} close={closeModalStock} title="Create Stock">
                <FormStock email={email} close={closeModalStock}/>
            </Modal>
            <Modal isOpen={openedCrypto} close={closeModalCrypto} title="Create Crypto">
                <FormCrypto email={email} close={closeModalCrypto}/>
            </Modal>
            <div className="navbarforms__wrapper-buttons">
                <Button onClick={() => setOpenedStock(true)}>
                    Añadir Stock
                </Button>
                <Button onClick={() => setOpenedCrypto(true)}>
                    Añadir Crypto
                </Button>
            </div>
        </nav>
    )
}

export default NavbarForms