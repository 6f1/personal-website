import Template from './Template';
import ProjectPreview from '../components/ProjectPreview';
import appData from '../dataConstants';
import './Projects.css';

const Projects: React.FC = () => (
    <Template title="My Projects">
        {appData.projectData.map((project) => (
            <ProjectPreview key={project.title} {...project}/>
        ))}
    </Template>
);

export default Projects;
