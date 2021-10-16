https://teachablemachine.withgoogle.com/models/8JnXaQIdq/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8JnXaQIdq/model.json', modelready);
    }
    function modelready(){
        classifier.classify(gotResults);
        console.log("model is ready")
    }
    function gotResults(error,results){
        if (error){
            console.error(error)
        }else{
            console.log(results)
    }
}
