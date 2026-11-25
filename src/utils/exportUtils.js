import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

// PDF Export
export const exportToPDF = ({
  title = "Business Report",
  columns = [],
  data = [],
  fileName = "report",
}) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, 18);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 25);

  const tableColumns = columns.map((column) => ({
    header: column.label,
    dataKey: column.key,
  }));

  autoTable(doc, {
    columns: tableColumns,
    body: data,
    startY: 32,
    theme: "grid",
    styles: {
      fontSize: 8,
      cellPadding: 3,
      overflow: "linebreak",
    },
    headStyles: {
      fillColor: [16, 42, 67],
      textColor: 255,
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [241, 245, 249],
    },
    margin: {
      left: 14,
      right: 14,
    },
  });

  doc.save(`${fileName}.pdf`);
};

// Excel Export
export const exportToExcel = ({
  title = "Business Report",
  columns = [],
  data = [],
  fileName = "report",
}) => {
  const worksheetData = [
    columns.map((column) => column.label),
    ...data.map((item) => columns.map((column) => item[column.key] ?? "")),
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  worksheet["!cols"] = columns.map((column) => ({
    wch: Math.max(column.label.length + 5, 18),
  }));

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, title.slice(0, 31));

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
