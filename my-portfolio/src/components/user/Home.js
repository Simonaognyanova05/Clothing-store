export default function Home() {
    return (
        <>
            <section id="home">
                <div class="intro">
                    <h1>Welcome to My Portfolio</h1>
                    <p>I'm a Web Developer with a passion for creating amazing websites.</p>
                </div>
            </section>

            <section id="gallery">
                <div class="content">
                    <h2>Gallery</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="https://via.placeholder.com/300x200" alt="Gallery Image 1" />
                        </div>
                        <div class="gallery-item">
                            <img src="https://via.placeholder.com/300x200" alt="Gallery Image 2" />
                        </div>
                        <div class="gallery-item">
                            <img src="https://via.placeholder.com/300x200" alt="Gallery Image 3" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}