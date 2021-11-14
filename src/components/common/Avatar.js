import styled from 'styled-components'

const Img = styled.img`
    border-radius: 100%;
    width: ${props => props.width};
    height: ${props => props.height};
`

const Avatar = ({ photo, height, width }) => {
    return (
        <>
            <Img src={photo} height={height} width={width} alt="avatar user" />
        </>
    )
}

export default Avatar