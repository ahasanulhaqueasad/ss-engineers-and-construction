const STORAGE_KEY = "ss-engineers-export-history";

// Get saved export history
export const getExportHistory = () => {
  try {
    const savedHistory = localStorage.getItem(STORAGE_KEY);

    return savedHistory ? JSON.parse(savedHistory) : [];
  } catch (error) {
    console.error("Failed to load export history:", error);
    return [];
  }
};

// Save export history
export const saveExportHistory = (history) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error("Failed to save export history:", error);
  }
};

// Add a new export record
export const addExportHistory = (record) => {
  const currentHistory = getExportHistory();

  const updatedHistory = [record, ...currentHistory];

  saveExportHistory(updatedHistory);

  return updatedHistory;
};

// Clear export history
export const clearExportHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};
