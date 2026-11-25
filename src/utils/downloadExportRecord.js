import { exportToPDF, exportToExcel } from "./exportUtils";

const downloadExportRecord = (record) => {
  if (!record) {
    window.alert("Export record not found.");
    return;
  }

  if (!record.columns || !record.data) {
    window.alert(
      "This report was generated before the download feature. Please generate it again.",
    );
    return;
  }

  const exportOptions = {
    title: record.title || record.module || "Business Report",
    columns: record.columns,
    data: record.data,
    fileName: record.name || "business_report",
  };

  try {
    if (record.format === "PDF") {
      exportToPDF(exportOptions);
    } else if (record.format === "Excel") {
      exportToExcel(exportOptions);
    } else {
      window.alert("Unsupported export format.");
    }
  } catch (error) {
    console.error("Download failed:", error);
    window.alert("Unable to download this report.");
  }
};

export default downloadExportRecord;
