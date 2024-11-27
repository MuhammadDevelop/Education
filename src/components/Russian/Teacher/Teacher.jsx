import './Teacher.scss'

export default function Teacher() {
    return (
        <div className="teacher">
            <h2 className="teacher__title">
                Bazi qisqa videolar
            </h2>
            <div className="teacher__general">
                <iframe
                    width="450"
                    height="550"
                    src="https://www.youtube.com/embed/sP5Vz2kchLU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <iframe
                    width="450"
                    src="https://www.instagram.com/reel/DAnN2L4t_Fu/embed"
                    height="550"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                />

                <iframe
                    width="450"
                    height="550"
                    src="https://www.youtube.com/embed/pbznlAfmkKc?si=WDRDWgbF5YN8Huit"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />


            </div>
        </div>

    )
}
