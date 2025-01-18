
import "./header.css"
import { Link } from "react-router-dom";
 const Header =() =>{
    return (
       <div className="header">
        <div className="headerLeft">
            <Link to="/"><img className="header_icon"alt="img1" src="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkNxdUFpN1RXaXVwazNxTE0tN2JLN05Zb1pXQXxBQ3Jtc0tuclgyRUtMZTl3SkQ2Z2dtSkVfUk5pMHF1ekplX2hkS19RbENvS0hQRl83NnB2RlZmTVk0VGlaeEUwM2hQZDc4VHhMSFF6MF94ZTNMbmhZOXN4N0xFQ002UmFiQlo3blFKQ2FtVXdTU2thLXA3dTFPUQ&q=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F69%2FIMDB_Logo_2016.svg%2F2560px-IMDB_Logo_2016.svg.png&v=KH-pw1cv34E"></img></Link>
            <Link to="/movies/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
       </div> 
    )
 }
 export default Header