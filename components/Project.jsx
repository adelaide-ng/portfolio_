import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "ecowear",
        description: "This is a project for ETHKL 2023, which focuses on integrating zero-knowledge proof technology.",
        image: "/projects/ethkl.png",
        gitUrl: "https://github.com/adelaide-ng/ethkl-ecowear"

    },
    {
        id: 2,
        title: "Coming Soon",
        description: "This is a future project.",
        image: "/projects/comingsoon.jpeg",
        gitUrl: ""
    },
    {
        id: 3,
        title: "Coming Soon",
        description: "This is a future project.",
        image: "/projects/comingsoon.jpeg",
        gitUrl: ""
    },
    {
        id: 4,
        title: "Coming Soon",
        description: "This is a future project.",
        image: "/projects/comingsoon.jpeg",
        gitUrl: ""
    }, {
        id: 5,
        title: "Coming Soon",
        description: "This is a future project.",
        image: "/projects/comingsoon.jpeg",
        gitUrl: ""
    }, {
        id: 6,
        title: "Coming Soon",
        description: "This is a future project.",
        image: "/projects/comingsoon.jpeg",
        gitUrl: ""
    }, 
];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;