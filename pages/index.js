import styled from 'styled-components';
import { useRouter } from 'next/router'
import db from '../db.json';
import Head from 'next/head';
import Logo from '../src/components/Logo'
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log(name, setName)
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <Logo/>
        <Widget>
          <Widget.header>
            <h1>The lord of the rings</h1>
          </Widget.header>
          <Widget.content >
            <form onSubmit={ event => {
              event.preventDefault(); 
              router.push(`/quiz?name=${name}`);
              }}
            >
              <Input 
                nome="userName"
                placeholder="Diz seu nome aí!" 
                onChange={ event=>setName(event.target.value) } 
                />
              <Button type="submit" disabled={name.length === 0 }>Jogar</Button>
            </form>
          </Widget.content>
        </Widget>
        <Widget>
          <Widget.content>
            <h2>Quizes da galera</h2>
            <p>loren ipsilum</p>
            </Widget.content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projecUrl="https://github.com/omariosolto"/>
    </QuizBackground>
  );
}
