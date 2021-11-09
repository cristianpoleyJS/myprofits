import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.primary ? 'red' : 'yellow'};
    color: ${props => props.primary ? 'white' : 'black'};
    padding: 10px 16px;
    border: 2px solid black;
    border-radius: 3px;
`

