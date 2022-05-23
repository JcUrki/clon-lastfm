export function getSongsForGenre(array, genre) {
  return array.filter(s => s.genre.includes(genre));
};
