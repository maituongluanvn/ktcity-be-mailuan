### Cách start Front End và Back end

-   Front end :

1. yarn
2. yarn start

-   Backend :

1. yarn
2. yarn start

#### Note:

-   Backend chạy ở port 8000 và Frontend chạy ở port 3000
-   Hiện tại em đang dùng node phiên bản 14.15.3
-   Anh cài dùm em package nodemon để start backend nhé.
-   Em dùng yarn, nếu dùng npm thì câu lệnh tương tự yarn thôi nha anh :D
-   Nếu có vấn đề gì khác thì anh gọi em sđt: 0796 360 798 ( zalo và telegram số này luôn ).

### Task

-   [x] Sử dụng NodeJs để code các API
-   [x] Điểm cộng nếu dùng Expressjs hoặc NestJS để xây dựng ứng dụng ở Backend
-   [x] Điểm cộng nếu dùng Prisma để connect tới Database
-   [] Điểm cộng nếu dùng NextJS kết hợp với Redux Saga để xây dựng ứng dụng ở Frontend
-   [x] Điểm cộng nếu dùng Styled Components

### Task 1: Xây dựng trang tạo user với các thông tin sau

-   [x] email: input email
-   [x] username: input text
-   [x] fullname: input text
-   [x] avatar: input file
-   [x] status: select box dropdown do giới hạn thời gian nên em làm status là toggle
-   [x] deleted: toogle box (boolean)

### Task 2: Xây dựng trang quản lý user

-   [x] Mỗi trang sẽ có 5 user
-   [x] Có phân trang
-   [x] View list dưới dạng table
-   [x] Có filter theo status

### Task 3: Xây dựng trang cập nhật user

-   [x] Lấy thông tin user theo Id **_do số lượng field nên em truyền data của user detail vào bằng props luôn cho nhanh :d, chứ không làm api riêng_**
-   [x] Cập nhật các thông tin có sẵn
-   [x] Hiển thị email nhưng không cho cập nhật

### Task nâng cao

-   [x] Validate email **_Em chỉ validate được email ở database, không đủ thời gian để làm ở BE_**
-   [x] Generate username từ fullname (Frontend & Backend nếu không tồn tại)
-   [] Mỗi row trên table có Toogle box để cập nhật field "deleted" **_Em chưa hiểu task này, tại sao lại làm deleted ở đang list, em có làm toggle "deleted" ở trang detail_**
-   [x] Thêm filter theo ngày tháng tạo user dựa trên "createdAt"
-   [] Authentication dựa trên header với Token Bearer: Authorization: Bearer **_Em thấy các task này cần phải làm log in với username và password, em đã từng làm với JWT, không đủ thời gian nên em
    không làm task này._**
-   [] Ngăn chặn các tấn công từ bên ngoài (ddos) **_Em nghĩ ddos phải chặn ở tầng server hoặc network_**
-   [x] Ngăn chặn các tấn công từ bên ngoài (xss)
-   [x] Ngăn chặn các tấn công từ bên ngoài (sql injection)
-   [x] Em có bổ sung chặn CORS
