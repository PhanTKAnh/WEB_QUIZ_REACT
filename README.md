LÀM trang web kiểm tra trắc nghiệm 
* Giao diện người dùng:
Tính năng đăng nhập, đăng ký. (Đăng nhập xong lưu vào cookie một token).
Trang danh sách chủ đề luyện tập: HTML, CSS, JS, ReactJS,...
Trang làm bài trắc nghiệm theo từng chủ đề, sau khi luyện tập xong sẽ hiển thị kết quả và số câu trả lời đúng, sai, % đúng. Có thêm nút cho luyện tập lại chủ đề đó.
Trang danh sách những bài đã luyện tập.
* API :
  -Danh sách user:
id: Id của user.
fullName: Họ tên của user.
email: Email của user.
password: Mật khẩu của user.
token: Để mỗi lần đăng nhập sẽ lưu token vào cookie, để load lại trang không phải đăng nhập lại.
- Danh sách chủ đề:
id: Id chủ đề.
name: Tên chủ đề.
- Danh sách câu hỏi:
id: Id câu hỏi.
topicId: Id của chủ đề, để biết câu hỏi này thuộc chủ đề nào.
question: Nội dung chi tiết cho câu hỏi.
answers: Danh sách các câu trả lời cho câu hỏi đó.
correctAnswer: Câu trả lời đúng (Dạng number - là index của mảng answers).
- Danh sách câu trả lời:
id: Id của câu trả lời.
userId: Id của user đã làm bài này.
topicId: Id của chủ đề.
answers: Danh sách câu trả lời.
questionId: Id câu hỏi (Để truy vấn lại thông tin câu hỏi).
answer: Câu trả lời mà user đã chọn (Dạng number).




