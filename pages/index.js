import Head from "next/head";
import Image from "next/image";
import { WordsGame } from "../components/words-game/words-game";
import { Provider } from "../context/context";

export default function Home() {
  return (
    <Provider>
      <WordsGame />
    </Provider>
  );
}
