//Local Storage
export function saveLocalInfo(name, value) {
  if (value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
}

export function getLocalInfo(name) {
  const value = localStorage.getItem(name);
  return value ? JSON.parse(value) : null;
}

export function setLocalInfo(name, newValue) {
  localStorage.setItem(name, JSON.stringify(newValue));
}

export function removeLocalInfo(name) {
  localStorage.removeItem(name);
}