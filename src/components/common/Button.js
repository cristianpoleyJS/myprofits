import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.bgColor ?? '#495bee'};
    color: ${props => props.color ?? '#fff'};
    padding: ${props => props.padding ?? '14px 1rem'};
    border: ${props => props.border ?? 'transparent'};
    border-radius: 30px;
    cursor: pointer;
    text-transform: ${props => props.textTransform ?? 'capitalize'};
    font-family: inherit;
`

export default Button