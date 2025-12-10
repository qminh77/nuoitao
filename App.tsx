import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Heart, 
  Coffee 
} from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import PieChartSection from './components/PieChartSection';
import ChatWidget from './components/ChatWidget';
import { FEATURES, COMMITMENTS, COMPARISON_DATA, SPENDING_DETAILS } from './constants';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://buymeacoffee.com/nuoitoi.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <ThreeBackground />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl pt-1">🌱</span>
              <span className="font-bold text-xl tracking-tighter text-white">NUÔI TAO</span>
            </div>
            <div className="hidden md:block">
              <a href="#donate" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                Donate Ngay 💸
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium animate-pulse">
            Dự án Startup "Khởi Nghiệp Bằng Sức Dân" 🚀
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 leading-tight">
            HÃY NUÔI TAO.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Tao hứa sao kê đầy đủ! 💯 <br />
            <span className="text-emerald-400 italic font-medium">"Minh bạch hơn cả nước cất"</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#donate" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-emerald-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Heart className="fill-current" size={20} />
              Nuôi Tao Đi
            </a>
            <a href="#why-me" className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 text-white rounded-xl font-semibold backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
              Tại sao phải nuôi?
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why-me" className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tại Sao Nên Nuôi Tao? 🎯</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20">
                <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-emerald-900/10 -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
             So Sánh Với "Người Khác" 💰
           </h2>

           <div className="grid md:grid-cols-2 gap-8">
             {/* The Others */}
             <div className="bg-red-950/30 border border-red-900/50 rounded-3xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <XCircle size={100} className="text-red-500" />
               </div>
               <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                 <XCircle /> Người Khác
               </h3>
               <ul className="space-y-4">
                 {COMPARISON_DATA.others.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-red-200/80">
                     <span className="mt-1 text-red-500">❌</span>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Me */}
             <div className="bg-emerald-950/30 border border-emerald-900/50 rounded-3xl p-8 relative overflow-hidden transform md:-translate-y-4 shadow-2xl shadow-emerald-900/20 ring-1 ring-emerald-500/50">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <CheckCircle size={100} className="text-emerald-500" />
               </div>
               <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                 <CheckCircle /> Nuôi Tao
               </h3>
               <ul className="space-y-4">
                 {COMPARISON_DATA.me.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-emerald-100">
                     <span className="mt-1 text-emerald-400">✅</span>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-slate-700 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">🎪 Cam Kết Vàng Của Tao</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {COMMITMENTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition">
                  <div className="text-emerald-400 mt-1">{item.icon}</div>
                  <p className="text-slate-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spending Breakdown */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Tao Sẽ Dùng Tiền Vào Đâu? 📈
               </h2>
               <p className="text-slate-400 mb-8 text-lg">
                 Mọi khoản chi đều được tối ưu hóa cho sự tồn tại và khả năng "sao kê" của tao.
               </p>
               <div className="grid sm:grid-cols-2 gap-4">
                 {SPENDING_DETAILS.map((detail, idx) => (
                   <div key={idx} className="flex items-start gap-3">
                     <div className="p-2 rounded-lg bg-slate-800 text-emerald-400">
                       {detail.icon}
                     </div>
                     <div>
                       <h4 className="font-bold text-white text-sm">{detail.label}</h4>
                       <p className="text-xs text-slate-500">{detail.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="bg-slate-800/30 rounded-3xl p-6 border border-slate-700/50 flex flex-col items-center justify-center">
                <PieChartSection />
                <p className="text-center text-slate-500 text-sm mt-4 italic">
                  *Biểu đồ chi tiết cập nhật hàng tuần (hoặc khi tao đói)
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-emerald-900/20 border-y border-emerald-900/30">
        <div className="max-w-3xl mx-auto text-center px-4">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-emerald-200 mb-6 leading-relaxed">
            "Tôi Nuôi Cô!"
          </blockquote>
          <cite className="text-slate-400 not-italic block font-bold text-lg">- Châu Tinh Trì -</cite>
          <p className="text-slate-500 mt-2">Đây chính là nguồn cảm hứng cho website này! 😂</p>
        </div>
      </section>

      {/* Donation Area */}
      <section id="donate" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Decorative shine */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DONATE NGAY ĐI, <br />
            <span className="text-emerald-400">NẾU MÀY ĐANG CƯỜI!</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
            Quét mã QR này để nuôi tao (và nhận bản sao kê ngay lập tức!) hoặc dùng link bên dưới.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Fake QR */}
            <div className="bg-white p-4 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://buymeacoffee.com/nuoitoi.com" 
                alt="QR Code Donation" 
                className="w-48 h-48"
              />
              <p className="text-slate-900 font-bold mt-2 text-sm uppercase tracking-widest">Momo / Bank</p>
            </div>

            <div className="text-left space-y-4">
               <div className="flex items-center gap-2 text-emerald-400 font-medium animate-pulse">
                 <Coffee size={20} />
                 <span>Chuyển xong là có mail tự động! ⚡</span>
               </div>
               
               <button 
                  onClick={copyToClipboard}
                  className="group relative w-full px-6 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-mono flex items-center justify-between gap-4 transition-all"
               >
                 <span className="truncate opacity-80">buymeacoffee.com/nuoitoi.com</span>
                 {copied ? <CheckCircle size={20} className="text-green-400" /> : <span className="text-xs bg-slate-800 px-2 py-1 rounded">COPY</span>}
               </button>

               <a 
                 href="https://buymeacoffee.com/nuoitoi.com" 
                 target="_blank" 
                 rel="noreferrer"
                 className="block w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-xl text-center shadow-lg shadow-yellow-900/20 transition-transform hover:-translate-y-1"
               >
                 🎁 NUÔI LUÔN, SỢ GÌ!
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Heartfelt Message */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-block p-3 rounded-full bg-slate-800 mb-4">
             <span className="text-3xl">🎤</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Lời Nhắn Từ Trái Tim</h3>
          <p className="text-slate-400 leading-relaxed">
            Trong thời đại mà "từ thiện" đã trở thành từ nhạy cảm, Tao xin khẳng định: <strong className="text-white">HÃY NUÔI TAO!</strong>
          </p>
          <p className="text-slate-400 leading-relaxed">
            Tao nghèo, tao cần tiền, nhưng tao <strong className="text-white">KHÔNG MẤT LƯƠNG TÂM!</strong> Mỗi đồng tiền các đại gia gửi, tao sẽ chi tiêu rõ ràng, minh bạch như bụng đói của tao vậy! 😭
          </p>
          <p className="text-emerald-400 italic text-sm border-t border-slate-800 pt-6 mt-6">
            P/S: Tao hứa sẽ không mua xe hơi bằng tiền donate. Vì... tao chưa có bằng lái! 🚗❌
          </p>
        </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="py-12 bg-slate-950 text-center px-4 border-t border-slate-900">
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          ⚠️ DISCLAIMER: Đây là trang web mang tính chất HÀI HƯỚC. Mọi nội dung đều mang tính giải trí, 
          không nhằm mục đích xúc phạm hay chỉ trích bất kỳ cá nhân/tổ chức nào. 
          Nhưng tiền donate là thật nha!
        </p>
        <div className="mt-8 text-slate-700 text-xs font-mono">
          &copy; {new Date().getFullYear()} Nuôi Tao Corp. All rights reserved.
        </div>
      </footer>

      {/* Hotline Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;