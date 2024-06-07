interface VideoPlayer {
    src: string
    height?: string
    width: string
}

const VideoPlayer = ({ src, height = null, width }) => {
    return (
        <div>
            <video 
                controls 
                height={height}
                width={width}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
  };
  
  export default VideoPlayer;
  