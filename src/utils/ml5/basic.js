export default function classifyImg(ml5, setFunc) {
  const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  const image = document.getElementById('image');

  function modelLoaded() {
    console.log('Model Loaded!');
  } 

  classifier.predict(image, 5, function(err, results) {
    
    if (err) {
      console.log(err)
    }

    if (results) { 
      let descriptionText = results[0].label;
      
      
      for (let i = 1; i < results.length; i++) {
        descriptionText += `, ${results[i].label} (${results[i].confidence.toFixed(3) * 100} %)`
      }
    
      setFunc( prevState => {
        
        return {...prevState, description: descriptionText}
      } )
    }
  })
}