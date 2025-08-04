import { FacturaData } from "@/types/factura";
import { jsPDF } from "jspdf";

export const gerarPDF = (factura: FacturaData) => {
  const doc = new jsPDF();
  const marginX = 15;
  let y = 20;

  // Cabecalho
  doc.setFont("Times", "bold");
  doc.setFontSize(20);
  doc.text("Factura", marginX, y);

  doc.setFontSize(12);
  doc.setFont("Times", "normal");
  doc.text(`#${factura.numeroFactura}`, 200 - marginX, y, { align: "right" });
  y += 10;
  doc.text(`Data: ${new Date(factura.data).toLocaleDateString()}`, 200 - marginX, y, { align: "right" });
  y += 15;

  // Emitente e Cliente
  doc.setFontSize(10);
  doc.setFont("Times", "bold");
  doc.text("Emitente:", marginX, y);
  doc.text("Cliente:", 110, y);
  y += 6;

  doc.setFont("Times", "normal");
  doc.text(factura.empresa, marginX, y);
  doc.text(factura.cliente, 110, y);
  y += 6;

  doc.text(`Nuit: ${factura.empresaNuit}`, marginX, y);
  doc.text(`Nuit: ${factura.clienteNuit}`, 110, y);
  y += 6;

  doc.text(`Contacto: ${factura.empresaContacto}`, marginX, y);
  doc.text(`Contacto: ${factura.clienteContacto}`, 110, y);
  y += 6;

  doc.text(`Endereço: ${factura.empresaEndereco}`, marginX, y);
  y += 12;

  // --- Tabela ---
  const tableX = marginX;
  const tableWidth = 210 - 2 * marginX;
  const rowHeight = 8;
  const headerY = y;

  const descWidth = 90;
  const remainingWidth = tableWidth - descWidth;
  const otherColWidth = remainingWidth / 3;

  const colDescricaoX = tableX + 2;
  const colQtdX = tableX + descWidth + 2;
  const colPrecoX = tableX + descWidth + otherColWidth + 2;
  const colValorX = tableX + tableWidth - 2;

  // Table Header
  doc.setFillColor(230, 230, 230);
  doc.rect(tableX, headerY, tableWidth, rowHeight, "F");

  doc.setFont("Times", "bold");
  doc.setFontSize(12);
  doc.text("Descrição", colDescricaoX, headerY + 6);
  doc.text("Qtd", colQtdX + otherColWidth / 2, headerY + 6, { align: "right" });
  doc.text("Preço", colPrecoX + otherColWidth / 2, headerY + 6, { align: "right" });
  doc.text("Valor", colValorX, headerY + 6, { align: "right" });

  y += rowHeight;

  // Table Items
  doc.setFont("Times", "normal");
  doc.setFontSize(10);

  factura.items.forEach((item) => {
    const descricao = item.descricao;
    const quantidade = item.quantidade.toString();
    const preco = `${Number(item.precoUnitario).toFixed(2)} Mzn`;
    const valor = `${Number(item.valor).toFixed(2)} Mzn`;

    const maxDescWidth = descWidth - 5;
    const truncatedDesc = doc.splitTextToSize(descricao, maxDescWidth)[0];

    doc.text(truncatedDesc, colDescricaoX, y + 5);
    doc.text(quantidade, colQtdX + otherColWidth / 2, y + 5, { align: "right" });
    doc.text(preco, colPrecoX + otherColWidth / 2, y + 5, { align: "right" });
    doc.text(valor, colValorX, y + 5, { align: "right" });

    y += rowHeight;
  });

  // Separator Line
  y += 2;
  doc.setDrawColor(180);
  doc.line(tableX, y, tableX + tableWidth, y);
  y += 12;

  // Totals
  const totalsLabelX = colPrecoX;
  const totalsValueX = colValorX;

  doc.setFont("Times", "bold");
  doc.text("Subtotal:", totalsLabelX, y);
  doc.setFont("Times", "normal");
  doc.text(`${factura.subtotal.toFixed(2)} Mzn`, totalsValueX, y, { align: "right" });
  y += 6;

  doc.setFont("Times", "bold");
  doc.text(`IVA (${factura.taxaImposto}%):`, totalsLabelX, y);
  doc.setFont("Times", "normal");
  doc.text(`${factura.taxaValor.toFixed(2)} Mzn`, totalsValueX, y, { align: "right" });
  y += 6;
  
  // aumentar espacmento nas linhas
  doc.setLineWidth(0.5); 
  doc.setDrawColor(180);
  doc.line(totalsLabelX, y, totalsValueX, y);
  doc.setLineWidth(0.2); 
  y += 6; 

  doc.setFont("Times", "bold");
  doc.setFontSize(12);
  doc.text("Total:", totalsLabelX, y);
  doc.text(`${factura.total.toFixed(2)} Mzn`, totalsValueX, y, { align: "right" });

  doc.save(`invoice-${factura.numeroFactura}.pdf`);
};