import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tachpae,
  elsoft,
  vegeelsvg,
  gpaCalc,
  cwt,
  tega,
  ben,
  dara,
  tachpaeApp,
  tachpaeEvent,
  pjtravels,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Freelancing",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Built and deployed scalable React.js web applications for multiple startups in finance and education sectors.",
      "Integrated third-party APIs including Stripe, Firebase, and Supabase for payments and authentication.",
      "Converted Figma designs into fully functional UIs using Tailwind CSS.",
      "Worked directly with clients to gather requirements, iterate quickly, and deliver under tight deadlines.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Elsoft Hub",
    icon: elsoft,
    iconBg: "#F3F4F6",
    date: "April 2023 - October 2024",
    points: [
      "Developed enterprise-level dashboard applications using React, context api, tailwind, and other libraries.",
      "Created reusable component libraries with different libraries and integrated testing with Jest",
      "Collaborated with product and QA teams in an agile environment, delivering bi-weekly sprints.",
      "Optimized backend APIs and reduced database query latency by using a reusable complex data fetching axios file implementation.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Tachpae Ride",
    icon: tachpae,
    iconBg: "#D1FAE5",
    date: "October 2024 - March 2025",
    points: [
      "Designed and developed a React Native ride-hailing app for both Android and iOS platforms.",
      "Implemented app security like fingerprint authentication.",
      "Worked closely with backend engineers to define RESTful APIs for driver-passenger communication.",
      "Improved app performance to me the fintech standard in Nigeria. and so much more.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Tachpae Events",
    icon: tachpae,
    iconBg: "#FDE68A",
    date: "March 2025 - June 2025",
    points: [
      "Built a ticketing and event management system using typescript React, Redux, and Tailwind CSS.",
      "Integrated image upload with Cloudinary and secure authentication with Node.js.",
      "Developed an admin dashboard for event organizers to manage users, ticket sales, and analytics.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Oluwatoyin is an amazing person and a great developer,I am lucky to have been able to have the chance to study under him,he's been amazing and can turn any dark situtation into a bright one.",
    name: "Anjola Tega",
    designation: "Student",
    company: "Lead City",
    image: tega,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Toyin does.",
    name: "Eniola Oluwadarasimi",
    designation: "Owner",
    company: "Baking haven",
    image: dara,
  },
  {
    testimonial:
      "Their deep expertise in software development, particularly in full-stack solutions like MERN, has been a game-changer for our projects",
    name: "Benjamin Omohkodion",
    designation: "Founder",
    company: "golden tech",
    image: ben,
  },
];

const projects = [
  {
    name: "Vegeel",
    description:
      "I worked with elsoft to bring about a saas application using microservice architecture design, Springboot and nodejs. and also react loads of javascript libraries like framer motion, shadcn, tailwind and many more. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "microservice",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "blue-text-gradient",
      },
    ],
    image: vegeelsvg,
    source_code_link: "https://www.vegeel.com/",
  },
  {
    name: "Tachpae App",
    description:
      "I worked with amazingly talented developer (jaystance) to build a ride hailing app using react native, nodejs and mongodb and other modern technologies. The app is built with the latest technologies and provides a seamless user experience.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: tachpaeApp,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.jay_stance.tactpae",
  },
  {
    name: "Tachpae Events",
    description:
      "At Tachpae Events, I played a key role in developing a comprehensive event management platform that streamlines the process of organizing and managing events. The platform is designed to cater to the needs of event organizers, attendees, and marchandise vendors, providing a seamless experience for all stakeholders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: tachpaeEvent,
    source_code_link: "https://www.tachpae.com/events",
  },
  {
    name: "Code With Toyin (under redesign)",
    description:
      "A learning platform to give you coding tutorials and tips! Whether you're just starting out or looking to enhance programming skills. Explore languages like Python and JavaScript with their frameworks, dive into web and app development, and community of learners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: cwt,
    source_code_link: "https://code-with-toyin.vercel.app/",
  },
  {
    name: "GPA Calculator",
    description:
      "A super interactive web based gpa calculator. What makes the projet so special is that I built it under 3 hours using react, framer motion and tailwind ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: gpaCalc,
    source_code_link: "https://gpa-calculator-jade.vercel.app/",
  },
  {
    name: "PJ Travels",
    description:
      "A static website with html css and javascript. The website is designed to provide information about the travel agency, its services, and how to contact them. It is a simple yet effective way to showcase the agency's offerings.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mobile responsive",
        color: "blue-text-gradient",
      },
    ],
    image: pjtravels,
    source_code_link: "https://pj-smoky-five.vercel.app/",
  },
];

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Tailwind CSS",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEWCgoL////l5eXk5OTm5ubu7u74+Pj19fXx8fH7+/vr6+t+fn52dnZ7e3t8fHzz8/OGhoaTk5Pa2tq3t7e7u7utra3Q0NCZmZnFxcWkpKSMjIzKysqpqanX19e/v7+dnZ1ra2tH/Sn9AAASPElEQVR4nOVdbZuyKhBWwTcErcxqa7fO//+VB9RKGF6tdvWc+bLPNY+m48DMzc0AURzHWYKTjP9FOEn5nzTBaKJNPLW5UYtxQozawqYtH1o8V4ui/4eFKEG9hcn4fgmaqU2S0ZaHNndpi0Fbjlr8Ni0atVGWZXmapjn/y/8U/E/B//6etnmnttFoI/4BemcgxUVBWuLS8iaES/6XENLwPw1vSpPPngzXPj67TYtDtIhrI6ztZm/pkuKZDbcpLgt0uV73+7b74tJ1bdterztUZDgl5Se6JJpoP+ZD/uNNnKNTdztHlFJWV7LUjCuj8609oIx/hfRzPvxI3yqanBzaIzeNGxbZpKq4pdG2PeBcdKKXepyhH747lgotut4iyuymKYYyGt1O6aRpvi+WvrXzYZKSXbehDscZrKxp1F1wms7sfNZ8iAa/oLGbIeSjJRrt9RjmO+hLtj31HkDD+6GhS6Kxm3losaKNAs0yG9uQ042+Yt1dano8lS+ahT6QLUjH2BvMG42sOxKTt2WLV8MLwqT42b7FfU+p6PYkUunrQSd6PUU0pK3e576nsKgl8euJQ84W4ck/IWj/UmyxScW+EQlO/gi9M1vkqPuYfYONXfGWbDHbh+1H7Rts3AdCNUX7Qj/M8lNUf9g+IXV0KssX+uH8WIo2n4gvOmFnFAjVprF0bj7Mvukv2SeEfudkbj6cBdUScnhz/nMJ745kHoCbh0uz2286cBB2K3NvqDbFpeHZAse/7cBBKnpKfZvmS1wbSY6/78BB2FGid/wAXPAYvznMGvy9R6rqEH+Ya0ua6185cBDaEm1eQO/i2vDxt3KgSdgRuUmA2Vwb2W3+roXepdqgIAAX0g/zw187cBB2yD/DtaXt33bBp/DO6IBqs0ZP6dcyPCiEfZXeAM4b0xTH3xhH+Aq72aHaFNP4RRqcnP8+xkylOqO3ZguMFhBEZRlCqgmqhXJtJdr8tUE6yd/GtZVkaQ4cJS0n75tqE0fqw7VhtFADo2j3Fq4NL7OJ9rJ5C9eWLNdAHlHdAM7ZD/OFpQlZqm2hQrU8kGtLj0s2kJt4dAE4Rz5Mv5aEZHRS6wCcP9eWt8vBoiahJzuAs0YacljKaMIm9IKtkcaWLXbL96AQtsMWAGcZHyZ4wXlCkk0410Z6Vm3hYfQp1TZWoJoX19Zc19FGhbCOhI+e8M8aosxd6CGYa8PJX790mFTBXFu8mk44SHUsIdeW27i2VWTCqdALCeHakmxtBnITrflQ5drIbV1ttJctCeDaVtdGhdCDPtLossUK26gQmjW+XNv3Ctsol+o7s3NtZEwcGVqnC7kTf0YriJ1ry9cCuKGc/bi203rwqCrs4sW1/fVrviKVB9fWtEtnZmxSt42La0vQetuoELZzcW2kW2emuEvVObm2dbtQpH0719bs1+1CkfaJbWyBydpdyIONNVuQdu0u5E5sCeTaSErEGJ+kxfoN5CYWI9c2ADh59PQT3EjF4roqOh+3x/OG/5u5y/oAJvT9qup1GwO6ZD+xmWvbej5sfCSj5/ZARAMfJCM/+1tlLz5lRawI8QP61Zd649Fw5TZOTFyb57PGV2VfP6X6UCGojay/A27wI2Yr9TbjrBFFyXQEnOcj15ZnTUC2p+eDzrpRdluzjdAX8dbjuTRRbjLzuVVX5gPXlitcm3+qoEdksa935Nn4Y/SiXty42w5rlXtyy8uy2JAPfYdNbLNz2CfkZHxtmqrXXpxPPqu32PzODgau7eZnIL162Ce+4tk0StmAa13tlKrxyTp1W91kru1BknrFmaqv8PCTzvCL9bd6pYP7omqn3zmuR4lubHH1iTMUxgmLXAwvAt7YEjciTXDKHK262uPHngVPH6am9CK92j7EQPO3Zo16pY2DBoni7HrPSYUGH+OTYYzvkwxhGJxrIogcpZlaoGrgdtdPUJJDrs1j0h42LrcYmh+I/uauBS51dML+nl0Os4U73fd1HUDK5HDat/vrAWW6/zZlDQoyjomHVt1ty4R3qbocjp6cLCnr4Ovj9nzf1YND8HOrAg8hX/o3ZwDy6R8LEoUPAoo2mcy1cZDjJLqrLXj3n7OCsistmNN/O/h72lcAXd+viIlibpTEtRVO+oKpjRCddW+kATzY0BUBcuhgtBHJWxKPTtj/uPgwUj5sDG3pIaDfGFdfwJRpYA5AjNRkgUppy65M+LhPgAqJa8t97phIaUbWfKiqAk/TtaqFIGOBj+DVCe+/PeXasCsbKnGhtI/M1RczLCcCTTDeyxeCRLH3H/7s5P3asGNJk9pnXNQDxfL1hkANEYTcTtVE4dkJhdQnOVs4SbbQtkJlWGYigKgK49OpDWqi8O2EQqqWTLk20thBKZNzgE/AVj6/6TIwkJoMUoGH/Tshl2Mjc232q2Xo6zXMUrrQyQA71Qg2YcNALw0s55W5Nvv4rJZ7oRPZ9yI3sdKYW1SIkN+vVEFPQCfsfziXuDY7oqH59EmepSiKC4zVDwCVjYNKNR6XgVwuv//OteV52pgake5d/VyoRhHz0AUMpPqSOpAoQgvt6lPT2zbEUvusIZPgjHdjUbqY0UKA6HtvqXYH19RX3VAbPeRDYiWhqPQoF7ybvLrnffRHsYb3AzWNzKiAuZGnhYjYWp7Ckvh/Sya9uYUxrKV+Lr6GmihCO6GQ82jhEEttV9bSwDcgolVS80vNN4KBVKkmiqBMeJfp2MIYy4XIDSZkklhOo5YLmYPg8oej0x8tJ1xbYbNQ7k4hdZkydLPdCQdSU5lXhkaLwYeEkKK0/sRRelpISZgchK3eB4ThRLJ5FT4MpYSk5RBLbfMGlZyYgibgpHhhnX6t5O8oycyS8/7pYyzFV8tXklF3wzb+EkndyxJqxGO0RJ6Ques+6v3UQttEjmsizVcsnK8QMJAaZXYtaHWNH1xbaesicC5srji6MJyR6r/L7OKJ6ppz2/IhllotfJeBrioBzeRwPLsTit/bk2c+tI3w32ehk87TcK0vLL7iFj65Nhvwrt9mobMcSdMVZ9snIBV5cG3E9nX13WOOOOGQpp3aA7D718ZY+ksWWgeh/TvpbpptYj+svVtoA1RggDpbXPUIeug2O9TcLRR8VGHz4fv6ocNCOKXYiyONWiz8ikWx3sDT2CIN0z53loX2dzU1lrkp/x5p+mxhs1DOFqL8dqZgeywFjNRDunkZo+rSJ9dmzYfSAJz8Q2eL3UDLDLov96VYyDP+nWtrbBYyaQrihehtfx0wSfPyQ6s2e3Bt1vYjD/I+ZqHFQHNdjv0nReTyGVvINI2V75gvgP5VTJyz4vM+thgstI2AZTrzIxaqiaJQYcacEUY9+rCPpdZamvkshreoiWILaq9mpAy2688eGCy03i8nRJ/asFBRh6AnBkF4+D4yFBFPrk1OVB9YNaTSv31BLcj/wSmDNhOuzTq55k1dzxSQKHpbAIXqUUgsC82eXBvC1jeQwkBQtbuXqIliDHugnQanjOnMTGptAnKDmWuISdRCnUfGBe00MGWcpZkZ+9yTVA0V0hHZVAyXqCOKs/F/Aj/ubfRhURRNXlpBsdwRDTVc2hsvu4noiSjVU5MpCrVkJSxlVG3JbbtzbaaSnvFamVzwX1gj5xntJWqikLu56sSQGRp2kOra7F9HflP/SWDpy2hDFFMLSqSAUIN6z4BlS2Ief1LXZq/FkJup92PkGKJjaUCiUJwEeI2AlMGjx7OuLcHEfrUM3HzHFzK41IEhlSGBfVx1YsCeJESU85bJ3UI7GFN6ix//JY9pdRVboKITJK0KtFPvMoIjCalrUx/ks5uiMl+mwUKgm2mwJ+TfPA2c1rWVOQc3jtpEqtQS+MyrO9wDE4U+D6kW+i3t4TFMrCEts0ddmyPLgfIz5wkClVw0rQnAYFJLOzCD8dQvZYgZdmkNqatGGGRf05qm0b6NUhUO469viTpsp36xPFbWkDYu0AdQ4o/lMCtQ6g1dCBKFOSWrT8492ulQ5/3g2ji4yVyTCrCyPm4N/CCLADMIG6Baom4mD2A79UgZ9bXhiE3Y9lhR4kxymqmvvGPAkRWN4Iw83C8Flv5b1j2B9Q3ulEF3GKwKchMwunXNh+/oeRJuzejmW7O+FDZA4BcrbAT+dqeMTQbXkDpHRZpFM4Mnd5e9OMq42192aoFaLw0MIaBX258M5hVdA5yqfZwNxWMp7tcfYjc9UQetrnwKbB2gxTs+L2ynjtlvdhlOXcaTNaQYu9MMm2Ui3BAcLIJzDvzgMjA75mDJzDWkzDa7oJccLs2AcxTOB8Nb7CsTpmtIB66tLEjqnITmUp/1iwyNomsZteoQD2IEVNlaU0Z9SnNu1IRrG3Yc8Bsx+KzFf4huFAJ+wWtIDdvptyW/GHYc8FuPT8EKCaPkuhPaYAL3eqxm+s2Y3/r1+LodeDz3VKgA9WCQkxbzgEThSd7BdmpMGYKTePqw59rynGOcwrsmgG08ljxfIu0HA4nCm/aB7dSUMmg+GDXl2ob92vypUFZdtcn9LunecAgySBT+82bem6KIzbAM+7WFMPbifHBDvSQ+Gc+whoWyATuJwnaqJ9Aowsb92sL2GKppddwfyMSZOTmITYYsrV19x6DFTGApcqzdXm4bg/3a7uePkfBtL8UidVZtztvteRP1/7b65HzcyhL2tI1y91aHUtipX7rN/RhPuLZxvzYHqbgS+d/t11aWgmsjOf/L/6Tr33OPCahWlg23JisnXNu42/VaN0l+ipjPtZ6N8B/Z+9JyNgJZuRN7jk3esXzk2sY/Ta6hHNYkrCgGa5pC5dri+9kItvUzi5f66nM2wpqbaeV1NsLa9/NWz0Z4cG09yBFbZJTzClaXIBsyQjWMn7EUno1gX424ZKE/WDkbQbPbNcK8wfov116UiLMR7hYihWsry4L/fQA4n920Figsf0C1Jwwt5WwxJn+yosOsnsLGrQS9ziFNV3nOTBpyDumHyrk/KfTR+RQfTri2CYDLV5cU2amUrNBzbRN3ktWd2dXEmlPJrOeQ/vU7B0oSfA4pXtWZT/ez80znkHJbe65NAnAzquP/TEQZhQTVjFybfJjHarpiP/8uQTWQLTDSWJgs+bxqSTYAqk0tlLk2CcClazlLFqUqVDNzbUryX0W0EdMZKlTzOYc0WdWZzrZTq60+TMnX0k1kw7ncifkcUhnkKACuycuFY/DqFuugmpVrUwEcLIdZkFRnPVTzPZd7mHNbcs7YTDpfEnIOqQzg/toMi5igmoVrGwGcpHXVD/+dZCXWQjVs59pgg13qIUm5Eaq5uDbVwnKJDbXiBhqhmotrgwAOb5bmxuqMSzNUc3FtcvIf4s/CkoZIExaoFpYtBm0xa3PGT0l9hHnBmi2sPrwDuNtyABy7OaCamWtrLAAu3i9lpEH3LqjmwbWNWtmd12WYKBbFOaCaF9em0ZKfJfTFeufufD5cm1aLkfGUqt8Sdu7fzAHVDFybB4CLy++/bam0Hd5MhmpYhWoTrSVbID0D9/5tIwKk3yzHA6r5cW0GLbEci/dhYVuEVVCmh2qeXJsEiCba8o/SBt0X/Ttk2jcL5dqQTUt2f+BGdu6PzEy8oJo316YHcFxL9HX4n5OKtinW5AWPbGHn2sza/PabTZXeUqIHZU5tZIRqDm2TGZYbfEBYdMkAiNRDS6jVcW2q4wzaIr5algK/Typ2JcQIyt7BtVm0PP9/2saKdplf53uBazNoxe/ku9tHbazokUwDqATK9FoL1yaSKYRqd21u0hZfH7OR+6+IG/AOE1DmAeAgE2UBcIlWS1BHPxFzatohXQbwgWqhXJtdy7Njetm82ZEV3Vwx8QBl7+LaTADufm0c777e6EhGv3ZxagNlZqimal+MNA9tgsv4YFzQFSQ8uhxSgsNjiiHSvJQtplrx62i/pS/lyKqm22s2Ly+8zLX5aHmXJGKXhXqOlVXFou6EyDCE9wVl7+HaQrR5nmXodItYkJUVo9HtuhNbbweCMqfWiLyDAJxGuzt9b/stM5ztkhu37U48WDV4Bih7L9cW0iV5b2jiHJ262zmilD12B6meu4RQGp2P3QWJ0Jc+u87zF5LZnW821+YVViVtI5Ja2aDLdb/ft93X7fbVdW3b7q871GT8P6VRrQcoCw6req5tJoC7ayGk6ktXSJ/BY5KSHgoRy7VWUBYG4KxMVBCAy21aArVyI9RrZ0O1l7g2K4BLVG0+aIlR+yoo+wjX9prWC369rn0AuE9HmlTu+3rtRyPNv+c/cIe0nzmlAAAAAElFTkSuQmCC",
      },
      {
        name: "Graph Ql",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Java",
        image:
          "data:image/png;base64,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",
      },

      {
        name: "Spring Boot",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "SupaBase",
        image:
          "data:image/jpeg;base64,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",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },

      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
      },
      {
        name: "Nginx",
        image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      },

      {
        name: "Kubernetes",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      },

      {
        name: "React Native",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "data:image/png;base64,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",
      },

      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, skills };
