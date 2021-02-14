import { useRouter } from 'next/router';
import db from '../db.json';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Logo from '../src/components/Logo';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <Logo />
        <Widget
          as={motion.section}
          initial="hidden"
          transition={{
            duration: 0.2
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-5%'},
          }}
          animate="show"
        >
          <Widget.header>
            <h1>The lord of the rings</h1>
          </Widget.header>
          <Widget.content 
            as="form"
            className="form"
            onSubmit={event => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
          > 
            <Input
              nome="userName"
              placeholder="Diz seu nome aí!"
              onChange={event => setName(event.target.value)}
            />
            <Button type="submit" disabled={name === ''}>Jogar</Button>
          </Widget.content>
        </Widget>
        <Widget
          as={motion.section}
          initial="hidden"
          transition={{
            delay: 0.05,
            duration: 0.2
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-5'},
          }}
          animate="show"
        >
          <Widget.content>
            <h2>Quizes da galera</h2>
            <ul>
              {db.external.map(linkExterno => {
                const [projectName, gitHubUser] = linkExterno.replace('https://', '')
                  .replace('.vercel.app/', '')
                  .split('.')
                return (
                  <li key={linkExterno}>
                    <Widget.topic
                      as={Link}
                      href={`/quiz/${projectName}___${gitHubUser}`}
                    >
                      {`${gitHubUser}/${projectName}`}
                    </Widget.topic>
                  </li>
                )
              })}
            </ul>
          </Widget.content>
        </Widget>
        <Footer
          as={motion.section}
          initial="hidden"
          transition={{
            delay: 0.1,
            duration: 0.2
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-5%'},
          }}
          animate="show"
        />

      </QuizContainer>
      <GitHubCorner projecUrl="https://github.com/omariosolto" />
    </QuizBackground>
  );
}
