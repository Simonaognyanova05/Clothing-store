import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProject } from "../../services/admin/deleteProject";

export default function DeleteProject() {
    const navigate = useNavigate();
    const { projectId } = useParams();

    useEffect(() => {
        deleteProject(projectId)
            .then(() => {
                navigate('/projects');
            })
    }, []);

    return null;
}