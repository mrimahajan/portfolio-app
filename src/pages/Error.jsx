import { Link, useNavigate } from "react-router-dom";
import route from "../routes/route.json";
import { useEffect, useState } from "react";
const Error = () => {
  const [count, setCount] = useState(5);
  const navigation = useNavigate();

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    } else {
      //redirect the user
      navigation(route.HOME);
    }
  }, [count, navigation]);

  return (
    <>
      <main id="main">
        <div>
          <h1 className="mt-3 text-danger">Error</h1>
          <p className="text-danger">
            Please redirect to <Link to={route.HOME}> Home </Link>page
          </p>

          <p>You will be redirected to Home page in {count} seconds</p>
        </div>
      </main>
    </>
  );
};

export default Error;
