import React, { useState, useEffect } from "react";
import { Image } from "./styles";
import { useDispatch } from "react-redux";
import { setName } from "../../store/actions/AppActions";

export default function Avatar() {
  const [photo, setPhoto] = useState(
    "https://avatars2.githubusercontent.com/u/15719314?s=460&u=7bc792a5320c7546f3fc239e4d85ca2e3d7d1e3c&v=4"
  );

  const dispatch = useDispatch();

  return <Image source={{ uri: photo }} />;
}
