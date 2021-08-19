import React, { useState } from "react";
import {
    Button,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
} from "react-native";
import firebase from "../database/firebase";

const CreateBlogScreen = (props) => {
    const initialState = {
        title: "",
        blog: "",
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, title) => {
        setState({ ...state, [title]: value });
    };

    const saveNewBlog = async () => {
        if (state.title === "") {
            alert("please provide a title");
        } else {

            try {
                await firebase.db.collection("blogs").add({
                    title: state.title,
                    blog: state.blog,
                });

                props.navigation.navigate("BlogsList");
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* title Input */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Title"
                    onChangeText={(value) => handleChangeText(value, "title")}
                    value={state.title}
                />
            </View>

            {/* Blog Input */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Blog"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(value) => handleChangeText(value, "blog")}
                    value={state.blog}
                />
            </View>

            <View style={styles.button}>
                <Button title="Save Blog" onPress={() => saveNewBlog()} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CreateBlogScreen;