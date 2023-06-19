import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { detectToxicText } from "../tensorflow/toxicity";
import { useEffect, useState } from "react";
import useDebounce from "../lib/hooks/useDebouce";

const SocialMediaModal = () => {
  const [isToxic, setIsToxic] = useState<boolean>(false);

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 200);

  const handleChange = async (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    detectToxicText(value).then((match) => setIsToxic(match));
  }, [debouncedValue]);

  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "50%",
          border: "3px solid green",
          padding: "10px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <h1>AI Text analyzer or something</h1>
        <br />
        Channel all your angry words into this text box without being judged ™️
        <br />
        <br />
        <textarea
          onChange={handleChange}
          placeholder="Text here..."
          cols={30}
          rows={10}
        />
        {isToxic && (
          <>
            <br />
            <h1>Damn bro</h1>
          </>
        )}
      </div>
    </>
  );
};

export default SocialMediaModal;

export const getServerSideProps: GetServerSideProps = (
  context: GetServerSidePropsContext
) => {
  return {
    props: {},
  };
};
