import { ThemeProvider } from 'styled-components';
// import QuizScreen from '../../src/screens/Quiz'
import Quiz from '../quiz'

export default function QuizDaGaleraPage({dbExterno}) {
  return (
    <div style={{color:'black'}}>
     <ThemeProvider theme={dbExterno.theme} >
        <Quiz 
          externalQuestions={dbExterno.questions} 
          externalBg={dbExterno.bg} />
     </ThemeProvider>
      {/* <pre>
        {JSON.stringify(dbExterno.questions, null, 4)}
      </pre> */}
    </div>
  );
}

export async function getServerSideProps(context) {  
  const [projecName, gitHubUser] = context.query.id.split('___');
  try {
    
  const dbExterno = await fetch(`https://${projecName}.${gitHubUser}.vercel.app/api/db`)
  .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Falha em pegar dados')
  })
  .then((resJson) => resJson)
  .catch(err => console.log(err))

  return {
    props: {
      dbExterno
    },
  };

} catch (error) {
  console.log(error)
  throw new Error;
}

}