export default function Details() {
    return (
        <div className="container-details">
            <header className="header-details">
                <h1 id="details-title">Project Title</h1>
            </header>
            <main style={{marginBottom: '30px'}}>
                <div className="project-image">
                    <img src="project-image.jpg" alt="Project Image" />
                </div>
                <div className="project-description">
                    <p>This is a detailed description of the project. It includes information about the project's
                        objectives, challenges, and outcomes. You can provide as much detail as needed to give visitors a
                        clear understanding of the project.</p>
                </div>
                <a href="">GitHub Link</a>
            </main>
            <a className="readedMessage" href="" style={{ margin: '10px' }}>Edit</a>
            <a className="readedMessage" href="" style={{ margin: '10px' }}>Delete</a>


        </div>
    )
}