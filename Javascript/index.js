function value1(){

	document.case.display.value += "1"
};
function value2(){

	document.case.display.value += "2"
};
function value3(){

	document.case.display.value += "3"
};
function value4(){

	document.case.display.value += "4"
};
function value5(){

	document.case.display.value += "5"
};

function value6(){

	document.case.display.value += "6"
};

function value7(){

	document.case.display.value += "7"
};

function value8(){

	document.case.display.value += "8"
};

function value9(){

	document.case.display.value += "9"
};

function value0(){

	document.case.display.value += "0"
};
function operationPlus(){

	document.case.display.value += "+"
};
function operationMinus(){

	document.case.display.value += "-"
};
function operationDivide(){

	document.case.display.value += "/"
};
function operationMultiply(){

	document.case.display.value += "*"
};

function operationC(){

	document.case.display.value = ""
};


function operationEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}
