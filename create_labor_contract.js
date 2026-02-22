const { Document, Packer, Paragraph, TextRun, AlignmentType, UnderlineType, PageMargin } = require("docx");
const fs = require("fs");

const doc = new Document({
    sections: [{
        properties: {
            page: {
                margin: {
                    top: 1134, // 20mm
                    bottom: 1134, // 20mm
                    left: 1701, // 30mm
                    right: 850, // 15mm
                },
            },
        },
        children: [
            // Quốc hiệu - Tiêu ngữ
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", bold: true, size: 24, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "Độc lập - Tự do - Hạnh phúc", bold: true, size: 26, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "---------------", size: 24, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 200 } }),

            // Tên văn bản
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "HỢP ĐỒNG LAO ĐỘNG", bold: true, size: 30, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 200 } }),

            // Căn cứ
            new Paragraph({
                children: [
                    new TextRun({ text: "Căn cứ Bộ luật Lao động ngày 20 tháng 11 năm 2019;", italics: true, size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Căn cứ nhu cầu và khả năng của hai bên.", italics: true, size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 200 } }),

            // Bên A
            new Paragraph({
                children: [
                    new TextRun({ text: "BÊN A (Người sử dụng lao động): ", bold: true, size: 28, font: "Times New Roman" }),
                    new TextRun({ text: "........................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Địa chỉ: .............................................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Đại diện bởi Ông/Bà: ................................................. Chức vụ: .....................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 100 } }),

            // Bên B
            new Paragraph({
                children: [
                    new TextRun({ text: "BÊN B (Người lao động): ", bold: true, size: 28, font: "Times New Roman" }),
                    new TextRun({ text: "........................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Ngày tháng năm sinh: ............................................ Giới tính: ........................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Số CCCD/CMND: .................................................. Ngày cấp: ........................ Nơi cấp: ...................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Địa chỉ thường trú: ...........................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 200 } }),

            // Điều khoản chính
            new Paragraph({
                children: [
                    new TextRun({ text: "Hai bên thỏa thuận ký kết Hợp đồng lao động với các điều khoản sau:", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Điều 1: Công việc và địa điểm làm việc", bold: true, size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- Vị trí chuyên môn: ...........................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- Địa điểm làm việc: ..........................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Điều 2: Thời hạn hợp đồng", bold: true, size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- Loại hợp đồng: ...............................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- Thời hạn: Từ ngày ..../..../20.... đến ngày ..../..../20....", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Điều 3: Mức lương và hình thức trả lương", bold: true, size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- Mức lương chính: ...........................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "- Hình thức trả lương: .......................................................................................................................", size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 400 } }),

            // Chữ ký
            new Paragraph({
                children: [
                    new TextRun({ text: "\t\tNGƯỜI LAO ĐỘNG\t\t\t\tNGƯỜI SỬ DỤNG LAO ĐỘNG", bold: true, size: 28, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "\t\t  (Ký và ghi rõ họ tên)\t\t\t\t  (Ký tên và đóng dấu)", italics: true, size: 24, font: "Times New Roman" }),
                ],
            }),
            new Paragraph({ text: "", spacing: { after: 1000 } }),
            new Paragraph({
                children: [
                    new TextRun({ text: "\t\t........................................\t\t\t\t........................................", size: 28, font: "Times New Roman" }),
                ],
            }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Hop_Dong_Lao_Dong_Mau.docx", buffer);
});
