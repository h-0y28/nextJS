// import { resolve } from "path";
import { Suspense } from "react";
// import { API_URL } from "../../../(home)/page";
import MoiveInfo, { getMovie } from "../../../../components/movie-info";
import MoiveVideos from "../../../../components/movie-videos";
import { title } from "process";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MoiveInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MoiveVideos id={id} />
      </Suspense>
    </div>
  );
}
