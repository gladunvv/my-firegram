import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import DeleteModal from './comps/DeleteModal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [deletedImg, deleteSelectedImage] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid
        deleteSelectedImage={deleteSelectedImage}
        setSelectedImg={setSelectedImg}
      />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {deletedImg && (
        <DeleteModal
          deletedImg={deletedImg}
          deleteSelectedImage={deleteSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
