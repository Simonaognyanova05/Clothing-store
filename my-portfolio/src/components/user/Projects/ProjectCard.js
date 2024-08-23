import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <Link id='project-link' to={`/projectDetails/${project._id}`}>
            <div class="project">
                <img src={project.img} alt="Gallery Image 1" style={{ width: '300px', height: '200px' }} />
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
            </div>
        </Link>
    );
}