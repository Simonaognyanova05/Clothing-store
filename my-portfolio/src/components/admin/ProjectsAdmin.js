import { useNavigate } from "react-router-dom";
import { createProject } from '../../services/admin/createProject';

export default function ProjectsAdmin() {
    const navigate = useNavigate();

    const createHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, subtitle, description, gitLink, img } = Object.fromEntries(formData);

        let res = await createProject(title, subtitle, description, gitLink, img);

        if (res.status === 200) {
            alert('The project was created successfully!');
            navigate('/admin/projects');
        };

        e.target.reset();
    }
    return (
        <section id="admin">
            <div class="content">
                <h2>Create Project</h2>
                <form onSubmit={createHandler}>
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

                    <input type="submit" value="Create" />
                </form>
            </div>
        </section>
    );
}