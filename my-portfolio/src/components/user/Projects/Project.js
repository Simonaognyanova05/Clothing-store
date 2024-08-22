import { useEffect, useState } from "react";
import { getProjects } from "../../../services/user/getProjects";
import ProjectCard from "./ProjectCard";

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
            .then(result => {
                return result.json()
            })
            .then(res => {
                setProjects(res);
            })
    }, [projects])
    return (
        <section id="projects">
            <div class="content">
                <h2>My Projects</h2>
                <div class="projects-grid">
                    {
                        projects.length > 0
                        ? projects.map(x => <ProjectCard project={x} />)
                        : <h2>There are no existing projects!</h2>  
                    }
                </div>
            </div>
        </section>
    );
}