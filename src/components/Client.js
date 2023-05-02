import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from "react";

export default function Client() {
    const [movie, setMovie] = useState([]);

    // Fetching movies data
    useEffect(() => {
        const movies = [
            {
            
                name: "PONNIYAN SELVAN",
                rating: 9.3,
                summary:
                    "Sensing an uprising in the capital, Crown Prince Aditha Karikalan sends his friend Vallavaraiyan Vandiyadevan on a mission that sets off a series of conspiracies against the reigning king.",
                poster:
                    "https://static.moviecrow.com/gallery/20220907/204607-ps2.jpg",
            },
            {
                
                name: "Baahubali: The Beginning",
                rating: 8.4,
                summary:
                    "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
                poster:
                    "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg",
            },
            {
            
                name: "The Dark Knight Rises",
                rating: 8.5,
                summary:
                    "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
                poster:
                    "https://collider.com/wp-content/uploads/the-dark-knight-rises-christian-bale-poster1.jpg",
            },
            {
                
                name: "MAN OF STEEL",
                rating: 8.0,
                summary:
                    "Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.",
                poster:
                    "https://i.pinimg.com/originals/d4/a2/fa/d4a2fabf43e4d605844bbed6577f099f.jpg",
            },
            {
            
                name: "K.G.F - 2",
                rating: 7.5,
                summary:
                    "Rocky successfully rises as the leader and saviour of the people of the Kolar Gold Fields. But, in his goal to fulfil his mother's wishes, Rocky must tackle Adheera, Inayat Khalil and Ramika Sen.",
                poster:
                    "https://cinimirror.com/wp-content/uploads/2022/04/Screenshot_20220407-124510.jpg",
            },
            {
                
                name: "RRR",
                rating: 8.0,
                summary:
                    "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
                poster:
                    "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
            },
    
        ];

        setMovie(movies);
    }, []);

    return (
        <div>
            <div className='row' >
                <div className="col-md-12" style={{ justifyItems: 'center' }}>
                    {movie.map((object, index) => (
                        <container>
                            <row>
                                <Card key={index} style={{ width: '20rem', display: 'inline-flex', marginLeft: '50px', marginTop: '50px' }}>
                                    <Card.Img variant="top" src={object.poster} />
                                    <ListGroup className="list-group-flush">
                                        
                                        <ListGroup.Item>Name : {object.name}</ListGroup.Item>
                                        <ListGroup.Item>Rating : {object.rating}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Button variant="primary">Book my show</Button>
                                    </Card.Body>
                                </Card>
                            </row>
                        </container>
                    ))}
                </div>
            </div>
        </div>
    )
}

