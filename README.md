# test-SETA
# list API
- User
    + Đăng nhập: 
      POST: localhost:5000/login 
- Book
    + Tạo mới: POST: localhost:5000/book 
    + Tìm theo id: GET: localhost:5000/book/id
    + TÌm theo category: GET: localhost:5000/book?category=
    + Tìm theo author: GET: localhost:5000/book?author=
    + Tìm tất cả: GET: localhost:5000/book
    + Sửa: PUT: localhost:5000/book/id
    + Xóa: DELETE: localhost:5000/book/id
- Category
    + Tạo mới: POST: localhost:5000/category
    + Tìm theo id: GET: localhost:5000/category/id
    + Tìm tất cả: GET: localhost:5000/category
    + Sửa: PUT: localhost:5000/category/id
    + Xóa: DELETE: localhost:5000/category/id
- Author
    + Tạo mới: POST: localhost:5000/author
    + Tìm theo id: GET: localhost:5000/author/id
    + Tìm tất cả: GET: localhost:5000/author
    + Sửa: PUT: localhost:5000/author/id
    + Xóa: DELETE: localhost:5000/author/id
 # build
 - npm i --save
 - npm start
 # test-SETA
 - Câu sắp xếp trong folder algorithm
