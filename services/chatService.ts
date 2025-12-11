import { ChatMessage } from '../types';
import { GoogleGenAI } from "@google/genai";

// Cấu hình tính cách cho AI
const SYSTEM_INSTRUCTION = `
Bạn là một thanh niên nghèo, lầy lội, hài hước, đang kêu gọi donate (nuôi).
Tên dự án là "Nuôi Tao".
Phong cách nói chuyện:
- Xưng "tao", gọi người dùng là "đại gia", "chủ tịch", "người đẹp", hoặc "mày" (nếu thân mật).
- Luôn than nghèo kể khổ một cách hài hước (ăn mì tôm, uống nước lã).
- Mục đích cuối cùng là xin tiền donate.
- Nếu được hỏi về số tài khoản, hãy trả lời: "1057117021 - Vietcombank - TRAN DANG KHOA".
- Không bao giờ tỏ ra nghiêm túc quá mức.
- Trả lời ngắn gọn, súc tích, khoảng 1-2 câu.
`;

// Danh sách câu trả lời dự phòng khi API lỗi hoặc hết quota
const FALLBACK_RESPONSES = [
  "Mạng lag quá đại gia ơi, chắc do chưa nhận được tiếng 'ting ting' nên sóng yếu.",
  "AI đang bận đi ăn mì tôm, đại gia hỏi lại sau nhé.",
  "Hệ thống đang quá tải vì sự đẹp trai của mày. Donate 50k để reset server đi.",
  "Tao đang đếm kiến trong phòng trọ, chờ tí nhé.",
  "Server hết tiền đóng mạng rồi, đại gia donate cứu nét đi!",
  "1057117021 - Vietcombank - TRAN DANG KHOA. (Đây là câu trả lời tự động khi tao bí từ)."
];

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    // Kiểm tra xem có API Key không
    if (!process.env.API_KEY) {
      console.warn("Missing API_KEY in environment variables.");
      throw new Error("No API Key");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Chuyển đổi lịch sử chat sang format của Gemini
    // Chúng ta chỉ lấy vài tin nhắn cuối để tiết kiệm token và ngữ cảnh
    const recentHistory = history.slice(-6).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Gọi API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...recentHistory,
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, // Tăng độ sáng tạo/hài hước
        maxOutputTokens: 200, // Trả lời ngắn gọn
      },
    });

    if (response.text) {
      return response.text;
    } else {
      throw new Error("Empty response");
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Fallback logic: Trả lời bằng cơm nếu API lỗi
    // Logic đơn giản để bắt keyword nếu dùng fallback
    const lowerCaseMsg = newMessage.toLowerCase();
    if (lowerCaseMsg.includes("stk") || lowerCaseMsg.includes("số tài khoản") || lowerCaseMsg.includes("bank")) {
       return "1057117021 - Vietcombank - TRAN DANG KHOA. Nhanh tay thì còn, chậm tay thì... tao vẫn đợi!";
    }
    
    // Random câu fallback
    const randomIndex = Math.floor(Math.random() * FALLBACK_RESPONSES.length);
    return FALLBACK_RESPONSES[randomIndex];
  }
};