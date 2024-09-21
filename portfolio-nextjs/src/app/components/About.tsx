import React from "react";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaJsSquare as FaJavascript, // ต้องใช้ FaJsSquare แทน FaJavascript
  FaBootstrap,
  FaDatabase as FaMysql, // ใช้ FaDatabase สำหรับ MySQL ไอคอนใน react-icons
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 text-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 px-9 md:pe-13 lg:pe-14 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-violet-600">
              WHO I AM?
            </h2>
            <p className="text-lg mb-4">
              ผมชื่อ{" "}
              <span className="text-violet-400">นายกมลาสน์ กลิ่นด้วง</span>{" "}
              เป็นนักพัฒนาเว็บที่มีความสามารถในการพัฒนา
              <span className="text-violet-400">Front-end</span> และ
              <span className="text-violet-400"> Back-end </span>
            </p>
            <p className="text-lg mb-4">
              ปริญญา{" "}
              <span className="text-violet-400"> วิทยาศาสตรบัณฑิต </span> สาขา
              <span className="text-violet-400"> วิชาวิทยาการคอมพิวเตอร์ </span>
              จาก{" "}
              <span className="text-violet-400">
                {" "}
                มหาวิทยาลัยราชภัฏนครสวรรค์{" "}
              </span>
              และมีประสบการณ์การทำงานใน{" "}
              <span className="text-violet-400">
                {" "}
                สำนักวิทยบริการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏนครสวรรค์{" "}
              </span>
              ซึ่งช่วยให้ฉันพัฒนาทักษะและความเชี่ยวชาญในด้านต่างๆ
              ของการพัฒนาเว็บ
            </p>
          </div>

          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-violet-600 text-center md:text-end">
              SKILLS?
            </h2>
            <div className="grid grid-cols-3 sm:-cols-3 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaHtml5 className="text-orange-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">HTML</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaCss3Alt className="text-blue-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">CSS</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaJavascript className="text-yellow-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">Javascript</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaBootstrap className="text-violet-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">Bootstrap</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <img
                  src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
                  alt="Next.js logo"
                  className="mx-auto pt-1"
                  width={50}
                  height={50}
                />
                <p className="mt-2 text-lg">Tailwind</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaNodeJs className="text-green-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">Node.js</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaMysql className="text-blue-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">Mysql</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <FaLaravel className="text-red-500 text-4xl mx-auto" />
                <p className="mt-2 text-lg">Laravel</p>
              </div>
              <div className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300">
                <img
                  src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                  alt="Next.js logo"
                  className="mx-auto"
                  width={35}
                  height={40}
                />
                <p className="mt-2 text-lg">Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
