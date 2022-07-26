import {calculateCalorieIntake} from './util.js';

const activityButtonElements = document.querySelectorAll('.radio [type="radio"]');
const ageElement = document.querySelector('.form__parameters [name="age"]');
const heightElement = document.querySelector('.form__parameters [name="height"]');
const weightElement = document.querySelector('.form__parameters [name="weight"]');
const genderButtonElements = document.querySelectorAll('.switcher__item [type="radio"]');
const calorieNormElements = document.querySelectorAll('.counter__result-list li');


