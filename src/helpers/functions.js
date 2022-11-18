
import { getDatabase, push, ref, set } from "firebase/database";

export const createPost = (info) => {
    const db = getDatabase();
    const postRef = rf(db,"posts/");
    const newPost = push(postRef)

    set(newPost, {
        title: info.title,
        imgUrl: info.imgUrl,
        content:info.content
    })


}