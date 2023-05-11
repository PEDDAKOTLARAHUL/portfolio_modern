import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.jpg";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.jpg";
import p5 from "./assets/project-5.jpg";
import p6 from "./assets/project-6.jpg";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "websites",
        id: "websites",
    },
    {
        name: "portfolio",
        id: "portfolio",
    },
    
];

export const projects = [
    {
        name: "portfolio using 3D images",
        image: p1,
        tags: ["websites","portfolio"],
    },
    {
        name: "trying the different tastes",
        image: p2,
        tags: ["websites"],
    },
    {
        name: "try the new styles",
        image: p3,
        tags: ["websites"],
    },
    {
        name: "segmenting people according to their likes",
        image: p4,
        tags: ["machine learning"],
    },
    {
        name: "Enjoy the music!!",
        image: p5,
        tags: ["websites"],
    },
    {
        name: "sharing our data",
        image: p6,
        tags: ["websites","portfolio"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 2,
        description: "PROJECTS ON<br />MACHINE LEARNING",
    },
    {
        id: 3,
        year: 5,
        description: " WEB TECHNOLOGIES",
    },
    {
        id: 4,
        year: 2,
        description: "TYPES OF<br />PORTFOLIO WEBSITES",
    },
];
