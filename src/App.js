import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getPhotos } from "./galleryState";

function App() {
  /* hooks */
  const dispatch = useDispatch();
  /* grabbing photos */
  const photos = useSelector((state) => state.gallery.photos);
  /* passing params for useEffect */
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>This is a photo gallery made with Redux Toolking and Redux Thunk</p>
      <hr />
      <div className="Gallery">
        {/* mapping photo array and giving img tag */}
        {photos.map((photo) => (
          <img
            key={photo.id}
            alt={photo.author}
            src={photo.download_url}
            width="400"
            height="400"
          />
        ))}
      </div>
      <button>LOAD MORE</button>
    </div>
  );
}

export default App;
