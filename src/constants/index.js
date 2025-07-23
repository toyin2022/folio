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
        name: "Tailwind CSS",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "React Native",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
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
          "data:image/png;base64,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",
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
  // {
  //   title: "DevOps",
  //   skills: [
  //     {
  //       name: "AWS",
  //       image:
  //         "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
  //     },

  //     {
  //       name: "Docker",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  //     },
  //     {
  //       name: "Jenkins",
  //       image:
  //         "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
  //     },
  //     {
  //       name: "Nginx",
  //       image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
  //     },

  //     {
  //       name: "Kubernetes",
  //       image:
  //         "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Android",
  //   skills: [
  //     {
  //       name: "Java",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //     },
  //     {
  //       name: "Kotlin",
  //       image:
  //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //     },

  //     {
  //       name: "Android Studio",
  //       image:
  //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //     },
  //   ],
  // },

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
        name: "Vercel",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAclBMVEX/bDf/////ajT/Ziz/aTH//Pv/ZSn/YiP/6OL/Yyb/3dT/8Oz/YB7/VQD/6+b/+Pb/WxD/4tr/pYz/zsH/iGP/gFf/tqL/sJr/kW//jWv/lnf/hFz/fVL/mn3/w7P/eEv/ckD/n4T/vav/1sz/q5P/SwC0tdBnAAAN80lEQVR4nN2d57ajIBCAFbCDYqxJjBpN3v8VV1NuLNgiaM7Ovz17rvETmBlgiiSvFKvIMJJWCzLgQV/7LtKqv3bMC6YcUB6ikbNnKXvB2J5PNMAJpRaVJKm+Aud7GD0NqMqR5CGQ5qHpbA3jFj6BvFFqQTSPzC9H5zsYOzxrQlAeODi7mZvBOKmPuE+wpkAjiKxtYLyjpPJc9kwccE43gHGO1S8JRqkEQOm82O4shUmNLVCeONpNKIye0I1QHoKlZYpgCYxSQKHrvi9QC5cYnQUw7oWb5zJbAI0XDM5sGMVL8NYoteAsnT04c2GsUKxpGRZozLY5M2H0Cw8//zuppprLE6b0d5lib8GBxw8mzXaaYm+BecEJRonAblPsLQhEMzzpaRjnYGxpKAcEaNdppTYJY53o3iBPobG9FsY+/ghLTTPleU7A6L/DUtH4EzTjMLr/QyyVip6gGYWx9zUvfcHn0XUzBmPHP8ZS0RzHaEZgrJO297v3xTiNOGrDMM51Z7PPFnXE3gzCKLet9sfLBKi3QV9gEKb4BbvPEqAOntsMwXj7sYCXDP0/gkM+9ABMKe3kWwIEpbyW+qUHeGA+sJVmw+j+TooMSklcuI6iOK53OOcDOJrPVtBMGOe6j+FHyA+bNj6NJbZGpQemSmPChPuwwPzW+eJO4bPHhjI3ayyYEu+y+GHi9ZVuylYEALOWDQPGyoTdVowJzBjvp8cqYtKoCWOiMWD28WIAKBnf1Sdx6TO/rXadA1PsY/nVqP9yTkKPumwyzQRAfdvZg9GzXSwMyvssck4fLv+BOTQw6bmcPZiTsTXHQwhjwUAcPN5XGVg21ymYQtplkqH+dHdy/F7kN+YqRnnXrek8RPf38fv7dsMKaPBWWDZh/pERdyZaG0aJdnJjSHf+2/6HRZYH7lDVcAym3Gf1Swh0zKV+JM8NsmPW/s3AQoZB+0S9BeNcd9r0Q78No8fkdeRnJvU+ORx4Lxy1TGcLxttrc2mcWjB2xfJyOMucVsY0HXAWUfvSswnjHPdRy12Y2u6/nWf7RFJF9oY8X9xyn5swg38iXNS4AeME9HOgZF3uFczQyHQczgaMstPqrwSeGzAZjj+f2/VJNc2iwbVsND9DA8Zja/MtBGiNVwqaZ8oFSap/jMx/4jJh9tnFvF6pucE8kj+Va11IbeZHPjPMWDA7DkytYxswzome30vB9aopZ4692t1kwOy3YqT6JKYBU40H9ZsL+zTmY8FzH6bcxV4iQ8PYqD4j8bo0n7Vgj39m7PZg4h32ygbOLrfodsk0hLKWLbcv9Pz3jpfxV4OnLoy7veuvaafUtBxZscwIqEY7HquiCV5KwZt4NZDbHZjb1isG4pP35yorerUs2ttg60Se0XNlMvVqIGrDOOeNZxnNvMa8MsMj6u61nOODxmWfZzQF+k4Lxss3nWWI3hooeowoIVTrjI2SkLPlJtNfGbw/wwtm24slAzYVr5lRLTJtLya0c5Hka0CaM2PepwFPGHfLWYa0U/ONzZxcngylRNXwkw2gOB6ep5bgy/95wmx5jKFKrf1+NS5/bnwKEaUXT7cr0b0DnOuTgNcEfcA41822/gCeyy7Ln1Kz42q2G5RodVIAWeAragflD8bcbJYhdLEHWSoD8fSOx+7NmAKf/oL0HN6NZhmU2iGKZtJikcMv9RCQvDeMc9vIL4N5O3jUDEiLRY6+3bfjRzhaDaNP2yUuombtXJLyfG/rYmvUPR599FF/wZTss1zeomXtezHz/NbJb0m/fhEglS+YweMCrkKD9tlYNcc6LGX+/X09TZ8w1iaKmXbO+dyky+JRdAm+9Xe1q/WA2eJGBuCD3GbJSHu9KMUdeN+7iCjTHzCmeF2GUCf41c3otaXHnMM98+QV5/bUrGEU8UsGSUV3jnVYrMu98gy+12b1olEqGOcgeslU5mViXPTj/eiuu4SoD2ol2fp60c0U2L3hqtb+te3U+KT2cpThg8sZv3K2ahjBs6zHUtmX9riUydMRcIMVxhvgGsYVe/gHu6lWta1ssihpTh/5S0qxar4Tt4IRu/5VqPdYWmGWSoHwc0mtNBHUq2CErn9D6oT2uJ1xkW/06fHKytD12EzBN1lSRHqZWt65eNWD9rjIJ5K/Nmv6ykRD1VckZeE+aNHzg+64ZJ1xycj7qE9JVp6pAFDBCMu8BLAb7V7ZlxaLlVP//e9irR4CVJEsUcoMwKPbZ2kMlWLm9O8ucyBuYYkQSxq9+1gjPRa9w+LlH+/TOa8/uCOuJOpWVu2m8LkBabI4qQQ/ARY8VCr1pEKMz4yPXfvit1nCpsf2/Raz+ZOFxI4YWv3gbrBuxdIM23EOOPtEZPKJcsGRdBARyID9jn1x2yxKTIOPl6MfuZg67SCJuDFTp1gS2qhc4HD6nupV8gVsALpxuvq5xWJB6je2zLxWLTpK/HczCKF7i0bPWj6MifGl8b8er/gDFEgZnyf9CVCv9kFt0ugJPX3UgZIauHl9aaq8viZIpJzTo95PhJUCVq4GLZssjQVSaKAZv+fm/K65eI+LBB/GRLnSd5KLnpAmS4RbG0894GgZcn6Peoj2MozOlTxfutJjDRbrQFvXM9bx5/INP/JxviqazHvq5M96sU+05bBZJ84sOcdn0YbSsg4kK90jabgC9Sg1HQPnwtdg5zxhaGsT6YQ4acb0yWbWPpVxDpzvuHKOKoC2Yqb19ASA0WDxJNJKSlRunCs+gYyf0fywKGboG2r12SHEf8u9QPfWLbMScS1aJz2M5pETjPHYECuWd80JwQ+Hz4iP8P5SxBEmZZuF+z6qcmdWnFW3REsdtzgZd6q9v44a6/IB3svH8iDts0BHQFqbeuK2BQBAI7R58/XYNisHoxoR+/p3CPNmEbBZr7YA3FIZOkdW6suiVMs8PZF2/QtFBEu9OSvEnAFoLxZLz5GG2of+SiTkEIWmgg40YG0r7TKNLj7AOE/bLGJ8GOoJOmqCJy+6HjNM7jCODiQpmyyCKgoSV9whIL2T7FKYru1Yt8qz+Vv7wuoMEEvE8SzSCEFxVNqW8zT5Dc3sHERVeqyPZxXuoWZGfvAsRWm6Ls6Vau6Thbfd/xNUoSi8U+bUgFGNTLniu/0Ivub7Y83fjRVJ5hzSpJ6ZldWUi0F0kSyPyybO14DwPFBFQbkaUCTL8xqQq25Wh1gq8VWhIbpEr6/OOZb+0EZY9JPQqDagPuIA+F1q4mS4EmEpuCxHHXZeh5vw0gAjLEoqumICvtUw3JIAMUsnP8WJhJd+qdY/xxAtbXhcrAsUHtKmmc/gucmcjlkPG2ZxM+HFqiUYPIPnuMRoGcNzrCAb5OZodQw+p4DTQVspO/EmWYbvgFO5XO1rDrI4Zr7JafInFPiRT7BGBu2+HRobxX8/DhlqmLX7WC1gsyhlLMzh78gnfF72VgUDaRl77VthtlVKfiOxYU6S2rBoCXtcyhhuli7VTDlRVijnARblkG1Yu66ZDCSnX+uzAZYyQRsmfrbStL5POtFYpa+qYdkSpZtA921qo8ocF0/aSom9X+MqN2G8/JtPCVk62Y23bh+AOkmnX4WdsljsEG5+gfxXteadqB0u/5pq0CuvZnnBps02noLeURJvGGtx5kpfjznlle5QVQD8xRv/FTe4LnyNPot5y3cpWwWvchdGXzbVeyx6FGj7VOHAeg9GXhSOhzssTnhGu9R4rK8b5T6Me5//gO64FMkmvY+YcncZMPKMMgIv6dh9L4fbZHqyBDGL6MxPpGnbfZNLo8OvpVkZsVl4Kp63/UBNFtPfQxt/RPXZhadmHqAh1IyuxjsXdR8qCTavip5xviH0zlR0bjs3QcDXoWJtsjntbtZnfSECbxpBwfdzZaSMXh1BOfHXD/vifGimqvUIFnwbLnAouxOZH/jpJ1c06BlvtV3BCpaMlp6snOdR24ff52NOCNUHjcU5MnGRADhaFFS2xtQz/pz1KaFmPJ4kKHRklkyUax3dcrbP+iJq1GPz/VHIakF5t2Jzrxrv4GlAd78fkprGFJ0ZPSzTJY5lZyDBGCXdfWU1NqHs8IokXCww6FU579dJ9thOI8iisnR127Ysy3GcOpqk0hZFed6ttUO/CQWjYPvAhS3AtBKMsnN8uUZhkZZmrGq7OZm4N8mYMEowotEAQFCtqxJSSvZ0ZdT+JGM3OXCN3TvOTQlSZzY52KoQzRqhzB40TBhlb2d4SuiB2R2I3bLF/uW8lmrxD3TWG2imY+a77h/Hhdl1YwSmsjY/qwSQurDN0YYF3JYKgIsbUFXeym/SAMjoIDIJ8z81bas3Xj/YTk+7WMNvPNbokHuy3nqhY60Bx1tQWr/UGrQWehztRz3eHPSHmrbWMtWGdqJtqx3/EA09jbNMN9T9lebAdXruVM/z6VbHQsPEF0invttXMCITKxYIMma01J7T6/wX2oNL4fR7zmvcXuztQ6vZoD+2GEb2gl3NJ/YZ3em+hpHNeIfIi5cgfJlQyQthZOu2UehoTwwpnO4/vwxGdtJkl6mGz4zGlGthZNk9bT/VEL1OtZ7/DkZWCrG5SX0xUDp7WBbC1CkKW041QLs1BbnCyHKobRWMAaDBbDTLEUa2/U3CZACUjnOV2Pcwspz6QLSWBqp0HDpP4gsjW+FZbDC5ivxi8bB8CVMpgigRdzEDNb9YtvDXwdTVWDIxEb+QBsVwgqQQmArHLTL+AU0VSvotygqYutFSGhCuMQ0aOXvfTbDVMHId/BtTXmYUUXoqv1n2vGAqsSPAI2oW4byY3ONPyT90WcxoxxdkzQAAAABJRU5ErkJggg==",
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
