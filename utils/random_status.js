export function pick_random_status(profile) {
  if (profile?.statuses?.length > 0) {
    let size = profile?.statuses?.length
    let index = Math.floor(Math.random() * (size + 1))
    return profile.statuses[index]
  }
  return ' '
}
