import os

# Hiển thị thư mục làm việc hiện tại
print("Trước:", os.getcwd())

# Di chuyển lên 2 cấp thư mục
os.chdir("../../")

# Hiển thị thư mục sau khi thay đổi
print("Sau:", os.getcwd())
