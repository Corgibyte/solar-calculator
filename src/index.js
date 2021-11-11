import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Age } from './age.js';

$('#inputForm').on('submit', function(event) {
  event.preventDefault();
  const submittedAge = new Age(new Date($("#birthday").val()));
  outputAges(submittedAge);
});

function outputAges(age) {
  $("#outputs").show();
  $("#earthAge").text(age.earthAge.toPrecision(3) + " Earth solar years");
  $("#mercurialAge").text(age.toMercurial().toPrecision(3) + " Mercurial solar years");
  $("#venusianAge").text(age.toVenusian().toPrecision(3) + " Venusian solar years");
  $("#martianAge").text(age.toMartian().toPrecision(3) + " Martian solar years");
  $("#jovianAge").text(age.toJovian().toPrecision(3) + " Jovian solar years");
}
