import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const wrapMotion = {
  hover: {
    opacity: 1,
  },
};

const imgMotion = {
  rest: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const tabsMotion = {
  rest: {
    opacity: 0,
    y: '100vh',
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ImageGrid = ({ setSelectedImg, deleteSelectedImage }) => {
  const { docs } = useFirestore('images');

  const copySelectedImage = (url) => {
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            initial='rest'
            whileHover='hover'
            animate='animate'
            layout
            variants={wrapMotion}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              className='img'
              src={doc.url}
              alt='uploaded img'
              variants={imgMotion}
            />
            <motion.ul variants={tabsMotion} className='function-tabs'>
              <li
                className='tab'
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSelectedImage(doc.id);
                }}
              >
                delete
              </li>

              <li
                className='tab'
                onClick={(e) => {
                  e.stopPropagation();
                  copySelectedImage(doc.url);
                }}
              >
                copy link
              </li>
            </motion.ul>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
