"use client";
import React, { useState } from "react";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "เว็บ  Portfolio สร้างโดยใช้ Next.js และ Tailwind CSS",
      technologies: ["Next.js", "Tailwind CSS"],
      projectLink: "https://github.com/EN1038/CheckerByQR-code",
    },
    {
      id: 2,
      name: "CheckerByQR-code",
      description:
        "เว็บเช็คเกอคนเข้าร่วมกิจกรรมในแต่ละกิจกรรมที่สามารถตั้งค่าการเข้าถึงได้เป็นโปรเจ็คตอนฝึกงาน",
      technologies: ["Javascript", "CSS", "Bootstrap" ,"Laravel" ,"Mysql" ,"PHP"],
      projectLink: "https://github.com/EN1038/CheckerByQR-code",
    },
    {
      id: 3,
      name: "Booking_Project",
      description:
        "เว็บจองห้อง Edutainment ของมหาวิทยาลัยราชฎัชนครสวรรค์ โปรเจ็คจบ",
      technologies: ["Javascript", "CSS", "Bootstrap" ,"Laravel" ,"Mysql" ,"PHP"],
      projectLink: "https://github.com/EN1038/Booking_Project",
    },
    {
      id: 4,
      name: "CRUD-Nodejs-Express.js",
      description:
        "ทดลองการเชื่อมต่อ CRUD กับหลังบ้าน Node.js-Express.js",
      technologies: ["Javascript", "HTML" ,"Tailwind" ,"Node.js"],
      projectLink: "https://github.com/EN1038/CRUD-Nodejs-Express.js",
    },
    // Add more projects here
  ]);

  return (
    <section id="projects" className="py-16 px-4 text-gray-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-violet-600">Projects</h2>
        <div className="grid grid-cols-1 sm:-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg border border-gray-600 hover:border-gray-200 p-4 rounded-lg shadow-lg transition duration-300"
            >
              <p>
                <span className=" text-violet-600">
                  const [ <span className="text-blue-600"> projects </span> ] ={" "}
                  <span className="text-blue-600"> useState </span>(
                  <span className="text-blue-600">
                    {" "}
                    [<p className="ms-5 text-yellow-400">{"{"}</p>
                    <span className="ms-9 text-white">
                      id: "
                      <span className="text-orange-400">{project.name}</span>
                      ",
                    </span>
                    <br />
                    <span className="ms-9 text-white">
                      description: "
                      <span className="text-orange-400">
                        {project.description}
                      </span>
                      ",
                    </span>
                    <br />
                    <span className="ms-9 text-white">
                      technologies: "
                      <span className="text-orange-400">
                        <span className="text-violet-600">
                          [{" "}
                          <span className="text-orange-400">
                            {" "}
                            {project.technologies.map((tech, index) => (
                              <span key={tech} className="text-sm">
                                {index !== project.technologies.length - 1 ? (
                                  <><span className="text-white">"<span className="text-orange-400">{tech}</span>", </span> </>
                                ) : (
                                  <><span className="text-white">"<span className="text-orange-400">{tech}</span>"</span> </>
                                )}
                              </span>
                            ))}{" "}
                          </span>{" "}
                          ]
                        </span>
                      </span>
                      ",
                    </span>
                    <br />
                    <span className="ms-9 text-white">
                      projectLink: "
                      <a
                        href={project.projectLink}
                        className="text-orange-400 cursor-pointer underline"
                      >
                         {project.projectLink}
                      </a>
                      ",
                    </span>
                    <p className="ms-5 text-yellow-400">{"}"}</p>]{" "}
                  </span>
                  ) ;
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
