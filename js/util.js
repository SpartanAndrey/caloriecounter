const ACTIVITY_COEFFICIENTS = {
    'min': 1.2,
    'low': 1.375,
    'medium': 1.55,
    'high': 1.725,
    'max': 1.9,
};
const WEIGHT_GAIN = 1.15;
const WEIGHT_LOSS = 0.75;
const GENDERS = ['male', 'female'];
const FORMULA_COEFFICIENTS = [10, 6.25, 5];
const MALE_CORR = 5;
const FEMALE_CORR = -161;

const calculateCalorieIntake = (gender, age, height, weight, activity_coef) => {
    const calorieNorms = [];

    let calorieIntake =  FORMULA_COEFFICIENTS[0] * weight + FORMULA_COEFFICIENTS[1] * height - FORMULA_COEFFICIENTS[2] * age;

    if (gender === GENDERS[0]){
        calorieIntake += MALE_CORR ;
    } else if (gender === GENDERS[1]){
        calorieIntake += FEMALE_CORR;
    }

    calorieIntake *= ACTIVITY_COEFFICIENTS[activity_coef];

    calorieNorms.push(calorieIntake);
    calorieNorms.push(calorieIntake * WEIGHT_GAIN);
    calorieNorms.push(calorieIntake * WEIGHT_LOSS);

    return calorieNorms;
};

export{calculateCalorieIntake};