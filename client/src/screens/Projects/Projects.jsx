import ProjectCard from "../../components/ProjectCard/ProjectCard";
import woodShop from "../../asset/Project/woodshop.png";
import weather from "../../asset/Project/weather-together.png";
import gnome from "../../asset/Project/gnome.png";
import barber from "../../asset/Project/barbershop.png";

import "./Projects.css";


const works = [
  {
    title: "The Wood Shop",
    description:
      "The Wood Shop was created for a client in Tallahassee FL opening a barbershop. Using SEO and getsquire to help advertise and book appointments. ",
    img: woodShop,
    site: "https://thewoodshop.club",
    video: null,
    github: "https://github.com/pearllumi-developer/the-wood-shop",
  },
  {
    title: "Weather-Together",
    description:
      "This site was built with a team for a Hackathon, held by the U.S. Census. The idea was to give a way for neighbors to help each other during weather emergencies",
    img: weather,
    site: null,
    video: null,
    github: "https://github.com/ariellekatherine92/product-club-front-end",
  },
  {
    title: "Gnome-A-zon",
    description:
      "This project was build with my cohort. We created a light weight e-commerce store with a theme of selling garden gnomes. A user can browse through all the products. Also create a login and add their own projects.",
    img: gnome,
    video: null,
    site: "https://gnome-a-zon.netlify.app/",
    github: "https://github.com/mnebot86/Gnome-A-zon",
  },
  {
    title: "TheBarberShop",
    description:
      "This site was a personal project. I wanted to build a site where a user can make appointment by creating a login, then select a service, time and date.",
    img: barber,
    site: null,
    video: null,
    github: "https://github.com/mnebot86/TheBarbershop",
  },
];

const Projects = () => {
  return (
    <div className="project-page">
      <h1>My Projects</h1>
      <ProjectCard works={works}/>
    </div>
  );
};

export default Projects;
