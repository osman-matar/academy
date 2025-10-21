import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa6";
import webImage from "./src/assets/web-development.avif"
import softwere from "./src/assets/graphic.avif"
import graphic from "./src/assets/graphic.avif"

export const cardData = [
    {
        id: 1,
        img: <CiMap/>,
        title: "Books Library",
        description: "The gradual accumulation of information about atomic and small-scale behaviour ...",
        color:"#E74040" ,
        bgColor: "#FFDCD1" ,
    },
    {
        id: 2,
        img: <FaImages/>,
        title: "Market Analysis",
        description: "The gradual accumulation of information about atomic and small-scale behaviour ...",
        color:"#2DC071" ,
        bgColor: "#B9EAA8" ,
    },
    {
        id: 3,
        img: <FaCreditCard/>,
        title: "50+ online courses",
        description: "The gradual accumulation of information about atomic and small-scale behaviour ...",
        color:"#23A6F0" ,
        bgColor: "#B2E3FF" ,
    },
]

export const coursesData = [
    {
        id: 1,
        img: graphic,
        department:"Graphic Design" ,
        title: "UI & UX Design",
        rating: "4.7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel, commodi ullam voluptate cum neque reiciendis unde nemo reprehenderit optio!",
        sales: "80",
        price: "$11.99",
        discount: "$4.99",
        duration: "22hr 30min",
        lessons: "64 lessons",
    },
    {
        id: 2,
        img: softwere,
        department:"Software Development" ,
        title: "Project Design",
        rating: "4.6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel, commodi ullam voluptate cum neque reiciendis unde nemo reprehenderit optio!",
        sales: "160",
        price: "$15.99",
        discount: "$7.99",
        duration: "30hr 30min",
        lessons: "121 lessons",
    },
    {
        id: 3,
        img:webImage ,
        department:"Web Development" ,
        title: "HTML & CSS",
        rating: "4.9",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel, commodi ullam voluptate cum neque reiciendis unde nemo reprehenderit optio!",
        sales: "288",
        price: "$10.99",
        discount: "$8.99",
        duration: "16hr 40min",
        lessons: "107 lessons",
    },
]

export const ratingData = [
    {
        id: 1,
        stars:"⭐⭐⭐⭐",
        img: "./src/assets/mrbean.jpg",
        description: "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands on projects helped me build real world Skills. Highly recommend it to anyone to learn!",
        person: "Gamal Mahmoud",
        job:"Software Engineer"
    },
    {
        id: 2,
        stars:"⭐⭐⭐",
        img: "./src/assets/minions.jpg",
        description: "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands on projects helped me build real world Skills. Highly recommend it to anyone to learn!",
        person: "Omer Mohamed",
        job:"Developer"
    },
    {
        id: 3,
        stars:"⭐⭐⭐⭐",
        img: "./src/assets/anjielo.jpg",
        description: "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands on projects helped me build real world Skills. Highly recommend it to anyone to learn!",
        person: "Mahmoud",
        job:"UI / UX"
    },
]