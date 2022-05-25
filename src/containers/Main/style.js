import styled from 'styled-components'

export const ContainerStyled = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1024px;
`

export const ContinerVideo = styled.video`
position: absolute;
width: 100%;
left: 50%;
top: 50%;
height: 100%;
object-fit: cover;
transform: translate(-50%, -50%);
z-index: -1;
opacity: 0.8;
`