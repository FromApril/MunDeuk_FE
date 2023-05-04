export const getSessionStorageItem = (key: string) => {
  const storageItem = sessionStorage.getItem(key) || "";

  try {
    return JSON.parse(storageItem);
  } catch (e) {
    console.error(e);

    return storageItem;
  }
};

export const setSessionStorageItem = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};
