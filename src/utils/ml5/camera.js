export default function cameraClassify(ml5, webcamRef, setState, unmount) {
  let detectionInterval;

  const modelLoaded = () => {
    detectionInterval = setInterval(() => {
      detect();
    }, 2000);
  };

  const objectDetector = ml5.objectDetector("MobileNet", modelLoaded);

  if (unmount) {
    objectDetector.detect(null)
  }

  const detect = () => {

    if (
      webcamRef &&
      webcamRef.current &&
      webcamRef.current.video.readyState !== 4
    ) {
      console.warn("Video not ready yet");
      return;
    }

    if (!webcamRef || !webcamRef.current){
      return
    }
    
    objectDetector.detect(
      webcamRef && webcamRef.current && webcamRef.current.video,
      (err, results) => {
        if (results && results[0]) {
          setState({ description: results[0].label });
        } else {
          setState({ description: "I cann't understand my Lord(" });
        }
      }
    );
  };

  return () => {
    if (detectionInterval) {
      clearInterval(detectionInterval);
    }
  };
}
