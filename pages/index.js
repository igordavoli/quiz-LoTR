import styled from 'styled-components'
import db from '../db.json'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  height: 100vh;
  width: 100vw; 
  background-size: cover;
  background-position: center;
`;

const Widget = styled.div`
margin: 10px;
padding: 0 15px 0 15px;
border: 1px solid #4caf50;
background-color: ${db.theme.colors.primary}dd;
border-radius: 7px;
overflow: hidden; 
color: ${db.theme.colors.contrastText};
@media (min-width: 650px){
  width: 350px;
  margin-left: 20vw
}
`

export default function Home() {
  return (
      <BackgroundImage>
        <Widget>
          <h2>The lord of the rings</h2>
          <p>loren ipsilum</p>
        </Widget>

        <Widget>
        <h2>Quizes da galera</h2>
          <p>loren ipsilum</p>
        </Widget>

      </BackgroundImage>
  )
}
