import FormStock from 'components/portfolio/add-ticker/FormStock'
import FormCrypto from 'components/portfolio/add-ticker/FormCrypto'
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
    
    const handleCreateStock = () => {
        console.log('entro')
    }
    return (
        <nav className="navbarforms">
            <Modal
                isOpen={openedStock}
                showButtonCreate={true}
                create={handleCreateStock}
                close={closeModalStock}
                title="Create Stock">
                    <FormStock email={email} close={closeModalStock}/>
            </Modal>
            <Modal
                isOpen={openedCrypto}
                showButtonCreate={true}
                create={handleCreateStock}
                close={closeModalCrypto}
                title="Create Crypto">
                    <FormCrypto email={email} close={closeModalCrypto}/>
            </Modal>
            <div className="navbarforms__wrapper-buttons">
                <Button onClick={() => setOpenedStock(true)}>
                    Add Stock
                </Button>
                <Button onClick={() => setOpenedCrypto(true)}>
                    Add Crypto
                </Button>
            </div>
        </nav>
    )
}

export default NavbarForms