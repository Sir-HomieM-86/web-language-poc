$( document ).ready(function() {
	loadLanguageFunction();
	
	//select all drop down langauge items, which have class 'lang-type'. Assign a click event to them
    $('.lang-type').click(function() {
		var elementID = $(this).attr('id'); //get the langauge ID - it is unique per element
		console.log("event trigger id is " + elementID);
		myLanguageFunction(elementID);
	});
});


function loadLanguageFunction(){
	//try load the local language ID if available
	var savedLang = localStorage.getItem('lang');
	
	if(!savedLang) //if null, default to English (first time use)
	{
		savedLang = "lang-eng";
		console.log("Init Language not found on local system, defaulting to: " + savedLang);
	}
	else {
		console.log("Init language found on local system: " + savedLang)
	}
	//load the language for the page
	myLanguageFunction(savedLang);
}

function myLanguageFunction(savedLangID){
	//alert("hello world");
	console.log("myLanguageFunction: language is: "+savedLangID);
	
	if(savedLangID == "lang-eng"){
		console.log('myLanguageFunction: English was chosen');
		
		localStorage.setItem('lang', savedLangID);
		
		$('.lang-caption').hide();
		$('.langtype-eng').show();
	}
	else if(savedLangID == "lang-afr"){
		console.log('myLanguageFunction: Afrikaans was chosen');
		
		localStorage.setItem('lang', savedLangID);
		
		$('.lang-caption').hide();
		$('.langtype-afr').show();
	}
	else if(savedLangID == "lang-ger"){
		console.log('myLanguageFunction: German was chosen');
		
		localStorage.setItem('lang', savedLangID);
		
		$('.lang-caption').hide();
		$('.langtype-ger').show();
	}
}