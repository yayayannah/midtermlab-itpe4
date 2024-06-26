import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import Styles from '../Styles/moviesStyles';
import axios from "axios";

const Movies = () => {
    const [items, setItems] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [ratings, setRatings] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = () => {
        axios.get('http://localhost:5001/movies')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    };

    const openModal = (type, movie = {}) => {
        setModalType(type);
        setTitle(movie.title || '');
        setDirector(movie.director || '');
        setRatings(movie.ratings || '');
        setGenre(movie.genre ? movie.genre.join(', ') : '');
        setReleaseYear(movie.releaseYear || '');
        setSelectedMovieId(movie._id || null);
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedMovieId(null);
        setTitle('');
        setDirector('');
        setRatings('');
        setGenre('');
        setReleaseYear('');
    }

    const handleAddMovie = () => {
        const newMovie = {
            title,
            director,
            ratings,
            genre: genre.split(',').map(g => g.trim()),
            releaseYear,
        };

        console.log('Sending request to add movie:', newMovie); // Debug statement

        axios.post('http://localhost:5001/movies', newMovie)
            .then(response => {
                console.log('Add movie response:', response.data); // Debug statement
                fetchMovies(); // Fetch the updated list after adding
                closeModal(); // Close modal after adding
            })
            .catch(error => {
                console.error('There was an error adding the movie!', error.response.data); // Log error details
            });
    };

    const handleEditMovie = () => {
        const updatedMovie = {
            title,
            director,
            ratings,
            genre: genre.split(',').map(g => g.trim()),
            releaseYear,
        };

        axios.put(`http://localhost:5001/movies/${selectedMovieId}`, updatedMovie)
            .then(response => {
                fetchMovies(); // Fetch the updated list after editing
                closeModal(); // Close modal after editing
            })
            .catch(error => {
                console.error('There was an error updating the movie!', error);
            });
    };

    const handleDeleteMovie = (id) => {
        axios.delete(`http://localhost:5001/movies/delete/${id}`)
            .then(response => {
                fetchMovies(); // Fetch the updated list after deleting
            })
            .catch(error => {
                console.error('There was an error deleting the movie!', error);
            });
    };

    return (
        <ScrollView>
            <View style={Styles.container}>

                {items.map(movie => (
                    <TouchableOpacity key={movie._id} style={Styles.movieDetails} onPress={() => openModal('Edit', movie)}>
                        <Text style={Styles.movieTitle}>Title: {movie.title}</Text>
                        <Text style={Styles.movieSubs}>Director: {movie.director}</Text>
                        <Text style={Styles.movieSubs}>Ratings: {movie.ratings}</Text>
                        <Text style={Styles.movieSubs}>Genre: {movie.genre.join(', ')}</Text>
                        <Text style={Styles.movieSubs}>Release Year: {movie.releaseYear}</Text>
                    </TouchableOpacity>
                ))}

                <View style={Styles.btnContainer}>
                    <View style={Styles.btnAdd}>
                        <TouchableOpacity style={Styles.btnAddColor} onPress={() => openModal('Add')}>
                            <View>
                                <Text style={Styles.txtProceed}>Add</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={closeModal}
                >
                    <View style={Styles.modalContainer}>
                        <View style={Styles.modalContent}>
                            <Text style={Styles.modalTitle}>{modalType} Movie</Text>

                            <TextInput
                                style={Styles.input}
                                placeholder="Title"
                                value={title}
                                onChangeText={setTitle}
                            />
                            <TextInput
                                style={Styles.input}
                                placeholder="Director"
                                value={director}
                                onChangeText={setDirector}
                            />
                            <TextInput
                                style={Styles.input}
                                placeholder="Ratings"
                                value={ratings}
                                onChangeText={setRatings}
                            />
                            <TextInput
                                style={Styles.input}
                                placeholder="Genre"
                                value={genre}
                                onChangeText={setGenre}
                            />
                            <TextInput
                                style={Styles.input}
                                placeholder="Release Year"
                                value={releaseYear}
                                onChangeText={setReleaseYear}
                            />

                            <TouchableOpacity
                                style={Styles.btnCloseModal}
                                onPress={modalType === 'Add' ? handleAddMovie : handleEditMovie}
                            >
                                <Text style={Styles.txtProceed}>{modalType === 'Add' ? 'Add' : 'Update'}</Text>
                            </TouchableOpacity>

                            {modalType === 'Edit' && (
                                <TouchableOpacity style={Styles.btnCloseModal} onPress={() => handleDeleteMovie(selectedMovieId)}>
                                    <Text style={Styles.txtProceed}>Delete</Text>
                                </TouchableOpacity>
                            )}

                            <TouchableOpacity style={Styles.btnCloseModal} onPress={closeModal}>
                                <Text style={Styles.txtProceed}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        </ScrollView>
    )
}

export default Movies;
