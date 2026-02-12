"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "Tu es sûre ?",
      "Aller s'il te plait <3",
      "Aller dis ouiii",
      "Je t'en conjure 🥹",
      "Pitié dis oui 🥹",
      "C'est pas cool :(",
      "Je suis fâché 😠",
      "Dis oui et je suis plus fâché",
      "S'il te plait",
      "Dis oui",
      ":((((",
      "Non :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/milk-and-mocha-kiss-2vwjr4s7usa2g5kj.gif" />
          <div className="my-4 text-4xl font-bold">Ouiiiii, bibou content :) !!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Veux-tu être ma valentine ???</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Oui
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
