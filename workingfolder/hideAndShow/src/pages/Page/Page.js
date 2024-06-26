import Button from "../../components/Button";

const Page = ({ onPage, setOnPage }) => {
  return (
    <>
      <Button
        btn={"Show"}
        btnLink={"/next"}
        onClick={() => setOnPage(onPage + 1)}
      />
    </>
  );
};

export default Page;
