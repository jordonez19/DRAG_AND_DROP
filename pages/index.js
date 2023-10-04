import Head from "next/head";
import DropDagme from "./components/DropGame";
import React, { useState, useEffect } from "react";
import { questionsandanswers } from "./data";
export default function Home() {
  const [contador, setContador] = useState(0);

  const QA = questionsandanswers.find((qa) => qa.id === contador);

  const question = QA ? QA.question : "";
  const answers = QA ? QA.answers : [];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Juego para practicar git commands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <DropDagme
          contador={contador}
          setContador={setContador}
          question={question}
          answers={answers}
        />
        {contador !== 0 ? (
          <div className="center">
            <button onClick={() => setContador(0)}>Reiniciar juego</button>
          </div>
        ) : null}
      </>
    </>
  );
}
