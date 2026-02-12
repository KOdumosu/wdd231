export function savePreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getPreference(key) {
  return JSON.parse(localStorage.getItem(key));
}
