import 'assets/styles/Modal.css'
import { createPortal } from 'react-dom'

const Modal = ({ isOpen, close, title, children }) => {
    return isOpen
    ? createPortal(
        <>
            <div className="modal-backdrop"></div>
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4">{title}</div>
                            <button type="button" className="btn-close"></button>
                        </div>
                        <div className="modal-body">
                            {children}    
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => close()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    , document.getElementById('modal-root'))
    : null
}

export default Modal