import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDetailsProject } from '../../services/user/getDetailsProject';

export default function Details() {
    const [project, setProject] = useState([]);
    const { projectId } = useParams();

    useEffect(() => {
        getDetailsProject(projectId)
            .then(result => {
                return result.json();
            })
            .then(res => {
                setProject(res);
            })
    }, [project])
    return (
        <div className="container-details" style={{ marginBottom: '100px' }}>
            <header className="header-details">
                <h1 id="details-title">{project.title}</h1>
            </header>
            <main style={{ marginBottom: '30px' }}>
                <div className="project-image">
                    <img src={project.img} alt="Project Image" style={{ width: '800px', height: '500px' }}/>
                </div>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <a href={project.gitLink}>GitHub Link</a>
            </main>
            <a className="readedMessage" href="" style={{ margin: '10px' }}>Edit</a>
            <a className="readedMessage" href="" style={{ margin: '10px' }}>Delete</a>


        </div>
    )
}