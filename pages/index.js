import React from "react";
// import Head from "next/head";
// import Image from "next/image";
import { WordsGame } from "../components/words-game/words-game";
import { GameProvider, MistakesProvider } from "../context/context";

export default function Home() {
  return (
    <GameProvider>
      <MistakesProvider>
        <WordsGame />
      </MistakesProvider>
    </GameProvider>
  );
}
