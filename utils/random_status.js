export function pick_random_status(statuses) {
  if (statuses?.length > 0) {
    let size = statuses?.length
    let index = Math.floor(Math.random() * size)
    return statuses[index]
  }
  return ' '
}
