import ProjectCard from "../../components/ProjectCard/ProjectCard";

import woodShop from "../../asset/Project/woodshop.png";
import weather from "../../asset/Project/weather-together.png";
import gnome from "../../asset/Project/gnome.png";
import barber from "../../asset/Project/barbershop.png";

import weatherVideo from "../../asset/video/weatherTogether.mp4";
import barberVideo from "../../asset/video/barberShopVideo.mp4";

import api from "../../asset/icons/api.png";
import css from "../../asset/icons/css.svg";
import firebase from "../../asset/icons/firebase.svg";
import git from "../../asset/icons/git.svg";
import github from "../../asset/icons/github.svg";
import heroku from "../../asset/icons/heroku.svg";
import jwt from "../../asset/icons/jwt.svg";
import mongoDB from "../../asset/icons/mongoDB.svg";
import netlify from "../../asset/icons/netlify.png";
import node from "../../asset/icons/node.svg";
import rails from "../../asset/icons/rails.svg";
import react from "../../asset/icons/react.svg";
import seo from "../../asset/icons/seo.png";

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
    icons: [netlify, react, seo, css, git, github],
  },
  {
    title: "Weather-Together",
    description:
      "This site was built with a team for a Hackathon, held by the U.S. Census. The idea was to give a way for neighbors to help each other during weather emergencies",
    img: weather,
    site: null,
    video: weatherVideo,
    github: "https://github.com/ariellekatherine92/product-club-front-end",
    icons: [netlify, react, firebase, api],
  },
  {
    title: "Gnome-A-zon",
    description:
      "This project was build with my cohort. We created a light weight e-commerce store with a theme of selling garden gnomes. A user can browse through all the products. Also create a login and add their own projects.",
    img: gnome,
    video: null,
    site: "https://gnome-a-zon.netlify.app/",
    github: "https://github.com/mnebot86/Gnome-A-zon",
    icons: [mongoDB, react, node, jwt],
  },
  {
    title: "TheBarberShop",
    description:
      "This site was a personal project. I wanted to build a site where a user can make appointment by creating a login, then select a service, time and date.",
    img: barber,
    site: null,
    video: barberVideo,
    github: "https://github.com/mnebot86/TheBarbershop",
    icons: [react, rails, heroku, jwt],
  },
];

const Projects = () => {
  return (
    <div className="project-page">
      <h1 id="projects">My Projects</h1>
      {works.map((work, idx) => (
        <ProjectCard key={`project-${idx}`} {...work} />
      ))}
    </div>
  );
};

export default Projects;
