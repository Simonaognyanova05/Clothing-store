import { useAuth } from "../../contexts/AuthContext";

export default function HomeAdmin() {
    const { admin } = useAuth();

    console.log(admin.username);
    
    return (
        <>
            <section id="home">
                <div className="intro">
                    <h1>Welcome, {admin?.username || 'Admin'}!</h1>
                    <p>Now you can make the desired changes to your site.</p>
                </div>
            </section>


        </>
    );
}