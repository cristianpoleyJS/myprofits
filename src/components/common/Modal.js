import styled from 'styled-components'
import { createPortal } from 'react-dom'

const Div = styled.div`
    background-color: #eee;
    border-top: solid 2px palevioletred;
    padding: 20px 25px;
    width: 500px;
    box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
`

const Modal = ({ isOpen, children }) => {
    return isOpen
    ? createPortal(
        <Div className="modal">
            {children}
        </Div>
    , document.getElementById('modal-root'))
    : null
}

export default Modal