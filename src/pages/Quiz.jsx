import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Test } from '../components'
import { useFetch } from '../hooks/useFetch'

function Quiz() {
  const { title } = useParams()
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://online-json-server-api.up.railway.app/project/66abf970340dd55056fb1ba6/quizzes?title=${title}`
  )

  useEffect(() => {
    document.title = 'Quiz' + ' ' + title
  }, [title])

  return (
    <section className="quiz-container container">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </section>
  )
}

export default Quiz
