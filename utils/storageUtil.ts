export const getSessionStorageItem = (key: string) => {
  const storageItem = sessionStorage.getItem(key) || '';

  if (!storageItem) {
    return null;
  }

  try {
    return JSON.parse(storageItem);
  } catch (e) {
    console.error(e);

    return storageItem;
  }
};

export const setSessionStorageItem = (key: string, value: string) => {
  if (!key || !value) {
    throw new Error('잘못된 key를 전달했습니다.');
  }

  sessionStorage.setItem(key, value);
};
