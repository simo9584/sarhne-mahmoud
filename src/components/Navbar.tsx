import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center">
            <img src="https://www.sarhne.com/assets/img/sarhne-nav.webp" alt="صارحني" className="h-8" />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="#" className="nav-link">الرئيسية</a>
            <a href="#" className="nav-link">اشتراك</a>
            <a href="#" className="nav-link">تسجيل الدخول</a>
            <a href="#" className="nav-link">بحث</a>
            <a href="#" className="nav-link">تعليمات</a>
            <a href="#" className="nav-link">اتصل بنا</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;