export default function Owerview() {
    return (
        <section className="overview overview--bg">
            <div className="container">
                <div className="page-section">
                    <div className="row gutters-140">
                        <div className="col-xs-6 col-lg-3 overview__single-section">
                            <i className="material-icons">headset_mic</i>
                            <h2 className="overview__single-section__number">220</h2>
                            <p className="overview__single-section__title">Hand to Work</p>
                        </div>
                        <div className="col-xs-6 col-lg-3 overview__single-section">
                            <i className="material-icons">mood</i>
                            <h2 className="overview__single-section__number">530</h2>
                            <p className="overview__single-section__title">Happy Client</p>
                        </div>
                        <div className="col-xs-6 col-lg-3 overview__single-section">
                            <i className="material-icons">assignment_turned_in</i>
                            <h2 className="overview__single-section__number">780</h2>
                            <p className="overview__single-section__title">Finished Project</p>
                        </div>
                        <div className="col-xs-6 col-lg-3 overview__single-section">
                            <i className="material-icons">local_bar</i>
                            <h2 className="overview__single-section__number">970</h2>
                            <p className="overview__single-section__title">Cups of coffe</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}