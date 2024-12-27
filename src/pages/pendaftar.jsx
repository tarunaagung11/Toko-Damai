import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function pendaftar() {
  const [listOfPost, setListOfPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPost(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPost.map((value, key) => {
        return (
          <div className=" flex gap-5 bg-white text-black">
            <div className="">{value.title}</div>
            <div className="">{value.postText}</div>
            <div className="">{value.username}</div>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default pendaftar;
