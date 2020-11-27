export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log('[App] Error getting data from localSotrage', e);
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log('[App] Error saving data in localSotrage', e);
  }
};
