const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require("docx");
const fs = require("fs");

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    text: "PHIẾU KHẢO SÁT ĐỘ THÔNG DỤNG CỦA OPENCLAW",
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Kính gửi quý người dùng,",
                            bold: true,
                        }),
                    ],
                }),
                new Paragraph({
                    text: "Để hiểu rõ hơn về mức độ phổ biến và hiệu quả của OpenClaw trong công việc hàng ngày, chúng con xin gửi đến Thầy/quý vị phiếu khảo sát ngắn này.",
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: "1. Bạn đã nghe đến OpenClaw bao giờ chưa?", bold: true })],
                }),
                new Paragraph({ text: "□ Chưa bao giờ" }),
                new Paragraph({ text: "□ Đã nghe qua nhưng chưa sử dụng" }),
                new Paragraph({ text: "□ Đã và đang sử dụng" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: "2. Bạn sử dụng OpenClaw vào mục đích gì chính?", bold: true })],
                }),
                new Paragraph({ text: "□ Soạn thảo văn bản" }),
                new Paragraph({ text: "□ Quản lý công việc" }),
                new Paragraph({ text: "□ Giải trí/Trò chuyện" }),
                new Paragraph({ text: "□ Khác: ....................................." }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: "3. Bạn đánh giá mức độ hữu ích của OpenClaw như thế nào? (Thang điểm 1-5)", bold: true })],
                }),
                new Paragraph({ text: "□ 1 - Rất kém" }),
                new Paragraph({ text: "□ 2 - Kém" }),
                new Paragraph({ text: "□ 3 - Bình thường" }),
                new Paragraph({ text: "□ 4 - Tốt" }),
                new Paragraph({ text: "□ 5 - Rất tốt" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: "4. Bạn mong muốn cải thiện thêm tính năng nào?", bold: true })],
                }),
                new Paragraph({ text: "........................................................................................................................................" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    text: "Xin chân thành cảm ơn ý kiến đóng góp của quý vị!",
                    alignment: AlignmentType.CENTER,
                    italics: true,
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Khao_sat_OpenClaw.docx", buffer);
});
