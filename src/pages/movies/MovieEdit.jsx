import { useLoaderData, useNavigate } from "react-router-dom";
import {
	Box, Grid, Card, CardMedia, CardContent, Typography, Divider,
	List, ListItem, Button, TextField
} from '@mui/material';
import 'animate.css';
import { updateMovie } from '../../api/updateMovie';
import { useState } from "react";


const MovieEdit = () => {

    const navigate = useNavigate();
	const { movie } = useLoaderData();

	const onReturn = () => {
		navigate(-1);
	}

    const [isEditing, setIsEditing] = useState(false);
    const [editableMovie, setEditableMovie] = useState({ ...movie });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableMovie(prev => ({ ...prev, [name]: value }));
    };

    const handleActorChange = (index, value) => {
        const updatedActors = [...editableMovie.actors];
        updatedActors[index] = value;
        setEditableMovie(prev => ({ ...prev, actors: updatedActors }));
    };

    const handleSave =  async() => {
        await updateMovie(editableMovie, movie._id);
        setIsEditing(false);
    };

    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: 5, overflowX: 'auto' }}>
            <Grid container spacing={4} alignItems="flex-start" wrap="nowrap">

                {/* Imagen */}
                <Grid item xs={6} md={4} className="animate__animated animate__backInLeft" sx={{ minWidth: '300px' }}>
                    <Card sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={editableMovie.image}
                            alt={editableMovie.title}
                        />
                    </Card>
                </Grid>

                {/* Información */}
                <Grid item xs={6} md={8} className="animate__animated animate__backInRight" sx={{ minWidth: '400px' }}>
                    <Card
                        sx={{
                            backgroundColor: '#303030',
                            color: 'white',
                            borderRadius: 3,
                            px: 3,
                            py: 4,
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    label="Title"
                                    name="title"
                                    value={editableMovie.title}
                                    onChange={handleChange}
                                    variant="filled"
                                    margin="normal"
                                />
                            ) : (
                                <Typography variant="h4" gutterBottom>{editableMovie.title}</Typography>
                            )}

                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    value={editableMovie.description}
                                    onChange={handleChange}
                                    variant="filled"
                                    multiline
                                    rows={3}
                                    margin="normal"
                                />
                            ) : (
                                <Typography variant="body1" color="gray" paragraph>{editableMovie.description}</Typography>
                            )}

                            <Divider sx={{ my: 2, borderColor: '#444' }} />

                            <Typography variant="subtitle1">
                                <strong>Rating:</strong>{' '}
                                {isEditing ? (
                                    <TextField
                                        name="rating"
                                        type="number"
                                        value={editableMovie.rating}
                                        onChange={handleChange}
                                        variant="standard"
                                        sx={{ input: { color: 'white' } }}
                                    />
                                ) : (
                                    `${editableMovie.rating}/10`
                                )}
                            </Typography>

                            <Box mt={2}>
                                <Typography variant="subtitle1">
                                    <strong>Actors:</strong>
                                </Typography>
                                <List dense sx={{ color: 'gray' }}>
                                    {editableMovie.actors.map((actor, i) => (
                                        <ListItem key={i} sx={{ pl: 2 }}>
                                            {isEditing ? (
                                                <TextField
                                                    fullWidth
                                                    value={actor}
                                                    onChange={(e) => handleActorChange(i, e.target.value)}
                                                    variant="standard"
                                                    sx={{ input: { color: 'white' } }}
                                                />
                                            ) : (
                                                actor
                                            )}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box mt={1}>
                                <Typography variant="subtitle1">
                                    <strong>Director:</strong>
                                </Typography>
                                {isEditing ? (
                                    <TextField
                                        fullWidth
                                        name="director"
                                        value={editableMovie.director}
                                        onChange={handleChange}
                                        variant="filled"
                                        margin="dense"
                                    />
                                ) : (
                                    <Typography variant="body2" color="gray" sx={{ pl: 2 }}>
                                        {editableMovie.director}
                                    </Typography>
                                )}
                            </Box>

                            <Box mt={1}>
                                <Typography variant="subtitle1">
                                    <strong>Genres:</strong>
                                </Typography>
                                {isEditing ? (
                                    <TextField
                                        fullWidth
                                        name="genre"
                                        value={editableMovie.genre}
                                        onChange={handleChange}
                                        variant="filled"
                                        margin="dense"
                                    />
                                ) : (
                                    <Typography variant="body2" color="gray" sx={{ pl: 2 }}>
                                        {editableMovie.genre}
                                    </Typography>
                                )}
                            </Box>

                            <Box mt={4} display="flex" gap={2}>
                                <Button
                                    variant="outlined"
                                    color="info"
                                    onClick={onReturn}
                                    sx={{ borderRadius: 2 }}
                                >
                                    Return
                                </Button>
                                <Button
                                    variant="contained"
                                    color={isEditing ? 'success' : 'warning'}
                                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                    sx={{ borderRadius: 2 }}
                                >
                                    {isEditing ? 'Save' : 'Edit'}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieEdit;