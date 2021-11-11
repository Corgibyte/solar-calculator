import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Age } from './age.js';

let currentAge = {};

$('#inputForm').on('submit', function(event) {
  event.preventDefault();
  currentAge = new Age(new Date($("#birthday").val()));
  $('#output1').text(`Earth Age: ${currentAge.earthAge}. Mercurial Age: ${currentAge.toMercurial()}`);
});