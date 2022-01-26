const useStorage = (data, storageItem) => {
  localStorage.setItem(storageItem, JSON.stringify(data));
};

export default useStorage;
