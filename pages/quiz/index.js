import db from '../../db.json';
import Widget from '../../src/components/Widget';
import Button from '../../src/components/Button'
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import AlternativesForm from '../../src/components/AlternativesForm';
import BackArrow from '../../src/components/BackArrow';
function QuestionWidget({
  question,
  numberOfQuestions,
  questionIndex,
  alternatives,
  onSubmit,
  addResult,
}) {

  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = ` question_${questionIndex}`;
  const isQuestionsCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.header>
        <BackArrow href="/" />
        <h1>{`Pergunta ${questionIndex + 1} de ${numberOfQuestions}`}</h1>
      </Widget.header>
      <img
        alt="Descrição"
        src={question.image}
        style={{
          marginTop: '5px',
          width: '100%',
          height: '150px',
          objectFit: 'scale-down',
        }}
      />
      <Widget.content >
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true)
            setTimeout(() => {
              addResult(isQuestionsCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined)
            }, 1 * 1000)
          }}>

          {alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`
            const alternativeStatus = isQuestionsCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.topic
                as='label'
                key={alternativeId}
                htmlFor={alternativeId}
                data-Selected={isSelected}
                data-status={ isQuestionSubmited && alternativeStatus}
              >
                <input
                  hidden
                  type="radio"
                  id={alternativeId}
                  name={questionId}
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.topic>)
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isQuestionsCorrect && <p>Acertou</p> }

          {isQuestionSubmited && !isQuestionsCorrect && <p>errou</p> }
        </AlternativesForm>
      </Widget.content>
    </Widget>
  );
}

function ResultWidget({ results, numberOfQuestions }) {
  return (
    <Widget>
      <Widget.header>
        Resutado  
      </Widget.header>

      <Widget.content>
        <p>
          {`
            Você acertou
            ${results.filter(x => x).length}          
            de 
            ${numberOfQuestions}
            perguntas
          `}
            {/* ${results.reduce((soma, resultado) => { 
                 resultado === true && soma ++;
                return soma;
              }, 0) 
             } */}
        </p>
         <ul>
          {results.map((res, i) => (
            <li 
              key={`result_${results}`}
            >
              {`# ${i + 1} - ${res === true? 'Acertou' : 'Errou'}`}
            </li>
          ) )} 
  
        </ul>
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
      <img src={db.loadingGif} height="75px" width=""/>      
      </Widget.content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResult] = React.useState([]);
  const questions = externalQuestions || db.questions;
  const numberOfQuestions = questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const alternatives = questions[questionIndex].alternatives;
  const bg = externalBg || db.bg;

  function addResult(result) {
    setResult([
      ...results,
      result,
    ])
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000);
    //nasce === didMount
  }, [])

  function handleSubmitQuiz() {   
    if (questionIndex < numberOfQuestions - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            numberOfQuestions={numberOfQuestions}
            alternatives={alternatives}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && (
          <LoadingWidget />
        )}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} numberOfQuestions={ numberOfQuestions} />
        )}

      </QuizContainer>
      <GitHubCorner projecUrl="https://github.com/omariosolto" />
    </QuizBackground>
  )
}