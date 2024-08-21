import { useState, useEffect } from "react";
import { getHomeData } from "../../services/getHomeData";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getHomeData()
            .then(result => {
                return result.json();
            })
            .then(res => {
                setData(res);
            })
    }, [data])
    return (
        <>
            <section id="home">
                <div class="intro">
                    <h1>{data.title}</h1>
                    <p>{data.title}</p>
                </div>
            </section>

            <section id="gallery">
                <div class="content">
                    <h2>Gallery</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src={data.img1} alt="Gallery Image 1" />
                        </div>
                        <div class="gallery-item">
                            <img src={data.img2} alt="Gallery Image 2" />
                        </div>
                        <div class="gallery-item">
                            <img src={data.img3} alt="Gallery Image 3" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}