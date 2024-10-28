// import { API_URL } from "../app/(home)/page";
import { API_URL } from "../app/contants";
import styles from "../styles/movie-info.module.css";

// const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MoiveInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p className={styles.release_date}>{movie.release_date}</p>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage →
        </a>
      </div>
    </div>
  );
}