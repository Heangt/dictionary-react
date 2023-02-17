import axios from "axios";
import React, { useState } from "react";
export default function Photos({ keyword }) {
  const [photo, setPhoto] = useState();
  const [originalPhoto, setOriginalPhoto] = useState();

  function showPhotos(respones) {
    setOriginalPhoto(respones.data.photos[0].src.original);
    setPhoto(respones.data.photos[0].src.small);
  }

  const apiKey = "jWH4pXwmIjLuT9r2PhdIPR3EhPLdtM7HnWXfFlTutPFoPpXt2KBF3VA1";
  let apiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
  let header = `Authorization: Bearer ${apiKey}`;
  axios.get(apiUrl, { header: { header } }).then(showPhotos);

  return (
    <a href={originalPhoto} target="_blank" rel="noreferrer">
      <img src={photo} alt="" />;
    </a>
  );
}
