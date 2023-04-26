import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:5000/getMovieList", {
                method: 'GET',
                mode: 'cors'
            })

            let data = await response.json();
            if (data.status === true && data.message)
            {
                console.log(data.message);
                setMovieList(data.message);
            }
        })()

    }, [])

    return (
        <>
            <div className="container">
                <h1 className="text-center my-4">Movie List</h1>
                <div className="container">
                    <div className="row">
                        {movieList && movieList.length > 0 && movieList.map((list, index) => (
                            <div className="col-md-3 my-3" key={index}>
                                <div className="card" style={{ width: '18rem', backgroundColor: 'antiquewhite' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{list.name}</h5>
                                        <h7 className="card-subtitle mb-2 text-body-secondary" key={"subtitle" + index}><span style={{ float: 'right' }}>Rating {list.rating}</span></h7>
                                        <p className="card-text">Description about Movie</p>
                                        <p className="card-text">Release Date <span style={{ float: 'right' }}>{list.release_date}</span></p>
                                    </div>
                                </div>

                            </div>
                        ))}



                    </div>
                </div>

            </div>
        </>
    )

}

export default MovieList;