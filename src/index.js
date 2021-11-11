import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Age } from './age.js';

$('#inputForm').on('submit', function(event) {
  event.preventDefault();
  const submittedAge = new Age(new Date($("#birthday").val()));
  $('#output1').text(`Earth Age: ${submittedAge.earthAge}. Mercurial Age: ${submittedAge.toMercurial()}`);
});

function outputAges(age) {

let htmlString = `
  <li>
    <div class="row">
      <div class="col-1">
      
  `
}
