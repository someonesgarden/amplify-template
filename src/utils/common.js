export const arrayChunk = ([...array], size = 1) => {
  return array.reduce(
    (acc, value, index) =>
      index % size ? acc : [...acc, array.slice(index, index + size)],
    [],
  )
}

// function omit_ngtracks(tracks) {
//   return (
//     tracks &&
//     tracks.length > 0 &&
//     tracks.filter((tr) => {
//       const matched = ngtrack_ids.filter((id) => tr && id === tr.id)
//       return matched.length === 0
//     })
//   )
// }
