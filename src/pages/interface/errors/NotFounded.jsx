import { Link } from "react-router-dom"

const NotFounded = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>Wah! Sahypa tapylmady</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2>bagyşlaň, ýöne gözlän sahypaňyz tapylmady. <br /><br /> <Link to='/' className="text-dark">Baş sahypa gitmek</Link></h2>
                </div>
            </div>
        </>
    )
}

export default NotFounded