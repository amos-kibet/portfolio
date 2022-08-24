import React from "react";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I mostly develop APIs and backend applications, but occassionaly do frontend, that are not style-heavy (honestly, CSS scares me, and I never want to gain the courage to touch it.). Technologies I use include, but not limited to: Elixir (PETAL, Absinthe), NOde.js, Python (Flask, Django), PostgreSQL, MySQL, MongoDB, Docker, Terraform, ansible, aws, Azure, fly.io, Gigalixir.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Iot Development",
    text: `I develop IoT solutions from hardware to software. Technologies I use include but not limited to: Nerves Project (Elixir), Node.js, RaspBerrry pi, Arduino, Azure, aws, Docker, PostgresQL`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Web & IoT Consultancy",
    text: `I also offer consultancy services. Let us discuss your project together, and hopefully develop it together as well.`,
  },
];
