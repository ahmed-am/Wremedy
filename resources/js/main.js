/* interface items */

    /* modal */
var modalNextButton = document.getElementById('modalNext');
var modalPrevButton = document.getElementById('modalPrev');

    /* modal instruction templates */ 
 var modalInstruction = "<div class=\"modal\"> <div class=\"modalContent\"> <div class=\"modalHeader\"> <img class=\"image\" src='resources/media/logo-small.png' alt=\"logo\"></img> <hr> <p>Breathe, Write, Relax.</p><button id=\"closeModal\">X</button> </div><div class=\"modalBody\"> <hr> <p>Wremedy, <p class=\"small\">where nature, writing, &amp; meditation meet.</p></p><p class=\"padding\">Let's dive right in! </p><div class=\"instructions\"> <img id=\"headerIcon\" src=\"resources/media/icons/wind.png\" alt=\"\"> <div><p>Relax. Breath in & out as the circles shrinks expand.</p><p>Focus on the serenity you hear & see.</p><p>Pour out what is on your mind without stopping or thinking too much.</p></div></div></div></div></div></div>"
 var buttonsTip = document.getElementsByClassName('buttonsTip')[0];


    /* buttons and input*/
var audioButton = document.getElementById('audioButton');
var circleButton = document.getElementById('circleButton');
var textButton = document.getElementById('textButton');
var containerButtons = document.getElementsByClassName('containerButtons')[0];
var nextButton = document.getElementById('nextButton');
var prevButton = document.getElementById('prevButton');
var textInput = document.getElementById('textInput');

    /* svgs */
var muteSVG= '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 124.625 124.625" style="enable-background:new 0 0 124.625 124.625;" xml:space="preserve"><g><path d="M6,92.404h23.1l25.6,19.3c4,3,9.601,0.2,9.601-4.8v-89.2c0-4.9-5.701-7.8-9.601-4.8l-25.6,19.3H6c-3.3,0-6,2.7-6,6v48.301 C0,89.704,2.7,92.404,6,92.404z" fill="#FFFFFF"/><path d="M122.4,40.604c-2.7-2.7-7.2-2.7-9.9,0l-11.8,11.8l-11.8-11.8c-2.7-2.7-7.2-2.7-9.9,0c-2.699,2.7-2.699,7.2,0,9.9 l11.801,11.8L79,74.104c-2.699,2.7-2.699,7.2,0,9.9c1.4,1.399,3.2,2.1,5,2.1c1.801,0,3.6-0.7,5-2.1l11.801-11.801L112.6,84.004 c1.4,1.399,3.201,2.1,5,2.1c1.801,0,3.601-0.7,5-2.1c2.701-2.7,2.701-7.2,0-9.9l-12-11.8l11.801-11.8 C125.1,47.804,125.1,43.304,122.4,40.604z" fill="#FFFFFF"/></g></svg>';
var soundSVG= '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 115.3 115.3" style="enable-background:new 0 0 115.3 115.3;" xml:space="preserve"><g><path d="M47.9,14.306L26,30.706H6c-3.3,0-6,2.7-6,6v41.8c0,3.301,2.7,6,6,6h20l21.9,16.4c4,3,9.6,0.2,9.6-4.8v-77 C57.5,14.106,51.8,11.306,47.9,14.306z" fill="#FFFFFF"/><path d="M77.3,24.106c-2.7-2.7-7.2-2.7-9.899,0c-2.7,2.7-2.7,7.2,0,9.9c13,13,13,34.101,0,47.101c-2.7,2.7-2.7,7.2,0,9.899 c1.399,1.4,3.199,2,4.899,2s3.601-0.699,4.9-2.1C95.8,72.606,95.8,42.606,77.3,24.106z" fill="#FFFFFF"/><path d="M85.1,8.406c-2.699,2.7-2.699,7.2,0,9.9c10.5,10.5,16.301,24.4,16.301,39.3s-5.801,28.8-16.301,39.3 c-2.699,2.7-2.699,7.2,0,9.9c1.4,1.399,3.2,2.1,4.9,2.1c1.8,0,3.6-0.7,4.9-2c13.1-13.1,20.399-30.6,20.399-49.2 c0-18.6-7.2-36-20.399-49.2C92.3,5.706,87.9,5.706,85.1,8.406z" fill="#FFFFFF"/></g></svg>';


    /* audio and video */
var audio = document.getElementById('audio');
var video = document.getElementById('backgroundVideo');

/* variables */
var rantText=""; /* Confirm */
var preferenceIndex = 0;
var preference =[{arrowButtonOpacity: 0.6, containerButtonsClass: 'uw' , circleColor1: '#dcff5c' , circleColor2:'#bada55',  breatheColor1: '' , breatheColor1: '' ,  backgroundVideo:0, audio:0}
                ,{arrowButtonOpacity: 0.6, containerButtonsClass: 'ms' ,circleColor1: '#f49242' , circleColor2:'#bada55',   breatheColor1: '' , breatheColor2: '' , backgroundVideo:1, audio:1}];



