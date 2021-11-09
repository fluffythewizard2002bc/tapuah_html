
function isString(myVar) {

    if (typeof(myVar) == 'string' || myVar instanceof String)
        return true;
    else
        return false;
}

const checkInput = (lang, isIs, popu, cou) => {
  
    if (isString(lang) && typeof (isIs) == 'boolean' && Number.isInteger(popu) && isString(cou)) {
        return true;
    }
    return false;
}

const countryToLiveIn = (lang, isIs, popu, cou) => {
    if (checkInput(lang, isIs, popu, cou)) {
        
        if(lang==="English" && popu<50 && isIs==false)
        console.log(`you should live in ${cou} Sarah.`);
        else
        console.log(`${cou} doesn't fit your needs Sarah`);


    }
    
}


countryToLiveIn("English", false, 15, "Polland");
countryToLiveIn("English", true, 15, "Polland");