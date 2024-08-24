import { useState, useEffect } from "react";
import { getHomeData } from "../../services/user/getHomeData";

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
                <div className="intro">
                    <h1>{data.title}</h1>
                    <p>{data.subtitle}</p>
                </div>
            </section>

            <section id="gallery" style={{marginBottom: '100px'}}>
                <div className="content">
                    <h2>Gallery</h2>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src={data.img1} alt="Gallery Image 1" style={{width: '500px', height: '300px'}} />
                        </div>
                        <div className="gallery-item">
                            <img src={data.img2} alt="Gallery Image 2"style={{width: '500px', height: '300px'}} />
                        </div>
                        <div className="gallery-item">
                            <img src={data.img3} alt="Gallery Image 3"style={{width: '500px', height: '300px'}} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}