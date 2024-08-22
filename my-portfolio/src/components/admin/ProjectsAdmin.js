export default function WelcomeUser() {
    return (
        <section id="admin">
        <div class="content">
            <h2>Create Project</h2>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required />

                <label for="description">Description:</label>
                <input type="text" id="description" name="description" required />

                <label for="img">Image:</label>
                <input type="text" id="img" name="img" required />

                <input type="submit" value="Update" />
            </form>
        </div>
    </section>
    );
}