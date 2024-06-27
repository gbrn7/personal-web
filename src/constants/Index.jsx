import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

export const navItems = [
  { label: "About Me", href: "" },
  { label: "Portofolio", href: "portofolio" },
  { label: "Contact", href: "contact" },
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
    title: "Fullstack Web Developer (Student Activity)",
    date: "Feb 2024 - Jun 2024",
    desc: "Developed Sirepo-JTI the Thesis Repository for Technology Information Departement State Polytechnic of Malang",
  },
  {
    title: "Fullstack Web Developer (Freelance)",
    date: "Jan 2024",
    desc: "Developed Gentle Baby website the B2B E-Commerce for purchasing medicines",
  },
  {
    title: "Programmer (Creatif.co.id)",
    date: "Jan 2024",
    desc: "Freelance Programmer at Creatif.co.id the Digital agency.",
  },
  {
    title: "Web Developer (Lecturer Assitant)",
    date: "Oct 2023",
    desc: "Assisted lecturers in developing Mamina websites for mother and baby treatment course",
  },
  {
    title: "Fullstack Web Developer (Student Project)",
    date: "Dec 2023",
    desc: "Developed decision support system with TOPSIS method calculation",
  },
  {
    title: "Fullstack Web Developer (Student Project)",
    date: "Feb 2023 - Jun 2023",
    desc: "Collaborated with 4 students as Fullstack Web Developer to create E-commerce for an Roastery House Coffee UMKM in Ngantang Malang",
  },
];
