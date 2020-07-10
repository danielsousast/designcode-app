import React, { useState, useEffect } from "react";
import { Image } from "./styles";

export default function Avatar() {
  const [photo, setPhoto] = useState(
    "https://cl.ly/55da82beb939/download/avatar-default.jpg"
  );

  return <Image source={{ uri: photo }} />;
}
