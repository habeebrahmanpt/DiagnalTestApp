import React, { useState } from 'react';
import { FlatList, Image, PixelRatio, RefreshControl, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getMovieList } from '../../Data/MovieData';
import Images, { getImageByName } from '../../Themes/Images';
import styles from './Style';


export default class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            search: false,
            tittle: '',
            movieList: [],
            searchList: []
        };
        this.lastListCount = 0;
        this.isRequesting = true;
    }
    componentDidMount() {
        this.getMovies(0, 20);
    }


    /**
     *  Get Movies list from server
     *
     */
    getMovies(skip, take) {
        console.log('getMovies', skip)
        const movieData = getMovieList(skip, take)
        this.lastListCount = movieData.page['page-size-returned']

        if (skip == 0) {
            this.setState({
                tittle: movieData.page.title,
                movieList: movieData.page['content-items'].content
            })
        } else {
            this.setState({
                movieList: [...this.state.movieList, ...movieData.page['content-items'].content]
            })
        }

    }
    /**
    * Render Row for Movies List
    *
    * @param {Object} rowData
    * @param {Number} sectionID
    * @param {Number} rowID
    */
    renderDataItem(row, sectionID, rowID) {
        let rowData = row.item;
        return (
            <View style={styles.flatListItem}>
                <Image style={styles.flatListItemImage}
                    source={getImageByName(rowData['poster-image'])} />
                <Text style={styles.flatListTitle}>{rowData.name}</Text>
            </View>
        )
    }
    onRefresh() {
        this.setState({ refreshing: true });
        this.getMovies(0, 20);
    }
    onFlatListEndReached() {
        const { search } = this.state

        if (!search && this.lastListCount >= 20) {
            this.getMovies(this.state.movieList.length, 20);
        }
    }

    onSearchChangeText(text) {
        const { movieList, searchList, search } = this.state

        if (text) {
            let searchedList = searchList.filter((item) => {
                return item.name.toLowerCase().includes(text.toLowerCase())
            })
            console.log(searchedList)
            this.setState({
                movieList: searchedList
            })
        }

    }

    render() {
        const { movieList, tittle, search, searchList } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    data={movieList}
                    contentContainerStyle={styles.flatListContainer}
                    renderItem={this.renderDataItem.bind(this)}
                    // keyExtractor={item => item.name.toString() + item["poster-image"].toString()}
                    onEndReached={this.onFlatListEndReached.bind(this)}
                    onEndReachedThreshold={0.7}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    refreshControl={
                        <RefreshControl refreshing={false}
                            onRefresh={this.onRefresh.bind(this)} />}
                />
                <View style={styles.headerContainer}>
                    <Image style={styles.headerBackgroundImage} source={Images.nav_bar} />
                    <TouchableOpacity disabled={!search} style={styles.headerBack} onPress={() => {
                        this.setState({
                            search: !search,
                            movieList: searchList
                        })
                    }}>
                        <Image style={styles.headerBack} source={Images.back} />
                    </TouchableOpacity>
                    {(search) ?
                        <TextInput
                            style={styles.headerSearch}
                            autoFocus
                            placeholder='Search here'
                            onChangeText={this.onSearchChangeText.bind(this)}
                        />
                        :
                        <Text style={styles.headerTitle}>{tittle}</Text>}
                    <TouchableOpacity style={styles.headerSearchIcon} onPress={() => {
                        this.setState({
                            search: !search,
                            searchList: movieList
                        })
                    }}>
                        <Image style={styles.headerBack} source={Images.search} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}