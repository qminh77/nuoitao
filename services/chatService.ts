import { ChatMessage } from '../types';

// Danh sách câu trả lời "AI chạy bằng cơm"
const FUNNY_RESPONSES = [
  "Tao đang bận đếm hạt mì tôm, lát trả lời sau nha đại gia.",
  "Hỏi khó thế? Donate 50k rồi tao trả lời tiếp.",
  "Mạng lag quá... hoặc do mày chưa chuyển khoản nên tín hiệu vũ trụ bị chặn?",
  "Chatbot này chạy bằng cơm sườn (nhưng tao chỉ có cơm trắng), nên hiện tại không nghĩ được gì cả.",
  "Vấn đề này cần thông qua hội đồng quản trị (là tao và cái bụng đói).",
  "Đại gia à, hỏi câu nào nghe mùi tiền hơn được không?",
  "Đừng hỏi tao ăn gì, tao ăn mì tôm. Hết.",
  "Alo? Nghe rõ trả lời... ting ting... chưa thấy tiếng ting ting nên không nghe rõ.",
  "Tao là AI (Artificial Idiot), tao không biết gì đâu, chỉ biết tiêu tiền donate thôi.",
  "Chủ tịch hỏi câu này làm tao bối rối quá, hay là mình chuyển khoản cho nhau cho đỡ ngại đi?",
  "Đang bận viết sao kê mua hành lá 2.000đ, chờ tí.",
  "Câu trả lời nằm trong mã QR phía trên, quét là thấy liền!",
  "Tao hứa sẽ trả lời câu này sau khi mua được cái bánh mì thịt.",
  "Server đang quá tải vì sự đẹp trai của mày (hoặc do tao chưa đóng tiền mạng).",
  "Sao kê chưa? Chưa sao kê đừng hỏi nhiều.",
  "Mày hỏi nhiều thế? Nuôi tao đi rồi tao trả lời tuốt."
];

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  // Giả lập độ trễ mạng để giống thật (1s - 2s)
  const delay = 1000 + Math.random() * 1000;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Logic chọn câu trả lời
      const lowerCaseMsg = newMessage.toLowerCase();
      
      // Một chút logic cơ bản để nó không quá "ngáo"
      if (lowerCaseMsg.includes("ăn gì") || lowerCaseMsg.includes("đói")) {
        resolve("Mì tôm 3 bữa, thỉnh thoảng có thêm quả trứng nếu đại gia thương.");
      } else if (lowerCaseMsg.includes("stk") || lowerCaseMsg.includes("số tài khoản") || lowerCaseMsg.includes("bank")) {
        resolve("1057117021 - Vietcombank - TRAN DANG KHOA. Nhanh tay thì còn, chậm tay thì... tao vẫn đợi!");
      } else if (lowerCaseMsg.includes("chào") || lowerCaseMsg.includes("hi") || lowerCaseMsg.includes("hello")) {
        resolve("Chào đại gia! Hôm nay trời đẹp thế này, rất hợp để chuyển khoản.");
      } else if (lowerCaseMsg.includes("yêu") || lowerCaseMsg.includes("thương")) {
        resolve("Yêu thì donate, thương thì chuyển khoản. Lời nói gió bay, ting ting mới là chân ái.");
      } else {
        // Random câu trả lời bựa
        const randomIndex = Math.floor(Math.random() * FUNNY_RESPONSES.length);
        resolve(FUNNY_RESPONSES[randomIndex]);
      }
    }, delay);
  });
};