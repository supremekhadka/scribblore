"use client";
import Link from "next/link";
import "./scribble-btn.css";
import Footer from "./components/footer/page";

export default function Home() {
  function play() {
    const audio = new Audio("/scribble.mp3");
    audio.play();
  }

  return (
    <div className="hero-height relative flex flex-col items-center justify-center">
      <h1 className="sm:text-5xl text-4xl font-semibold">NotesDown ✍️</h1>
      <Link href={`/notes`}>
        <button className="btn" onMouseOver={play}>
          <span>Note it Down</span>
        </button>
      </Link>
    </div>
  );
}
