import { Navigate } from "react-router-dom";
import Button from "../../components/Button";

const Prev = ({ onPage, setOnPage }) => {
  return (
    <>
      {!onPage ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <Button
            btn={"Show"}
            btnLink={"/next"}
            onClick={() => setOnPage(onPage + 1)}
          />
          <Button
            btn={"Hide"}
            btnLink={"/prev"}
            onClick={() => setOnPage(onPage - 1)}
          />
        </>
      )}
    </>
  );
};

export default Prev;
