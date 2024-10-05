import Genre from "./genre";

function MoviesPage() {
  return (
    <>
      <Genre
        genre={genre}
        setGenre={setGenre}
        setPage={setPage}
        type="movie"
        value={value}
        setValue={setValue}
      />
    </>
  );
}
