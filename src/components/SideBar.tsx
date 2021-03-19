import { useContext } from "react";
import { Button } from "./Button";

import "../styles/sidebar.scss";

import { MoviesContext } from "../context/MoviesContext";

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useContext(
    MoviesContext
  );

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}