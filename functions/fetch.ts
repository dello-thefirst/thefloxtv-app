import { MovieProps } from "@/components/MainScreen";

export const fetchTrending = async (periodString: string) => {
      try {
        const request = await fetch(
          `https://api.themoviedb.org/3/trending/all/${periodString}?language=en-US`,
          {
            cache: "no-store",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTliOGUyOGRjM2M5ZDkwMGNlYjQ2OTZiZjJkMjQ3YyIsInN1YiI6IjY1MDA0ZDIwNmEyMjI3MDBjM2I2MDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNP1HXf6xyRe_8C7rR7fljfalpmJZgcry6JN8xLwk8E",
            },
          }
        );
       
        return request.json()
      } catch (error) {
        console.log(error);
      }
}

export const fetchMovieData = async (id: string) => {
      try {
        const request = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=images&language=en`,
          {
            cache: "no-store",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTliOGUyOGRjM2M5ZDkwMGNlYjQ2OTZiZjJkMjQ3YyIsInN1YiI6IjY1MDA0ZDIwNmEyMjI3MDBjM2I2MDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNP1HXf6xyRe_8C7rR7fljfalpmJZgcry6JN8xLwk8E",
            },
          }
        );
        return request.json();
      } catch (error) {
        console.log(error);
      }
}

export const fetchSeriesData = async (id: string) => {
      try {
        const request = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          {
            cache: "no-store",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTliOGUyOGRjM2M5ZDkwMGNlYjQ2OTZiZjJkMjQ3YyIsInN1YiI6IjY1MDA0ZDIwNmEyMjI3MDBjM2I2MDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNP1HXf6xyRe_8C7rR7fljfalpmJZgcry6JN8xLwk8E",
            },
          }
        );
        return request.json();
      } catch (error) {
        console.log(error);
      }
}

export const fetchPopularMovies = async () => {
      try {
        const request = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
          {
            cache: "no-store",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTliOGUyOGRjM2M5ZDkwMGNlYjQ2OTZiZjJkMjQ3YyIsInN1YiI6IjY1MDA0ZDIwNmEyMjI3MDBjM2I2MDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNP1HXf6xyRe_8C7rR7fljfalpmJZgcry6JN8xLwk8E",
            },
          }
        );
        return request.json();
      } catch (error) {
        console.log(error);
      }
}

export const fetchPopularSeries = async () => {
      try {
        const request = await fetch(
          `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
          {
            cache: "no-store",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTliOGUyOGRjM2M5ZDkwMGNlYjQ2OTZiZjJkMjQ3YyIsInN1YiI6IjY1MDA0ZDIwNmEyMjI3MDBjM2I2MDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNP1HXf6xyRe_8C7rR7fljfalpmJZgcry6JN8xLwk8E",
            },
          }
        );
        return request.json();
      } catch (error) {
        console.log(error);
      }
}