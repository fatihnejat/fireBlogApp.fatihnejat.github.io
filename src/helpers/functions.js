import firebase from "./firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const createPost = (info, currentUser) => {
  const db = getDatabase();
  const postRef = ref(db, "posts/");
  const newPost = push(postRef);

  set(newPost, {
    title: info.title,
    imgUrl: info.imgUrl,
    content: info.content,
    email: currentUser.email,
  });
};

export const useFetch = () => {
  const [postLists, setPostLists] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const postRef = ref(db, "posts/");

    onValue(postRef, (snapshot) => {
      const data = snapshot.val();
      const postArray = [];

      for (let id in data) {
        postArray.push({ id, ...data[id] });
      }
      setPostLists(postArray);
    });
  }, []);
  return { postLists };
};

export const DeletePost = (id) => {
  // const navigate = useNavigate();
  const db = getDatabase();
  const postRef = ref(db, "posts/");
  remove(ref(db, "posts/" + id));
  // navigate(-1);
};

export const EditPost = (value) => {
  const db = getDatabase();
  const updates = {};

  updates["posts/" + value.id] = value;
  return update(ref(db), updates);
};
