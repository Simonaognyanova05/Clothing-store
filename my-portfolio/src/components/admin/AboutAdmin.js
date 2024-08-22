import { useNavigate } from 'react-router-dom';
import { updateAboutMe } from "../../services/admin/updateAboutMe";

export default function AboutAdmin() {
    const navigate = useNavigate();

    const updateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, specialty, location, education, description, profileImage } = Object.fromEntries(formData);

        const result = await updateAboutMe(name, specialty, location, education, description, profileImage);

        if (result.status === 200) {
            alert('About Me page was updated successfully!');
            navigate('/admin/');
        };
    }
    return (
        <section id="admin">
            <div class="content">
                <h2>Update About Me</h2>
                <form onSubmit={updateHandler}>
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

                    <label for="profileImage">Profile Image:</label>
                    <input type="text" id="profileImage" name="profileImage" required />

                    <input type="submit" value="Update" />
                </form>
            </div>
        </section>
    );
}