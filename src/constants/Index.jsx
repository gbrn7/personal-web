import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import laravel from "../assets/laravel.svg";
import react from "../assets/react.svg";
import postgresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import nodeJs from "../assets/node-js.svg";
import expressJs from "../assets/expressJS.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.png";
import mongodb from "../assets/mongodb.svg";
import suppmycoffee from "../assets/suppMyCoffee.png";
import superMarketer from "../assets/superMarketer.png";
import furnitureShop from "../assets/FurnitureShop.png";
import hotelResort from "../assets/hotelResort.png";
import plantShop from "../assets/PlantShop.png";
import simplyInterior from "../assets/simplyInterior.png";
import virtualR from "../assets/VirtualR.png";
import spkTopsis from "../assets/spkTopsis.png";
import griyaSehatQta from "../assets/GriyaSehatQta.png";
import gentleBaby from "../assets/gentleBaby.png";
import sinaw from "../assets/sinaw.png";
import sirepoJTI from "../assets/sirepoJTI.png";

export const navItems = [
  { label: "About Me", href: "" },
  { label: "Portofolio", href: "portofolio" },
];

export const contactItems = [
  {
    icon: <MdEmail />,
    label: "Email",
    href: "mailto:muhammadrayhangibran@gmail.com",
    value: "muhammadrayhangibran@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    label: "Phone",
    href: "https://wa.me/6282132679938",
    value: "+62-821-3267-9938",
  },
  {
    icon: <GrMapLocation />,
    label: "Location",
    href: "#",
    value: "Malang, East Java, Indonesia",
  },
];

export const socmedItems = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/rayhangibran_19/",
  },
  {
    icon: <SiLinkedin />,
    label: "LinkedIn",
    href: "#",
  },
];

export const experienceItems = [
  {
    title: "Sirepo-JTI",
    date: "Feb 2024 - Jun 2024",
    desc: "Developed Sirepo-JTI the Thesis Repository System for Technology Information Departement State Polytechnic of Malang",
  },
  {
    title: "Griya Sehat QTA",
    date: "Feb 2024",
    desc: "Developed the online clicnic reservation Griya Sehat Qta (freelance project)",
  },
  {
    title: "Gentle Baby",
    date: "Jan 2024",
    desc: "Developed Gentle Baby website the B2B E-Commerce for purchasing medicines (freelance project)",
  },
  {
    title: "Programmer (Creatif.co.id)",
    date: "Jan 2024",
    desc: "Freelance Programmer at Creatif.co.id the Digital Agency",
  },
  {
    title: "Web Developer (Lecturer Assitant)",
    date: "Oct 2023",
    desc: "Assisted lecturers in developing Mamina websites for mother and baby treatment course",
  },
  {
    title: "Supp-My-Coffee",
    date: "Feb 2023 - Jun 2023",
    desc: "Collaborated with 4 students as Fullstack Web Developer to create E-commerce for an Roastery House Coffee UMKM in Ngantang Malang",
  },
];

export const technicalSkillItems = [
  {
    image: laravel,
    title: "Laravel",
    subtitle: "Back-End Development",
  },
  {
    image: react,
    title: "React",
    subtitle: "Front-End Developmont",
  },
  {
    image: nodeJs,
    title: "Node JS",
    subtitle: "Javascript Runtime",
  },
  {
    image: expressJs,
    title: "Express JS",
    subtitle: "Back-End Development",
  },
  {
    image: tailwind,
    title: "Tailwind CSS",
    subtitle: "CSS Framework",
  },
  {
    image: bootstrap,
    title: "Bootstrap",
    subtitle: "CSS Framework",
  },
  {
    image: mysql,
    title: "MySql",
    subtitle: "Database",
  },
  {
    image: postgresql,
    title: "Postgree",
    subtitle: "Database",
  },
  {
    image: mongodb,
    title: "MongoDB",
    subtitle: "Database",
  },
];

export const portofolioCardItems = [
  {
    image: sirepoJTI,
    title: "Sirepo-JTI",
    subtitle: "Thesis Repository System for Technology Information Departement",
    category: "Web Fullstack",
    href: "https://sirepojti.gbrncode.com/",
  },
  {
    image: suppmycoffee,
    title: "Supp-My-Coffee",
    subtitle: "Roastery House E-Commerce website with payment gateway",
    category: "Web FullStack",
    href: "https://suppmycoffee.gbrncode.com/",
  },
  {
    image: spkTopsis,
    title: "Topsis Method",
    subtitle: "Decision Support System",
    category: "Web FullStack",
    href: "https://topsis.gbrncode.com/",
  },
  {
    image: gentleBaby,
    title: "Gentle Baby",
    subtitle: "B2B E-Commerce for purchasing medicines (freelance project)",
    category: "Web FullStack",
    href: "https://gentlebaby.konsulasi.com/sign-in",
  },
  {
    image: virtualR,
    title: "VirtualR",
    subtitle: "VirtualR Landing Page",
    category: "Front End",
    href: "https://virtualr.gbrncode.com/",
  },
  {
    image: griyaSehatQta,
    title: "Griya Sehat Qta",
    subtitle: "Online Clinic Reservation",
    category: "Web FullStack",
    href: "https://griyasehatqta.com/",
  },
  {
    image: superMarketer,
    title: "Super Marketer",
    subtitle: "Digital marketting Agency Landing Page",
    category: "Front End",
    href: "https://supermarketer.gbrncode.com/",
  },
  {
    image: sinaw,
    title: "Sinaw",
    subtitle: "Course Landing Page",
    category: "Front End",
    href: "https://onlinecourse.gbrncode.com/",
  },
  {
    image: simplyInterior,
    title: "Simply Interior",
    subtitle: "Interior Service Landing Page",
    category: "Front End",
    href: "https://simplyinterior.gbrncode.com/",
  },
  {
    image: hotelResort,
    title: "Hotel Resort",
    subtitle: "Hotel Resort Landing Page",
    category: "Front End",
    href: "https://hotelresort.gbrncode.com/",
  },
  {
    image: furnitureShop,
    title: "Furniture Shop",
    subtitle: "Furniture Shop Landing Page",
    category: "Front End",
    href: "https://myfurniture.gbrncode.com/",
  },
  {
    image: plantShop,
    title: "Plant Shop",
    subtitle: "Plant Shop Landing Page",
    category: "Front End",
    href: "https://plantshop.gbrncode.com/",
  },
];
