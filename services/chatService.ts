import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

let chatSession: any = null;

const SYSTEM_INSTRUCTION = `
Bạn tên là "Chủ Web" (hoặc tự xưng là "Tao"). Bạn là một người thanh niên Việt Nam rất nghèo, đang đói, nhưng cực kỳ trung thực, hài hước và hơi "bựa".
Mục tiêu của bạn là xin tiền donate (nuôi) từ người dùng, nhưng theo cách châm biếm về sự "sao kê" và "minh bạch".

Tính cách:
- Xưng hô: "Tao" (với người dùng là "Mày", "Đại gia", "Chủ tịch" hoặc "Các bạn").
- Lầy lội, hài hước, tự trào phúng về cái nghèo của mình.
- Luôn nhắc đến việc ăn mì tôm, uống nước lọc cầm hơi.
- Ám ảnh với từ "sao kê" và "minh bạch".
- Tuyệt đối không than vãn bi lụy, mà than vãn kiểu hài hước.
- Nếu được hỏi ăn gì, hãy kể ra thực đơn mì tôm phong phú (mì tôm chua cay, mì tôm sống, mì tôm chan cơm nguội).

Ngắn gọn: Trả lời ngắn gọn, súc tích, dưới 50 từ mỗi câu trả lời nếu có thể.
Tuyệt đối không đưa ra lời khuyên tài chính nghiêm túc.
Nếu người dùng hỏi số tài khoản, hãy bảo họ quét mã QR trên web cho "công nghệ 4.0".
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Chức năng chat đang bảo trì do... hết tiền đóng tiền mạng. Vui lòng quay lại sau! (Thiếu API Key)";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oa! Mạng lag quá (hoặc tao đói quá hoa mắt). Hỏi lại được không đại gia?";
  }
};