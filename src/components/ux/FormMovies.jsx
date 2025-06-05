import { Button } from '@mui/material';
import React from 'react'

const FormMovies = ({ formData, handleSubmit, setFormData, error, success }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleActorsChange = (index, value) => {
        const updatedActors = [...formData.actors];
        updatedActors[index] = value;
        setFormData({ ...formData, actors: updatedActors });
    };

    const handleAddActor = () => {
        setFormData({ ...formData, actors: [...formData.actors, ''] });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto form-movie bg-oficial p-4 rounded shadow mb-5">
            <h4>Create new movie</h4>
            <div className="mb-3">
                <input name="title" className="form-control" placeholder="Títle" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label">Release year:</label>
                <input name="releaseYear" type="number" className="form-control w-25" placeholder="releaseYear" value={formData.releaseYear} onChange={handleChange} />
                <input name="genre" className="form-control w-50" placeholder="Genre" value={formData.genre} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <input name="director" className="form-control" placeholder="Director" value={formData.director} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Actors:</label>
                {formData.actors.map((actor, idx) => (
                    <input key={idx} type="text" className="form-control mb-2" value={actor} onChange={(e) => handleActorsChange(idx, e.target.value)} />
                ))}
                <button type="button" className="btn btn-outline-light btn-sm mt-1" onClick={handleAddActor}>
                    Add actor
                </button>
            </div>
            <div className="mb-3">
                <textarea name="description" className="form-control" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label">Rating:</label>
                <input name="rating" type="number" step="0.1" max="10" min="0" className="form-control w-25" placeholder="Rating" value={formData.rating} onChange={handleChange} />
                <label className="form-label">Image:</label>
                <input type="file" className="form-control w-50" accept="image/*" onChange={handleImageChange} />
            </div>
            <Button type='submit' variant="contained">Create Movie</Button>
            {error && <p className="alert alert-danger mt-2">{error}</p>}
            {success == 'Movie created' && <p className="alert alert-success mt-2">{success}</p>}
        </form>
    )
}

export default FormMovies