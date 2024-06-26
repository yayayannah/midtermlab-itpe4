import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native'; // Changed import statement

import Styles from '../Styles/moviesStyles';
import stylesMain from '../Styles/mainStyles';
import 'react-native-gesture-handler';
import axios from "axios";

const Movies = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const headers = {
            "Content-Type":"application/json"
        }
      axios.get('http://localhost:5000/movies')
        .then(response => {
          setItems(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [ratings, setRatings] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');

    const openModal = (type) => {
        setModalType(type);
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }

    return(
        <ScrollView>
            <View style={Styles.container}> 

            {items.map(movie => (
                    <TouchableOpacity key={movie._id} style={Styles.movieDetails}>
                        <Text style={Styles.movieTitle}>Title: {movie.title}</Text>
                        <Text style={Styles.movieSubs}>Director: {movie.director}</Text>
                        <Text style={Styles.movieSubs}>Ratings: {movie.ratings}</Text>
                        <Text style={Styles.movieSubs}>Genre: {movie.genre.join(', ')}</Text>
                        <Text style={Styles.movieSubs}>Release Year: {movie.releaseYear}</Text>
                    </TouchableOpacity>
                ))}

                <View style={Styles.btnContainer} >
                    <View style={Styles.btnAdd}> 
                        <TouchableOpacity  style={Styles.btnAddColor} onPress={() => openModal('Add')}  >
                            <View >
                                <Text style={Styles.txtProceed}> Add </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.btnEdit}> 
                        <TouchableOpacity style={Styles.btnEditColor}  onPress={() => openModal('Edit')} >
                            <View >
                                <Text style={Styles.txtProceed}>Edit </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.btnDelete}> 
                        <TouchableOpacity style={Styles.btnDeleteColor} >
                            <View >
                                <Text style={Styles.txtProceed}> Delete </Text>
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

