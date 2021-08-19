import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const BlogScreen = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    firebase.db.collection("blogs").onSnapshot((querySnapshot) => {
      const blogs = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        blogs.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setBlogs(blogs);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateBlogScreen")}
        title="Create User"
      />
      {blogs.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default BlogScreen;