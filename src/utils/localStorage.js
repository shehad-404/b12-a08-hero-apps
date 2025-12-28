const key = "installedApps";

export const getApps = () =>
  JSON.parse(localStorage.getItem(key)) || [];

export const saveApp = app => {
  const apps = getApps();
  localStorage.setItem(key, JSON.stringify([...apps, app]));
};

export const isInstalled = id =>
  getApps().some(app => app.id === id);

export const removeApp = id => {
  const apps = getApps().filter(app => app.id !== id);
  localStorage.setItem(key, JSON.stringify(apps));
};
