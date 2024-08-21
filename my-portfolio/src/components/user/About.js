import { useState, useEffect } from 'react';
import { getAboutData } from '../../services/getAboutData';

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAboutData()
            .then(result => {
                return result.json();
            })
            .then(res => {
                setData(res);
            })
    }, [data])
    return (
        <section id="about">
            <div class="content">
                <h2>About Me</h2>
                <img src={data.profileImage} alt="Your Photo" class="profile-photo" />
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Specialty:</strong> {data.specialty}</p>
                <p><strong>Location:</strong> {data.location}</p>
                <p><strong>Education:</strong> {data.education}</p>
                <p>{data.description}</p>
                <a href="assets/CV.pdf" download class="btn">Download CV</a>
            </div>
        </section>
    );
}