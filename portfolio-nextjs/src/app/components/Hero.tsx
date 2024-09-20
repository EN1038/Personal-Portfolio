import React from "react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen p-8"
    >
      {/* ด้านขวา: ข้อความ */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-6xl font-bold text-gray-100">
          <span className="text-sm">New web developer</span> <br />
          Hello I'm <br />
          <span className="text-violet-600">Kamalat Glindoung</span>
        </h1>
        <p className="text-xl text-gray-300 mt-6">
          สวัสดีครับ! ผมเป็นนักศึกษาจบใหม่สาขาวิทยาการคอมพิวเตอร์
          ที่สนใจด้านการพัฒนาเว็บและมีความสามารถทั้งในด้าน front-end และ
          back-end พร้อมพัฒนาความรู้ใหม่ๆ ตามความต้องการขององค์กร
        </p>
        <button className="mt-7 px-5 py-2 rounded-full bg-violet-700 text-white hover:bg-violet-900 transition duration-300">
          Dowload CV
        </button>
        <button className="mt-7 mx-5 px-5 py-2 rounded-full bg-violet-700 text-white hover:bg-violet-900 transition duration-300">
          Dowload Resume
        </button>
      </div>
      {/* ด้านซ้าย: รูปภาพ */}
      <div className="flex-1 flex justify-center md:justify-end pt-16 md:pt-0">
        <div className="relative">
          <Image
            src="/images/personal.jpg"
            alt="Hero image"
            className="w-full h-auto max-w-md rounded-full border-4 border-dotted border-violet-600"
            width={1500} // กำหนดความกว้างของรูป
            height={1000} // กำหนดความสูงของรูป
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
