import { useNavigate, useParams } from "react-router-dom";
import { updateProject } from '../../services/admin/updateProject';

export default function UpdateProject() {
    const navigate = useNavigate();
    const { projectId } = useParams();

    const updateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, subtitle, description, gitLink, img } = Object.fromEntries(formData);

        let res = await updateProject(title, subtitle, description, gitLink, img, projectId);

        if (res.status === 200) {
            alert('The project was updated successfully!');
            navigate('/admin/projects');
        };

        e.target.reset();
    }
    return (
        <section id="admin">
            <div class="content">
                <h2>Update Project</h2>
                <form onSubmit={updateHandler}>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label for="subtitle">Subtitle:</label>
                    <input type="text" id="subtitle" name="subtitle" required />

                    <label for="description">Description:</label>
                    <input type="text" id="description" name="description" required />

                    <label for="gitLink">GitHub Link:</label>
                    <input type="text" id="gitLink" name="gitLink" required />

                    <label for="img">Image:</label>
                    <input type="text" id="img" name="img" required />

                    <input type="submit" value="Update" />
                </form>
            </div>
        </section>
    );
}