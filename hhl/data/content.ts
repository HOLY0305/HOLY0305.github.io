import { ContentData, Language } from '../types';

/* 
  INSTRUCTIONS FOR UPDATING PROOF MATERIALS:
  1. Add your images/PDFs to the `public/assets` folder (create it if it doesn't exist).
  2. Update the `materials` array in the objects below.
  3. Example:
     materials: [
       { type: 'pdf', title: 'Internship Certificate', url: './assets/internship_cert.pdf' },
       { type: 'image', title: 'Competition Photo', url: './assets/comp_photo.png' }
     ]
*/

export const content: ContentData = {
  [Language.EN]: {
    name: "Huang Honglin",
    title: "Embedded Systems Engineer / Senior Year Student",
    location: "Shenzhen, China",
    email: "1242768713@qq.com",
    phone: "180-9810-7376",
    github: "https://holy0305.github.io/self_introduction/#home",
    summary: "Senior Automation student at Shenzhen University with a 3.86/4.5 GPA (Top 10%). Extensive experience in embedded systems, Linux kernel development, and robotics. Proven track record in national competitions (Siemens Cup, 3DDS) and leadership roles. Passionate about driver porting, motion planning, and hardware-software integration.",
    skills: [
      { category: "Languages & Core", items: ["C/C++", "Python", "Bash", "Makefile", "CMake", "Git"] },
      { category: "Embedded", items: ["STM32 (F1/F4)", "Linux Kernel", "BSP", "Driver Porting", "ARM GCC"] },
      { category: "Hardware", items: ["PCB Design", "LTSpice", "Soldering", "Circuit Analysis"] },
      { category: "Tools", items: ["SolidWorks", "Oscilloscope", "Logic Analyzer"] }
    ],
    education: [
      {
        school: "Shenzhen University",
        major: "Automation",
        degree: "Bachelor's Degree",
        period: "2022.09 - 2026.09",
        gpa: "3.86/4.5 (Top 10% in major)",
        courses: "C Programming, C++, Automatic Control Systems, Analog & Digital Circuits (All Grade A+)",
        honors: "Second-Class Scholarship for Innovation & Entrepreneurship Star, Outstanding Student Cadres, Third-Class Scholarship for Learning Star"
      }
    ],
    experience: [
      {
        id: "exp_intern_1",
        company: "Shenzhen Yuancheng Technology Co., Ltd.",
        role: "Linux Application Development Engineer",
        period: "2025.07 - 2025.09",
        category: 'internship',
        description: "Responsible for kernel module tailoring and driver porting on HI3519/3516V500 chips.",
        achievements: [
          "Contributed to BSP and kernel module builds. Proficient in C/C++, Bash, and Makefile.",
          "Involved in the L32 project, debugging and testing KLGD and Chuangyuan in-cell 12.5″ (2K) displays.",
          "Adapting SDIO-WiFi drivers, and working with MIPI, TP, and SDIO protocols."
        ],
        materials: [
          { type: 'image', title: 'Workplace Photo', url: 'https://picsum.photos/id/101/800/600' },
          { type: 'pdf', title: 'Internship Certificate.pdf', url: 'https://www.google.com' }
        ]
      },
      {
        id: "exp_campus_1",
        company: "Psychological Association, School of Mechatronics and Control Engineering",
        role: "President",
        period: "2023.05 - 2025.06",
        category: 'campus',
        description: "Led 3 departments and 20+ members, coordinating with university/college committees and faculty advisors.",
        achievements: [
          "Organized 60+ events (e.g., Life Simulation, Freshman Adaptation) serving 5,000+ students.",
          "Awarded Second-Class Scholarship for Outstanding Student Cadres."
        ],
        materials: [
           { type: 'image', title: 'Event Group Photo', url: 'https://picsum.photos/id/102/800/600' }
        ]
      },
      {
        id: "exp_campus_2",
        company: "School of Mechanical, Electrical and Control Engineering Debate Team",
        role: "Chief Captain",
        period: "2023.05 - 2024.06",
        category: 'campus',
        description: "Led daily training and competitions for the school debate team.",
        achievements: [
          "Achieved awards including third place in the Intercollegiate Cup.",
          "Champion of the Challenge Cup."
        ],
        materials: [
          { type: 'image', title: 'Debate Competition Photo', url: 'https://picsum.photos/id/103/800/600' }
        ]
      },
      {
        id: "exp_campus_3",
        company: "Class 2023 Freshman Class Guide Team",
        role: "Bansuke (Class Assistant)",
        period: "2023.09 - 2024.09",
        category: 'campus',
        description: "Supported freshmen’s adaptation, resolving 20+ academic and 15+ daily issues.",
        achievements: [
          "Organized 3 orientation events (e.g., Icebreaker, Campus Tour).",
          "Boosted class cohesion to top 30% among freshman classes."
        ],
        materials: [
          { type: 'image', title: 'Class Activity Photo', url: 'https://picsum.photos/id/104/800/600' }
        ]
      }
    ],
    projects: [
      {
        id: "proj1",
        title: "IEPE Piezoelectric Sensor",
        role: "Personal Human Project",
        period: "2025.02 - 2025.08",
        description: "Modeled and simulated sensor circuits in LTSpice, tuning BJT (2N2222A) and MOSFET (2N7000) parameters to analyze frequency response and linearity. Built breadboard prototypes with constant-current and filter circuits, tested via oscilloscope and multimeter, and later completed PCB design, soldering, and hardware validation.",
        techStack: ["LTSpice", "BJT/MOSFET", "PCB Design", "Signal Processing"],
        image: "https://picsum.photos/id/1/800/600",
        materials: [
          { type: 'image', title: 'Circuit Schematic', url: 'https://picsum.photos/id/201/800/600' },
          { type: 'image', title: 'PCB Layout', url: 'https://picsum.photos/id/202/800/600' },
          { type: 'pdf', title: 'Project Report.pdf', url: '#' }
        ]
      },
      {
        id: "proj2",
        title: "Cross-compilation of Digital Libraries",
        role: "Laboratory Project",
        period: "2025.02 - 2025.02",
        description: "Ported DSP Kalman, Eigen3, AutoDiff, and OSQP libraries to STM32F407 using STM32CubeIDE. Wrote CMake scripts for cross-compilation and static linking, configured startup files, and validated OSQP solver performance through serial debugging.",
        techStack: ["STM32CubeIDE", "CMake", "Cross-compilation", "Math Libraries"],
        image: "https://picsum.photos/id/2/800/600",
        materials: [
          { type: 'pdf', title: 'Technical Report.pdf', url: '#' }
        ]
      },
      {
        id: "proj3",
        title: "Home has Huaan - Robot Arm",
        role: "Innovation Research Project",
        period: "2024.02 - 2024.06",
        description: "Developed robotic arm controller for a desk-tidying companion robot with vision and voice interaction. Built on STM32F103 with HAL-based motor drivers; integrated PDA motors via CAN protocol for multi-joint synchronization. Implemented forward/inverse kinematics through hardware encapsulation for efficient motion control.",
        techStack: ["STM32F103", "CAN Protocol", "Inverse Kinematics", "Motor Control"],
        image: "https://picsum.photos/id/3/800/600",
        materials: [
          { type: 'image', title: 'Robot Prototype', url: 'https://picsum.photos/id/203/800/600' },
          { type: 'pdf', title: 'Research Paper.pdf', url: '#' }
        ]
      },
      {
        id: "proj4",
        title: "Smart Shoe Cabinet",
        role: "Innovation Simulation",
        period: "2023.12 - 2024.09",
        description: "Contributed to an IoT-enabled smart cabinet integrating storage, cleaning, drying, and sterilization. Designed 3D models in SolidWorks, created an AI-assisted HTML UI for enhanced interaction, and managed task scheduling, documentation, and test case preparation.",
        techStack: ["SolidWorks", "IoT", "HTML/UI", "Product Design"],
        image: "https://picsum.photos/id/4/800/600",
        materials: [
          { type: 'pdf', title: 'Design Document.pdf', url: '#' }
        ]
      },
      {
        id: "proj5",
        title: "All Terrain Obstacle Cart",
        role: "Practical Project",
        period: "2023.09 - 2024.08",
        description: "Co-designed and assembled an Arduino-based vehicle with autonomous obstacle detection and control. Responsible for hardware selection and core control development, integrating grayscale, TCS3200 color, and IR sensors. Applied filtering and PID algorithms for path tracking, obstacle crossing, and stable marble delivery.",
        techStack: ["Arduino", "PID Algorithms", "Sensor Fusion", "Robotics"],
        image: "https://picsum.photos/id/5/800/600",
        materials: [
          { type: 'pdf', title: 'Project Summary.pdf', url: '#' }
        ]
      }
    ],
    achievements: [
      {
        id: "award1",
        title: "The 24th Digital Design Dimensions Show - National First Prize",
        date: "2024.12",
        category: "Competition",
        image: "https://picsum.photos/id/10/800/600"
      },
      {
        id: "award2",
        title: "The 18th CIMC 'Siemens Cup' - National First Prize",
        date: "2024.08",
        category: "Competition",
        image: "https://picsum.photos/id/11/800/600"
      },
      {
        id: "award3",
        title: "26th China Robotics & AI Competition - National Excellence Award",
        date: "2024.07",
        category: "Competition",
        image: "https://picsum.photos/id/12/800/600"
      },
      {
        id: "award4",
        title: "Chuangxiang Cup Entrepreneurship - National Gold Award",
        date: "2023.08",
        category: "Competition",
        image: "https://picsum.photos/id/13/800/600"
      },
      {
        id: "award5",
        title: "The 7th China University Intelligent Machine Creative Competition - National Third Prize",
        date: "2024.07",
        category: "Competition",
        image: "https://picsum.photos/id/14/800/600"
      },
      {
        id: "award6",
        title: "The 5th IYAIC China Regional Round - National Third Prize",
        date: "2023.11",
        category: "Competition",
        image: "https://picsum.photos/id/15/800/600"
      }
    ],
    certifications: [
      {
        id: "cert1",
        title: "Strategy Consulting Job Simulation",
        issuer: "BCG",
        date: "April 20, 2025",
        image: "https://picsum.photos/id/40/600/400" 
      },
      {
        id: "cert2",
        title: "Hardware Engineer Training",
        issuer: "Shenzhen Dianchao Technology",
        date: "Jan 7, 2025",
        image: "https://picsum.photos/id/41/600/400"
      },
      {
        id: "cert3",
        title: "CNC Digitalization (Level 0)",
        issuer: "Siemens",
        date: "Training Course",
        image: "https://picsum.photos/id/42/600/400"
      },
      {
        id: "cert4",
        title: "HarmonyOS Developer Foundation",
        issuer: "Huawei",
        date: "April 20, 2025",
        image: "https://picsum.photos/id/43/600/400"
      }
    ]
  },
  [Language.CN]: {
    name: "黄泓霖",
    title: "Linux应用开发工程师 / 自动化本科生",
    location: "深圳",
    email: "1242768713@qq.com",
    phone: "180-9810-7376",
    github: "https://holy0305.github.io/self_introduction/#home",
    summary: "深圳大学自动化专业大四学生，GPA 3.86/4.5 (Top 10%)。在嵌入式系统、Linux内核开发和机器人领域拥有丰富经验。在西门子杯、3DDS等国家级比赛中屡获殊荣。具备强大的学习能力和领导力，曾任心理协会会长及辩论队队长。",
    skills: [
      { category: "语言与核心", items: ["C/C++", "Python", "Bash", "Makefile", "CMake", "Git"] },
      { category: "嵌入式开发", items: ["STM32 (HAL/CubeIDE)", "Linux内核裁减", "驱动移植", "BSP", "ARM GCC"] },
      { category: "硬件设计", items: ["PCB设计", "LTSpice", "焊接", "电路分析"] },
      { category: "工具软件", items: ["SolidWorks", "示波器", "万用表", "Office套件"] }
    ],
    education: [
      {
        school: "深圳大学",
        major: "自动化",
        degree: "本科",
        period: "2022.09 - 2026.09",
        gpa: "3.86/4.5 (专业前10%)",
        courses: "C语言, C++, 自动控制系统, 模电数电 (均为A+)",
        honors: "深圳大学双创之星二等奖学金, 优秀干部二等奖学金, 学习之星三等奖学金"
      }
    ],
    experience: [
      {
        id: "exp_intern_1",
        company: "深圳源诚技术有限公司",
        role: "Linux应用开发工程师",
        period: "2025.07 - 2025.09",
        category: 'internship',
        description: "系统应用二部。主要负责HI3519/3516V500芯片内核模块裁剪与驱动移植。",
        achievements: [
          "负责HI3519/3516V500芯片内核模块裁剪与驱动移植，参与板级支持包（BSP）与内核模块项目构建。",
          "精通C/C++、Bash脚本及Makefile编写，熟悉交叉编译工具链、Git版本控制。",
          "参与L32项目，完成了对KLGD、创源in-cell 12.5寸(2K)屏幕的调试与测试工作。",
          "实现对SDIO-wifi驱动的平台适配，学习了解了包括MIPI、TP、SDIO等多种通讯协议。"
        ],
        materials: [
          { type: 'image', title: '实习工卡/照片', url: 'https://picsum.photos/id/101/800/600' },
          { type: 'pdf', title: '实习证明.pdf', url: 'https://www.google.com' }
        ]
      },
      {
        id: "exp_campus_1",
        company: "深圳大学机电与控制工程学院心理协会",
        role: "会长",
        period: "2023.05 - 2025.06",
        category: 'campus',
        description: "统筹协会3个常规部门，协调校院两级社团管理委员会、各级心理委员，对接指导老师，管理社团成员总计20余人。",
        achievements: [
          "共组织开展了50多场小型活动与10余场大型活动，成功举办“模拟人生”、“新生适应力提升”等多场活动，累计服务全校人员超过5千人。",
          "任期内，获得优秀学生干部二等奖学金。"
        ],
        materials: [
           { type: 'image', title: '活动留影', url: 'https://picsum.photos/id/102/800/600' }
        ]
      },
      {
        id: "exp_campus_2",
        company: "机电与控制工程学院辩论队",
        role: "正队长",
        period: "2023.05 - 2024.06",
        category: 'campus',
        description: "组织学院辩论队进行日常训练、比赛。",
        achievements: [
          "带领学院辩论队参与各类辩论比赛。",
          "曾获得院际杯季军，挑战杯冠军等。"
        ],
        materials: [
          { type: 'image', title: '辩论赛留影', url: 'https://picsum.photos/id/103/800/600' }
        ]
      },
      {
        id: "exp_campus_3",
        company: "2023级新生班导班助团队",
        role: "班助",
        period: "2023.09 - 2024.09",
        category: 'campus',
        description: "了解新生学习适应情况与生活需求，累计解决学业困惑及生活问题。",
        achievements: [
          "累计解决学业困惑（如课程难度适配、学习方法建议）20 余件、生活问题（如宿舍关系协调、校园服务对接）15 件。",
          "策划并组织 “新生破冰交流会”“校园定向打卡” 等活动 3 场，帮助新生快速熟悉同学与校园环境。",
          "班级凝聚力评分在年级新生班级中位列前 30%。"
        ],
        materials: [
          { type: 'image', title: '班级活动照片', url: 'https://picsum.photos/id/104/800/600' }
        ]
      }
    ],
    projects: [
      {
        id: "proj1",
        title: "IEPE压电传感器",
        role: "个人类项目",
        period: "2025.02 - 2025.08",
        description: "在传感器仿真实验项目中，IEPE压电传感器电路模型的推导与仿真，利用LTSpice对BJT（2N2222A）与MOSFET（2N7000）参数进⾏调试并提取频率响应与线性度；在面包板上搭建电路原型，包括恒流源与滤波电路设计，通过示波器与万用表对信号进⾏测试与调试；后期进⾏PCB原理图设计、PCB绘制与焊接，实现实验系统的硬件验证。",
        techStack: ["LTSpice", "PCB设计", "硬件验证", "信号处理"],
        image: "https://picsum.photos/id/1/800/600",
        materials: [
          { type: 'image', title: '电路原理图', url: 'https://picsum.photos/id/201/800/600' },
          { type: 'image', title: 'PCB 设计图', url: 'https://picsum.photos/id/202/800/600' },
          { type: 'pdf', title: '项目结题报告.pdf', url: '#' }
        ]
      },
      {
        id: "proj2",
        title: "数字库的交叉编译",
        role: "实验室项目",
        period: "2025.02 - 2025.02",
        description: "在STM32F407数字库编译项目中，基于STM32CubeIDE，主要进⾏数字算法库移植与编译，涵盖DSP Kalman、Eigen3、AutoDiff及OSQP等数字模块。⼯作内容包括编写CMake脚本实现交叉编译与静态链接；调整启动⽂件输⼊堆栈；配置CubeIDE编译选项与串⼝printf调试；整合Eigen与AutoDiff库，集成OSQP静态库并验证求解性能。",
        techStack: ["STM32CubeIDE", "CMake", "交叉编译", "静态链接"],
        image: "https://picsum.photos/id/2/800/600",
        materials: [
           { type: 'pdf', title: '技术报告.pdf', url: '#' }
        ]
      },
      {
        id: "proj3",
        title: "家有华安-儿童伴学机器人",
        role: "创新创业研究项目",
        period: "2024.02 - 2024.06",
        description: "项目团队打造了⼀款桌面收纳机械臂，通过视觉识别与语音交互，为⼉童提供桌面整理及学习陪伴功能。我负责机械臂控制器，包含基于STM32F103微控制器，使用HAL库编写电机驱动组件，通过调用同步实现控制；集成PDA系列电机，采用CAM协议实现多关节数据同步；通过将正逆解算法进⾏硬件封装，实现机械臂正逆运动等⾼效求解与执⾏。",
        techStack: ["STM32", "CAN协议", "运动学算法", "HAL库"],
        image: "https://picsum.photos/id/3/800/600",
        materials: [
          { type: 'image', title: '样机实物图', url: 'https://picsum.photos/id/203/800/600' },
          { type: 'pdf', title: '论文文档.pdf', url: '#' }
        ]
      },
      {
        id: "proj4",
        title: "智能鞋柜",
        role: "创新仿真实项目",
        period: "2023.12 - 2024.09",
        description: "在智能鞋柜创新仿真项目中，团队研发了⼀款集存储、清洁、烘⼲与消毒于⼀体的智能鞋柜，实现物联⽹与智能化控制。我负责基于SolidWorks进⾏三维建模；借助Ai⽣成HTML代码设计UI界面，提升交互体验；进⾏团队任务调度、编写项目⽂档与测试报告，梳理需求与测试用例。",
        techStack: ["SolidWorks", "HTML/UI", "物联网", "系统集成"],
        image: "https://picsum.photos/id/4/800/600",
        materials: [
           { type: 'pdf', title: '设计文档.pdf', url: '#' }
        ]
      },
      {
        id: "proj5",
        title: "全地形越障小车",
        role: "实践类项目",
        period: "2023.09 - 2024.08",
        description: "参与设计并组装了⼀款全地形智能平衡搬运小车，实现了从识别到验证障碍物的全过程自主控制。其中我负责硬件选型与软件控制核⼼开发。项目基于Arduino平台，自主设计底盘与整车结构，集成灰度、白标、TCS3200颜⾊识别及红外避障传感器，应用滤波算法与PID控制，实现循迹与跨越障碍，并在⽆遮挡的情况下将弹珠平稳运送⾄终点。",
        techStack: ["Arduino", "PID控制", "传感器融合", "滤波算法"],
        image: "https://picsum.photos/id/5/800/600",
        materials: [
           { type: 'pdf', title: '项目总结.pdf', url: '#' }
        ]
      }
    ],
    achievements: [
      {
        id: "award1",
        title: "2024年全国三维数字化创新设计大赛 - 全国一等奖",
        date: "2024.12",
        category: "Competition",
        image: "https://picsum.photos/id/10/800/600"
      },
      {
        id: "award2",
        title: "第18届CMC“西门子杯”中国智能制造挑战赛 - 全国一等奖",
        date: "2024.08",
        category: "Competition",
        image: "https://picsum.photos/id/11/800/600"
      },
      {
        id: "award3",
        title: "第26届中国机器人及人工智能大赛 - 国家级优秀奖",
        date: "2024.07",
        category: "Competition",
        image: "https://picsum.photos/id/12/800/600"
      },
      {
        id: "award4",
        title: "创祥杯全国大学生新创业大赛 - 国家级金奖",
        date: "2023.08",
        category: "Competition",
        image: "https://picsum.photos/id/13/800/600"
      },
      {
        id: "award5",
        title: "2024年第七届中国⾼校智能机器⼈创意⼤赛 - 国家级三等奖",
        date: "2024.07",
        category: "Competition",
        image: "https://picsum.photos/id/14/800/600"
      },
      {
        id: "award6",
        title: "2023年第五届国际青年⼈⼯智能⼤赛-中国赛区选拔赛 - 国家级三等奖",
        date: "2023.11",
        category: "Competition",
        image: "https://picsum.photos/id/15/800/600"
      }
    ],
    certifications: [
      {
        id: "cert1",
        title: "Strategy Consulting Job Simulation",
        issuer: "BCG",
        date: "April 20, 2025",
        image: "https://picsum.photos/id/40/600/400" 
      },
      {
        id: "cert2",
        title: "硬件工程师岗位岗前实训",
        issuer: "深圳市电巢科技有限公司",
        date: "2025年1月7日",
        image: "https://picsum.photos/id/41/600/400"
      },
      {
        id: "cert3",
        title: "西门子智能制造工程人才认证 - 助理工程师",
        issuer: "Siemens",
        date: "培训课程",
        image: "https://picsum.photos/id/42/600/400"
      },
      {
        id: "cert4",
        title: "HarmonyOS应用开发者基础认证",
        issuer: "Huawei",
        date: "2025年04月20日",
        image: "https://picsum.photos/id/43/600/400"
      }
    ]
  }
};