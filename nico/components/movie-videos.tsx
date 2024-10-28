// import { API_URL } from "../app/(home)/page";
import { API_URL } from "../app/contants";
import styles from "../styles/movie-videos.module.css";

// const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getVideo(id: string) {
  new Error("Something broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MoiveVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          className={styles.iframe}
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
