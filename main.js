Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 0
   });
   camera = document.getElementById("webcam_camera");
   Webcam.attach(camera);

   function capture_img()
   {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result_camera").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
       
       });
   }
   function predict_img()
   {
    img_captured = document.getElementById("captured_img");
    Classifier.classify(img_captured , result_img);
   }
   console.log("ml5 version:" , ml5.version );
   Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Fs5-YuASl/model.json" , modelLoaded);
  function modelLoaded()
  {
      console.log("modelLoaded");
  } 

  
function result_img(error , results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        gestures = results[0].label;
        toSpeak = " ";

        if (gestures == "Hands")
        {
            toSpeak = "Hi there user";
            document.getElementById("emoji_update").innerHTML = "&#128400;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Victory")
        {
            toSpeak = "Which country have you won";
            document.getElementById("emoji_update").innerHTML = "&#9996;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Rock On")
        {
            toSpeak = "Have you listened to this song";
            document.getElementById("emoji_update").innerHTML = "&#9996;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "idk")
        {
            toSpeak = "Do you know its name";
            document.getElementById("emoji_update").innerHTML = "&#128078;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Shoryaa with white teeth ")
        {
            toSpeak = "Sorry that is my sister you look like her";
            document.getElementById("emoji_update").innerHTML = "&#128078;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Ok")
        {
            toSpeak = "What's ok";
            document.getElementById("emoji_update").innerHTML = "&#9995;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Thumbs-Up")
        {
            toSpeak = "Yeah a thumbs up from me to";
            document.getElementById("emoji_update").innerHTML = "&#129304;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Disagree")
        {
            toSpeak = "Whats the problem";
            document.getElementById("emoji_update").innerHTML = "&#129304;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}