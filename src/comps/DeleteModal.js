import React from 'react';
import { projectFirestore } from '../firebase/config';

const DeleteModal = ({ deletedImg, deleteSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('cancel')) {
      deleteSelectedImage(null);
    }
  };

  const deleteImage = (id) => {
    deleteSelectedImage(null);
    projectFirestore
      .collection('images')
      .doc(id)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  };
  return (
    <div className='backdrop'>
      <div className='delete-modal'>
        <div className='modal-wrap'>
          <p>Do you really want to delete an image?</p>
          <div className='buttons'>
            <div
              className='button delete'
              onClick={() => deleteImage(deletedImg)}
            >
              DELETE
            </div>
            <div className='button cancel' onClick={handleClick}>
              CANCEL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