window.onload= function(){
    textInput.style.opacity=1;
    
    preferenceSetter();
    document.body.insertAdjacentHTML('afterbegin',modalInstruction);
    modalAnimation();
    document.getElementById('closeModal').addEventListener('click',function(){
        document.body.firstChild.remove();
        buttonsTipAnimation();
        timeline.play();
        audio.play();
        video.play();
    });
    setTimeout(() => {
        ga('send','event','click','active');
    }, 30000);
    
}


function modalAnimation(){
    var modal = document.getElementsByClassName('modal')[0];
    modal.style.opacity=0;
    setTimeout(() => {
        modal.style.opacity=1;
    }, 10);
}

function buttonsTipAnimation(){
    buttonsTip.style.opacity=1;
    buttonsTip.style.transition = 'all 3s ease-in';
    setTimeout(() => {
       buttonsTip.style.opacity=0; 
    }, 3000);
    setTimeout(() => {
        buttonsTip.style.display='none'; 
     }, 6000);

}


function preferenceSetter(){
    audioFile = 'resources/media/audio'+preference[preferenceIndex].audio+'.mp3';
    videoFile = 'resources/media/video'+preference[preferenceIndex].backgroundVideo+'.mp4';
    videoPoster = 'resources/media/videoPoster'+preference[preferenceIndex].backgroundVideo+'.jpg';
    containerButtonsClass = preference[preferenceIndex].containerButtonsClass;
    audio.setAttribute('src',audioFile);
    video.setAttribute('src',videoFile);
    video.setAttribute('poster',videoPoster);
    containerButtons.removeAttribute('class');
    containerButtons.setAttribute('class','containerButtons '+containerButtonsClass);
    var color1= preference[preferenceIndex].circleColor1; 
    var color2= preference[preferenceIndex].circleColor2;
    circle.tune({fill:color1});
    circle2.tune({fill:color1});
    audio.play();
    video.play();
    
    if(preferenceIndex == 0){
        prevButton.setAttribute('disabled','true');
        nextButton.removeAttribute('disabled');
        
        
    }
    else if(preferenceIndex == preference.length - 1){
        nextButton.setAttribute('disabled','true');
        prevButton.removeAttribute('disabled');
        
    }
    else{
        nextButton.removeAttribute('disabled');
        prevButton.removeAttribute('disabled');
    }
}


textInput.addEventListener('keydown',function(e){
    ga('send','event','click','active');
    if(e.keyCode == 32 ) //space
    {
        rantText = rantText + textInput.value;
        textInput.value="";
    }
    else if(e.key == 'Enter')
    {
        rantText = rantText + textInput.value;
        textInput.value="";
    }
    else if(e.key == ';' ) //semicolon
    {
        rantText = rantText + textInput.value;
        textInput.value="";
    }
    else if(e.keyCode == 188 ) //comma
    {
        rantText = rantText + textInput.value;
        textInput.value="";
    }
    else if(e.keyCode == 190) //dot
    {
        rantText = rantText + textInput.value;
        textInput.value="";
    }
    else if(e.key == 'Escape')
    {
        rantText = rantText + textInput.value;
        textInput.value="";
    }
        
})

nextButton.addEventListener('click',function(){
    if(preferenceIndex < preference.length-1){
        preferenceIndex += 1;
        console.log(preferenceIndex);
        preferenceSetter();
    }
    
    
})

prevButton.addEventListener('click',function(){
    if(preferenceIndex > 0){
        preferenceIndex -= 1;
        preferenceSetter();
    }
})

audioButton.addEventListener('click',function(){
    if (this.classList.contains('mute')){
        
        this.innerHTML= muteSVG;
        audio.pause();
    }
    else{
        this.innerHTML= soundSVG;
        audio.play();
    }
    this.classList.toggle('mute');
    this.classList.toggle('audio');
})

textButton.addEventListener('click',function(){
    if(this.classList.contains('hide')){
        document.getElementsByClassName('container')[0].style.display='none';
    }
    else{
        document.getElementsByClassName('container')[0].style.display='flex';
    }
    this.classList.toggle('hide');
    this.classList.toggle('show');

});

circleButton.addEventListener('click',function(){
    if(this.classList.contains('hide')){
        timeline.stop();
    }
    else{
        timeline.play();
    }
    this.classList.toggle('hide');
    this.classList.toggle('show');
})




document.body.addEventListener('click',function(){
    document.getElementById('textInput').focus();
})


const circle = new mojs.Shape({
    radius:{20:500},
    duration:2100,
    opacity: {0.7:0.0},
    easing: 'sin.in'
});

const circle2 = new mojs.Shape({
    radius:{400:0},
    delay:2600,
    duration:2100,
    easing: 'sin.in',
    opacity: {0.2:0.8}
});

circle.el.style.zIndex= -10;
circle2.el.style.zIndex= -10;
const timeline = new mojs.Timeline({
    repeat:999,
    delay:1000
});

timeline.add(circle,circle2);





