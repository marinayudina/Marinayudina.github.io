function main() {

	answers_1 = document.getElementById('answers_1');
    answers_2 = document.getElementById('answers_2');
    answers_3 = document.getElementById('answers_3');
    answers_4 = document.getElementById('answers_4');
    answers_5 = document.getElementById('answers_5');
	res = 0

	if (answers_1.value.toLowerCase() == "нестерпимой") { res++ }
    if (answers_2.value.toLowerCase() == "дождливым") { res++ }
    if (answers_3.value.toLowerCase() == "добрый") { res++ }
    if (answers_4.value.toLowerCase() == "невежда") { res++ }
    if (answers_5.value.toLowerCase() == "безответной") { res++ }

	document.getElementById('res').innerHTML = "У вас " + res + "/5 правильных ответов.";
}
function answers(){
    document.getElementById('true_answers').innerHTML="<li>нестерпимой</li>"+ "<li>дождливым</li>"+"<li>добрый</li>"
    +"<li>невежда</li> "+"<li>безответной</li>"
}