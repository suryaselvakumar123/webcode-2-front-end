import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, Image, Stack, Button, Text, Heading, CardBody, CardFooter } from '@chakra-ui/react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export default function UserDetail() {
    const { movieid } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({id: "", name: "", rating: "", summary: "", poster: ""});

    useEffect(() => {
        // Fetch movie details with the given movieid
        // Replace this code with your own data fetching logic
        const fetchedMovie = {
            id: movieid,
            name: "Example Movie",
            rating: "7.5",
            summary: "This is a summary of the example movie.",
            poster: "https://via.placeholder.com/500x750.png?text=Movie+Poster",
        };
        setMovie(fetchedMovie);
    }, [movieid]);

    return (
        <div>
            <h1 style={{ marginLeft: '100px', marginTop: '10px', color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>Detailed page of the Movie 🤞✨</h1>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{ marginLeft: '50px', marginTop: '50px', width: '100%', height: '100%' }}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={movie.poster}
                    alt='Caffe Latte'
                    style={{ width: '500px' }}
                />

                <Stack>
                    <CardBody style={{ marginLeft: '30px' }}>
                        <Heading size='md'>Id no   :    {movie.id}</Heading><br/>
                        <Text py='2'>
                            <Heading size='md'>Name           : {movie.name}</Heading><br/>
                            <Heading size='md'>Rating            : {movie.rating}</Heading><br/>
                            <Heading size='md'>Summary          : {movie.summary}</Heading><br/>
                           </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            style={{ marginLeft: '30px' }}
                            onClick={() => navigate(-1)}
                            variant="contained"
                            // startIcon={<ArrowBackIosIcon />}
                        >
                            <ArrowBackIosIcon />
                            BACK
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
}
