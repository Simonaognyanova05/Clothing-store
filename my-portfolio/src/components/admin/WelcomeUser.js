export default function WelcomeUser() {
    return (
        <section id="admin">
        <div class="content">
            <h2>Update Welcome User Page</h2>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required />

                <label for="subtitle">Subtitle:</label>
                <input type="text" id="subtitle" name="subtitle" required />

                <label for="img1">Image 1:</label>
                <input type="text" id="img1" name="img1" required />

                <label for="img2">Image 2:</label>
                <input type="text" id="img2" name="img2" required />

                <label for="img3">Image 3:</label>
                <input type="text" id="img3" name="img3" required />

                <input type="submit" value="Update" />
            </form>
        </div>
    </section>
    );
}