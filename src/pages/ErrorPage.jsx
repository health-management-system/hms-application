import { useRouteError, useNavigate } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  let navigate = useNavigate()

  const returnHome = () => {
    navigate('/')
  }

  return (
    <div className="error-background">
      <div className="error-page">
        <h1 className="page-not-found-header rounded-md">Page Not Found</h1>
        <div className="error-div rounded-md">
          The page you were looking for was not found. Please try going back to a previous page.
        </div>
        <button className="error-page-button hover:bg-priHover rounded-md" onClick={returnHome}>Return Home</button>
      </div> 
    </div>

  );
}