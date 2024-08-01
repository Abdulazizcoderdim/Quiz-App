import { Link, useNavigate, useRouteError } from 'react-router-dom'

function ErrorPage() {
  let navigate = useNavigate()
  const error = useRouteError()
  console.log(error)

  const goBack = () => {
    navigate(-1)
  }

  if (error.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <h1>Oops! Page Not Found</h1>
          <h2>
            It seems you've stumbled upon a page that doesn't exist. Maybe it
            was abducted by aliens, or perhaps it decided to take a vacation.
            Either way, it's not here.
          </h2>

          <button className="btn" onClick={goBack}>
            Go Back
          </button>
          <Link to={'/'} className="btn">
            Go To Home
          </Link>
          <h4>
            If you think something is broken, please contact us and we'll get on
            it like a squirrel on a nut.
          </h4>
        </div>
      </div>
    )
  }

  return (
    <div className="error-container container">
      <div>
        <h1>
          Oops! <br />
        </h1>
        <span style={{ color: 'red' }}>{error.message}</span>
        <button className="btn" onClick={goBack}>
          Go Back
        </button>
        <Link to={'/'} className="btn">
          Go To Home
        </Link>
        <h4>
          If you think something is broken, please contact us and we'll get on
          it like a squirrel on a nut.
        </h4>
      </div>
    </div>
  )
}

export default ErrorPage
