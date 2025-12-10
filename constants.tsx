import { ChartData } from './types';
import { 
  TrendingUp, 
  Search, 
  Wallet, 
  Smartphone, 
  FileCheck, 
  Video, 
  Phone, 
  MessageCircle,
  XCircle,
  CheckCircle,
  Utensils,
  Zap,
  Home,
  Activity,
  BookOpen,
  MonitorPlay
} from 'lucide-react';
import React from 'react';

export const SPENDING_DATA: ChartData[] = [
  { name: 'Ăn uống (Mì tôm)', value: 40, color: '#10B981' },
  { name: 'Điện nước net', value: 20, color: '#3B82F6' },
  { name: 'Thuê nhà', value: 15, color: '#F59E0B' },
  { name: 'Y tế (Thuốc C)', value: 10, color: '#EF4444' },
  { name: 'Học tập', value: 10, color: '#8B5CF6' },
  { name: 'Giải trí (Free)', value: 5, color: '#EC4899' },
];

export const FEATURES = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    title: "Sao Kê Realtime",
    description: "Cập nhật từng giây! Còn nhanh hơn cả tốc độ mày chuyển tiền!"
  },
  {
    icon: <Search className="w-8 h-8 text-blue-400" />,
    title: "Minh Bạch 300%",
    description: "Hơn cả 100%! Tao còn báo cáo cả việc mua ly trà sữa!"
  },
  {
    icon: <Wallet className="w-8 h-8 text-yellow-400" />,
    title: "Chi Tiêu Hợp Lý",
    description: "Không mua xe hơi, nhà cửa. Chỉ ăn cơm với mì tôm thôi!"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: "App Tracking",
    description: "Theo dõi 24/7 tao ăn gì, uống gì, đi đâu. Như \"Big Brother\" vậy!"
  }
];

export const COMMITMENTS = [
  {
    icon: <FileCheck className="w-6 h-6" />,
    text: "Sao kê mỗi ngày: Cập nhật lúc 6h sáng, đều như vắt tranh!"
  },
  {
    icon: <Search className="w-6 h-6" />,
    text: "Không giấu giếm: Từ tô phở 50k đến hộp sữa chua 8k đều ghi chép!"
  },
  {
    icon: <Video className="w-6 h-6" />,
    text: "Video unboxing: Mở từng gói mì tôm live trên Facebook!"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    text: "Hotline 24/7: Gọi hỏi tao ăn gì bất cứ lúc nào!"
  }
];

export const SPENDING_DETAILS = [
  { icon: <Utensils size={18} />, label: "Ăn uống", desc: "Cơm, mì tôm, trứng, rau. KHÔNG có tôm hùm!" },
  { icon: <Zap size={18} />, label: "Điện nước", desc: "Để sao kê cho các đại gia xem" },
  { icon: <Home size={18} />, label: "Thuê nhà", desc: "Phòng trọ 15m², không phải penthouse" },
  { icon: <Activity size={18} />, label: "Y tế", desc: "Thuốc cảm, vitamin C, khẩu trang" },
  { icon: <BookOpen size={18} />, label: "Học tập", desc: "Sách, khóa học online để sao kê tốt hơn" },
  { icon: <MonitorPlay size={18} />, label: "Giải trí", desc: "Netflix? Không! Chỉ Youtube miễn phí!" },
];

export const COMPARISON_DATA = {
  others: [
    "Sao kê sau 3 năm (hoặc không bao giờ)",
    "File Excel blur mờ như ảnh ma",
    "Số liệu \"làm tròn\" theo kiểu 1 + 1 = 3",
    "Block người hỏi nhanh như chớp"
  ],
  me: [
    "Sao kê trước khi tiêu (để đại gia duyệt)",
    "File Excel 4K Ultra HD, có chữ ký điện tử",
    "Số liệu chính xác đến từng đồng",
    "Trả lời inbox nhanh hơn cả chatbot"
  ]
};