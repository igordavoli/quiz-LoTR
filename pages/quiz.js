import styled from 'styled-components';
import { useRouter } from 'next/router'
import db from '../db.json';
import Logo from '../src/components/Logo'
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';



function QuestionWidget({ question, numberOfQuestions, questionIndex ,alternatives}) {
  const questionId =  ` question_${questionIndex}`

  return (
    <Widget>
    <Widget.header>
      <h1>{`Pergunta ${questionIndex + 1} de ${numberOfQuestions}`}</h1>
    </Widget.header>
    <img 
      alt="Descrição"
      style={{
        marginTop: '5px',
        width: '100%',
        height: '150px',
        objectFit: 'scale-down',
      }}
      src={question.image}
    />
    <Widget.content >
     <h2>{question.title}</h2>
     <p>{question.description}</p>
      
      <form 
        onSubmit={(event)=>{
          event.preventDefault();
          // onSubmit()
        }}>
        {alternatives.map((alternative, alternativeIndex) => {
          const alternativeId = `alternative_${alternativeIndex}`
          return (
          <Widget.topic htmlFor={alternativeId} as='label'>
            <input
            /*style={{display:'none'}}*/ 
            type="radio" id={alternativeId} name={questionId}/>  
            {alternative} 
          </Widget.topic>)
        })}

      </form>

      <Button 
      type="submit"
      value=''
      >
        Confirmar
      </Button>
    </Widget.content>
  </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.header>
        Carregando...
      </Widget.header>

      <Widget.content>
        [Desafio do Loading...]
      </Widget.content>
    </Widget>
  );
}


const screenStates = {
  QUIZ: 'QUIZ',  
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const questionsArr = db.questions;
  const numberOfQuestions = questionsArr.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const alternatives = db.questions[questionIndex].alternatives;

  React.useEffect(() => {
    setTimeout(() => {
    setScreenState(screenStates.QUIZ)  
    }, 1 * 1000);
    //nasce === didMount
  }, []) 
  
  function handleSubmit() {
    const nexQuestion = questionIndex + 1;
    if (nexQuestion < numberOfQuestions) {
      currentQuestion(questionIndex + 1);
    } else {
      
    }  
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget 
            question={question}
            questionIndex={questionIndex}
            numberOfQuestions={numberOfQuestions}
            alternatives={alternatives} 
            onSubmit={handleSubmit}
          /> 
        )}

        {screenState === screenStates.LOADING  && <LoadingWidget/>}      
        
        {screenState === screenStates.RESULT && <Widget style={{padding: '20px'}}>Parabéns, você acertou XX questões</Widget>}
      </QuizContainer>
      <GitHubCorner projecUrl="https://github.com/omariosolto"/>
    </QuizBackground>
  )
}