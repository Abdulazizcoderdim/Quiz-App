import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const MenuLinks = () => {
  const {
    data: quizzes,
    error,
    isPending,
  } = useFetch(
    'https://online-json-server-api.up.railway.app/project/66abf970340dd55056fb1ba6/quizzes'
  )

  console.log(quizzes)
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                to={`/quiz/${item.title}`}
                key={item.title}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default MenuLinks
