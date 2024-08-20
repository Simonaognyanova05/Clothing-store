export default function AboutAdmin() {
    return (
        <section id="admin">
        <div class="content">
            <h2>Update About Me</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="specialty">Specialty:</label>
                <input type="text" id="specialty" name="specialty" required />

                <label for="location">Location:</label>
                <input type="text" id="location" name="location" required />

                <label for="education">Education:</label>
                <input type="text" id="education" name="education" required />

                <label for="description">Description:</label>
                <input type="text" id="description" name="description" required />

                <label for="profileImg">Profile Image:</label>
                <input type="text" id="profileImg" name="profileImg" required />

                <input type="submit" value="Update" />
            </form>
        </div>
    </section>
    );
}