export default function Login() {
    return (
        <section id="admin">
            <div class="content">
                <h2>Admin Panel</h2>
                <form action="#" method="post">
                    <label for="project-title">Project Title:</label>
                    <input type="text" id="project-title" name="project-title" required />

                    <label for="project-description">Project Description:</label>
                    <textarea id="project-description" name="project-description" required></textarea>

                    <label for="gallery-image">Gallery Image URL:</label>
                    <input type="text" id="gallery-image" name="gallery-image" required />

                    <input type="submit" value="Add Project" />
                </form>
            </div>
        </section>
    );
}