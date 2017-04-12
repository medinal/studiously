// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require turbolinks
//= require jquery.turbolinks
//= require jquery_ujs
//= require autocomplete-rails
//= require foundation
//= require clipboard
//= require_tree .

$(document).ready(function () {

  $(function(){ $(document).foundation(); });

  // flash messages disappear after 2 seconds.
   setTimeout(function(){
     $('#flash').fadeOut(1000);
   }, 2000);

   var clipboard = new Clipboard('.clipboard-btn');

   $('#filter-select').on('change', function(){
     $('#filter-form').submit();
   });

   $("#institution").on('change', function(){
     $('#share-button').attr("disabled", false);
   });

});
