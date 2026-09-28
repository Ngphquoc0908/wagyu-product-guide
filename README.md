# WAGYU MASTER PRODUCT GUIDE - WEB APP

Dự án Web App tra cứu 45 bộ phận thịt bò Wagyu Nhật Bản, cấu trúc giải phẫu học, cẩm nang phân loại JMGA, tiêu chuẩn Bò Kobe và danh bạ sàn đấu giá, trường đào tạo thịt bò tại Nhật.

---

## 🎨 Điểm Nổi Bật Về Giao Diện & Trải Nghiệm (Style Guide)
- **Kế thừa bảng màu & phong cách Nhật Bản**:
  - Đỏ gạch / Cam đất nung (`#c2410c`, `#9a3412`)
  - Xanh lục ngọc bảo (`#166534`, `#14532d`)
  - Vàng hổ phách / Gold (`#d97706`)
  - Nền kem ngà tinh tế (`#fbfaf6`) với họa tiết sóng truyền thống Nhật Bản (*Seigaiha*)
- **Filter Tabs linh hoạt**:
  - Phân loại 4 vùng thân thịt lớn: **Thân Trước (Forequarter)**, **Thăn (Loin)**, **Bụng (Short Plate)**, **Mông & Đùi (Round)**.
  - Bộ lọc theo chất lượng: Mỡ vân cao (3-5★), Độ mềm tuyệt đối (4-5★), Bộ phận quý hiếm.
- **Thẻ Card & Popup Modal chi tiết**:
  - Thẻ tóm tắt ngắn gọn tên tiếng Anh, tiếng Nhật (Kanji, Katakana, Romaji), tên tiếng Việt, số hiệu bộ phận và đánh giá sao.
  - Bấm vào bất kỳ thẻ nào để mở **Modal chi tiết** hiển thị đầy đủ:
    - Cấu trúc giải phẫu học & các cơ chính
    - Nguồn gốc tên gọi
    - Đặc điểm hương vị chuẩn Toyonishi Farm
    - Video YouTube hướng dẫn cắt lóc từng phần thịt
    - Gợi ý món ăn & danh sách 50 công thức Wagyu
    - Khối lượng & Tỷ lệ thu hồi tham khảo (%)
- **Nút liên kết mạng xã hội & tài liệu**:
  - Icon YouTube (đỏ), Instagram (rose), Website / Liên kết ngoài, Nút Tải tài liệu PDF.

---

## 🚀 Hướng Dẫn Khởi Chạy Web App

Thư mục dự án: `C:\Users\LENOVO\Desktop\du-an-moi-product`

### 1. Khởi động môi trường phát triển (Development):
```bash
cd C:\Users\LENOVO\Desktop\du-an-moi-product
npm run dev
```
Mở trình duyệt truy cập: [http://localhost:3000](http://localhost:3000)

### 2. Biên dịch bản sản xuất (Production Build):
```bash
npm run build
npm run start
```

---

## 🔗 Kết Nối Dữ Liệu Live Từ Google Apps Script

API của bạn:
`https://script.google.com/macros/s/AKfycbz8U41CsTVRMMvXwAphiC3OCXDZBXCLSVIFVgyGBcPvAkbTNXR8e9ZTf_tN9tjYC1OS/exec`

### 💡 Lưu ý quan trọng về quyền truy cập:
Để Web App có thể tự động tải dữ liệu trực tiếp từ Google Sheet khi bạn chỉnh sửa bảng tính:
1. Mở file Google Sheet $\rightarrow$ **Tiện ích mở rộng** (Extensions) $\rightarrow$ **Apps Script**.
2. Nhấn nút xanh **Triển khai** (Deploy) ở góc trên bên phải $\rightarrow$ chọn **Quản lý tùy chọn triển khai** (Manage deployments).
3. Nhấp biểu tượng **Chỉnh sửa** (icon cây bút) ở phiên bản hiện tại.
4. Tại ô **Người có quyền truy cập** (Who has access), đổi thành: **Bất kỳ ai** (Anyone).
5. Nhấn **Triển khai** (Deploy) và hoàn tất.
6. Trên Web App, chỉ cần bấm nút biểu tượng **Đồng bộ** trên thanh menu để cập nhật dữ liệu mới nhất!
