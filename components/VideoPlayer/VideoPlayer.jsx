const VideoPlayer = ({ src, alt, height, width }) => {
    return (
        <div>
            <video 
                controls 
                height={height}
                width={width}
                alt={alt}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
  };
  
  export default VideoPlayer;
  