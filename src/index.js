import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Age } from './js/age.js';

$('#inputForm').on('submit', function(event) {
  event.preventDefault();
  const submittedAge = new Age(new Date($("#birthday").val()));
  outputAges(submittedAge);
  outputLifeExp(submittedAge, parseFloat($("#lifeExp").val()));
});

function outputAges(age) {
  $(".outputs").show();
  $("#earthAge").text(age.earthAge.toPrecision(3) + " Earth solar years");
  $("#mercurialAge").text(age.toMercurial().toPrecision(3) + " Mercurial solar years");
  $("#venusianAge").text(age.toVenusian().toPrecision(3) + " Venusian solar years");
  $("#martianAge").text(age.toMartian().toPrecision(3) + " Martian solar years");
  $("#jovianAge").text(age.toJovian().toPrecision(3) + " Jovian solar years");
  $("#dateOutput").text(age.birthday.toDateString());
}

function outputLifeExp(age, estLifeExp) {
  if (age.earthAge < estLifeExp) {
    $("#lifeExpTitle").text("Estimated time left:");
  } else {
    $("#lifeExpTitle").text("Time past estimated:");
  }
  $("#earthLifeExp").text(age.earthYearsLeft(estLifeExp).toPrecision(3) + " Earth solar years");
  $("#mercurialLifeExp").text(age.mercurialYearsLeft(estLifeExp).toPrecision(3) + " Mercurial solar years");
  $("#venusianLifeExp").text(age.venusianYearsLeft(estLifeExp).toPrecision(3) + " Venusian solar years");
  $("#martianLifeExp").text(age.martianYearsLeft(estLifeExp).toPrecision(3) + " Martian solar years");
  $("#jovianLifeExp").text(age.jovianYearsLeft(estLifeExp).toPrecision(3) + " Jovian solar years");
}