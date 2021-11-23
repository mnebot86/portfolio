import './VideoModal.css'

const VideoModal = ({toggleVideoModal, content}) => {
  return (
    <div className='video-modal-box' onClick={toggleVideoModal}>
      <div className='box'>
        {content}
      </div>
    </div>
  );
};

export default VideoModal;
