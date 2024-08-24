import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getDetailsProject } from '../../services/user/getDetailsProject';

export default function Details() {
    const [project, setProject] = useState([]);
    const { projectId } = useParams();
    const { admin } = useAuth();

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
                    <img src={project.img} alt="Project Image" style={{ width: '800px', height: '500px' }} />
                </div>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <a href={project.gitLink}>GitHub Link</a>
            </main>
            {
                Boolean(admin.username)
                    ? <>
                        <Link className="readedMessage" to={`/update/${project._id}`} style={{ margin: '10px' }}>Edit</Link>
                        <Link className="readedMessage" to={`/delete/${project._id}`} style={{ margin: '10px' }}>Delete</Link>
                    </>
                    : ''
            }



        </div>
    )
}