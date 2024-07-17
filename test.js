function traCuu() {
    var studentId = document.getElementById('studentId').value;
    var resultDiv = document.getElementById('result');

    // Giả sử giá trị điểm của môn Toán
    var diemToan = 10;
         if (studentId.length !== 8) {
                resultDiv.innerHTML = '<p class="error">Sai số báo danh</p>';
                return;
            }
    // Tạo kết quả hiển thị
    var resultHtml = `
    <p class="bold">Số Báo Danh Là : ${studentId}</p>
        <p>Toán: ${diemToan}</p>
        <p>Văn: ${diemToan}</p>
        <p>Anh: ${diemToan}</p>
        <p>Địa lý: ${diemToan}</p>
        <p>Lịch sử: ${diemToan}</p>
        <p>GDCD: ${diemToan}</p>
        <h2 class="green"}>Chúc mừng bạn đỗ mọi trường đại học</h2>
    `;

    // Hiển thị kết quả
    resultDiv.innerHTML = resultHtml;
}
