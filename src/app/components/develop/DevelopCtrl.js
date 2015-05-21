'use strict';

angular.module('webAudioExperiment')
  .controller('DevelopCtrl', function($scope) {

    var context;
    var source;

    function init() {
      try {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
      } catch (e) {
        alert('Web Audio API is not supported in this browser');
      }
    }

    init();


    // // Create a gain node.
    // var gainNode = context.createGain();
    // // Connect the source to the gain node.
    // source.connect(gainNode);
    // // Connect the gain node to the destination.
    // gainNode.connect(context.destination);
    // 


    var canvas = document.querySelector('canvas#rscope');

    var VCO = T('saw', {freq: 80, mul: 0.2}).play();

    T('scope', {interval:100}).on('data', function() {
      this.plot({target: canvas});
    }).listen(VCO);
    

    var oscillator = context.createOscillator();
    oscillator.frequency.value = 600;

    oscillator.connect(context.destination);

    // oscillator.start(0);

    // setTimeout(function() {
    //   oscillator.frequency.value = 1000;
    // });

    function playSound(buffer, time) {
      var source = context.createBufferSource(); // creates a sound source
      source.buffer = buffer; // tell the source which sound to play
      source.connect(context.destination); // connect the source to the context's destination (the speakers)
      source.start(time);

    }


  });
