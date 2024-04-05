/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio-cover.jpg";

const imageAltText = "notebook and pen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pitagoras Social Network Service",
    description:
      "Lightweight social network service that allows users to create posts and interact with them. Developed with Vue and TailwindCSS, backend with ASP.NET and MongoDB. Made for an academic assignment.",
    url: "https://github.com/dcancho/PitagorasSNS.App",
  },
  {
    title: "PhoneResQ",
    description:
      "Team project for Web Applications Development course. PhoneResQ is a web application that allows users to request technical support for their mobile devices. Developed with Vue and ASP.NET.",
    url: "https://github.com/DevInvent-Grupo-1-App-Web",
  },
  {
    title: "FurniGo",
    description:
      "Team project for Open Source Applications Development course. FurniGo is a web application that allows users request custom designs for furniture to workshops and carpentries. Developed with Angular and Spring Boot.",
    url: "https://github.com/G4-FurniGo",
  },
  {
    title: "Pixela",
    description:
      "Team project for Computational Mathematics course. Pixela is a desktop application that allows users to apply blurring, Laplace and Sobel filters to images. Developed with .NET and WPF.",
    url: "https://github.com/dcancho/Pixela",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
