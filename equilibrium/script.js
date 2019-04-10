/*window.onload = function(){
    document.getElementById("open-1").addEventListener('click', modalSwap());
    document.getElementById("open-2").addEventListener('click', modalSwap());
    document.getElementById("open-3").addEventListener('click', modalSwap());
    document.getElementById("open-4").addEventListener('click', modalSwap());

    document.getElementById("back-1").addEventListener('click', modalSwap());
    document.getElementById("back-2").addEventListener('click', modalSwap());
    document.getElementById("back-3").addEventListener('click', modalSwap());
    document.getElementById("back-4").addEventListener('click', modalSwap());

    document.getElementById("del-1").addEventListener('click', modalSwap());
    document.getElementById("del-2").addEventListener('click', modalSwap());
    document.getElementById("del-3").addEventListener('click', modalSwap());
    document.getElementById("del-4").addEventListener('click', modalSwap());
}

function modalSwap() {

    // Modals
  
    var rootEl = document.documentElement;
    var $modals = getAll('.modal');
    var $modalButtons = getAll('.modal-button');
    var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  
    if ($modalButtons.length > 0) {
      $modalButtons.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          rootEl.classList.add('is-clipped');
          $target.classList.add('is-active');
        });
      });
    }
  
    if ($modalCloses.length > 0) {
      $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
          closeModals();
        });
      });
    }
  
    document.addEventListener('keydown', function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeModals();
      }
    });
  
    function closeModals() {
      rootEl.classList.remove('is-clipped');
      $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
      });
    }
  
    // Functions
  
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
  
  }


function changeClass(num) {
    c = "mod-" + num;
    if (document.getElementById(c).className.match(/(?:^|\s)is-active(?!\S)/)){
        //document.getElementById("burger").className = document.getElementById("burger").className.replace(/(?:^|\s)is-active(?!\S)/g , '' );
    } else {
        document.getElementById(c).className += " is-active";
    }
}

function closeClass(num) {
    c = "mod-" + num;
    if (document.getElementById(c).className.match(/(?:^|\s)is-active(?!\S)/)){
        document.getElementById(c).className = document.getElementById(c).className.replace(/(?:^|\s)is-active(?!\S)/g , '' );
    } else {
    }
}
/*data-target="modal"
 */'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // Modals
  
    var rootEl = document.documentElement;
    var $modals = getAll('.modal');
    var $modalButtons = getAll('.modal-button');
    var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  
    if ($modalButtons.length > 0) {
      $modalButtons.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          rootEl.classList.add('is-clipped');
          $target.classList.add('is-active');
        });
      });
    }
  
    if ($modalCloses.length > 0) {
      $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
          closeModals();
        });
      });
    }
  
    document.addEventListener('keydown', function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeModals();
      }
    });
  
    function closeModals() {
      rootEl.classList.remove('is-clipped');
      $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
      });
    }
  
    // Functions
  
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
  
  });