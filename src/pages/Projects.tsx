import Template from './Template';
import ProjectPreview from '../components/ProjectPreview';
import './Projects.css';

const projects = [
    {
        title : "ProtoPlay",
        source : "/projects/protoplay-preview.png",
        projectLink : "https://protoplay.tv",
        infoLink : "/protoplay"
    },
    {
        title : "Graphic Design",
        source : "/projects/design-preview.png",
        projectLink : "",
        infoLink : "/design"
    },
];

const Projects: React.FC = () => (
    <Template title="My Projects">
        {projects.map((project) => (
            <ProjectPreview key={project.source} {...project}/>
        ))}
    </Template>
);

export default Projects;
