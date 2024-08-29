// import { resolve } from "path";
import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MoiveInfo from "../../../../components/movie-info";
import MoiveVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h4>Movie detail page</h4>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MoiveInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MoiveVideos id={id} />
      </Suspense>
    </div>
  );
}
