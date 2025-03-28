
function submitScore(name, answer, score) {
    fetch("https://script.google.com/macros/s/AKfycbxg5ckJlFqXFTRh9OGeIbc5lkUGMcuLTV8za0zY-HDdqU5YctS1W1XWI5LaSD6hZ7Q/exec", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            name: name,      // Tên học sinh
            answer: answer,  // Câu trả lời của học sinh
            score: score     // Điểm số
        })
    })
    .then(response => response.text()) 
    .then(data => console.log("Kết quả gửi:", data))  // Kiểm tra phản hồi từ server
    .catch(error => console.error("Lỗi gửi dữ liệu:", error));
}
