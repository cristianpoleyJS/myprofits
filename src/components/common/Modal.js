import 'assets/styles/Modal.css'
import IconEquis from 'components/icons/IconEquis'
import { createPortal } from 'react-dom'
import Button from './Button'

const Modal = ({ isOpen, close, showButtonCreate, title, children, formId }) => {
    return isOpen
    ? createPortal(
        <>
            <div className="modal-backdrop"></div>
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">{title}</div>
                            <IconEquis width={30} height={30} cursor="pointer" onClick={() => close()} />
                        </div>
                        <div className="modal-body">
                            {children}    
                        </div>
                        <div className="modal-footer">
                            <Button bgColor="transparent" onClick={() => close()}>Close</Button>
                            { showButtonCreate && <Button type="submit" form={formId}>Create</Button> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    , document.getElementById('modal-root'))
    : null
}

export default Modal