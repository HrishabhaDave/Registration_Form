
    function fName(){
        let firstNameInput = document.getElementById('first-name').value
        if(firstNameInput.length){
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        }
        else{
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
        }
    }

    function lName(){
        let lastNameInput = document.getElementById('last-name').value
        if(lastNameInput.length){
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        }
        else{
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
        }
    }

    function emailf(){
        let emailInput = document.getElementById('email').value
        if(emailInput.length && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length - 3 && 
            emailInput.indexOf('@') !==0){
            document.getElementById('email-valid').style.display = 'block'
            document.getElementById('email-invalid').style.display = 'none'
        }
        else{
            document.getElementById('email-invalid').style.display = 'block'
            document.getElementById('email-valid').style.display = 'none'
        }
    }

    function cityf(){
        let cityInput = document.getElementById('city').value
        if( cityInput && cityInput.length>=3 && !parseInt(cityInput)){
            document.getElementById('city-valid').style.display = 'block'
            document.getElementById('city-invalid').style.display = 'none'
        }
        else{
            document.getElementById('city-invalid').style.display = 'block'
            document.getElementById('city-valid').style.display = 'none'
        }
    }

    function statef(){
        let stateInput = document.getElementById('state').value
        if(stateInput !== 'None'){
            document.getElementById('state-valid').style.display = 'block'
            document.getElementById('state-invalid').style.display = 'none'
        }
        else{
            document.getElementById('state-invalid').style.display = 'block'
            document.getElementById('state-valid').style.display = 'none'
            error=true
        }
    }

    function zipf(){
        let zipInput = document.getElementById('zip').value
        if(zipInput.length && zipInput.length===6 && !isNaN(parseInt(zipInput))){
            document.getElementById('zip-valid').style.display = 'block'
            document.getElementById('zip-invalid').style.display = 'none'
        }
        else{
            document.getElementById('zip-invalid').style.display = 'block'
            document.getElementById('zip-valid').style.display = 'none'
        }
    }

    function tickf(){
        let tncInput = document.getElementById('tnc').checked
        if(tncInput){
            document.getElementById('tnc-invalid').style.display = 'none'
        }
        else{
            document.getElementById('tnc-invalid').style.display = 'block'
        }
    }

    function validate(){  
        let firstNameInput = document.getElementById('first-name').value
        let lastNameInput = document.getElementById('last-name').value
        let emailInput = document.getElementById('email').value
        let cityInput = document.getElementById('city').value
        let stateInput = document.getElementById('state').value
        let zipInput = document.getElementById('zip').value
        let tncInput = document.getElementById('tnc').checked

        let error = false;
        if(firstNameInput.length){
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        }
        else{
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error=true
        }
        if(lastNameInput.length){
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        }
        else{
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
            error=true
        }
        if(emailInput.length && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length - 3 && 
            emailInput.indexOf('@') !==0){
            document.getElementById('email-valid').style.display = 'block'
            document.getElementById('email-invalid').style.display = 'none'
        }
        else{
            document.getElementById('email-invalid').style.display = 'block'
            document.getElementById('email-valid').style.display = 'none'
            error=true
        }
        if( cityInput && cityInput.length>=3 && !parseInt(cityInput)){
            document.getElementById('city-valid').style.display = 'block'
            document.getElementById('city-invalid').style.display = 'none'
        }
        else{
            document.getElementById('city-invalid').style.display = 'block'
            document.getElementById('city-valid').style.display = 'none'
            error=true
        }
        if(zipInput.length && zipInput.length===6 && !isNaN(parseInt(zipInput))){
            document.getElementById('zip-valid').style.display = 'block'
            document.getElementById('zip-invalid').style.display = 'none'
        }
        else{
            document.getElementById('zip-invalid').style.display = 'block'
            document.getElementById('zip-valid').style.display = 'none'
            error=true
        }
        if(stateInput !== 'None'){
            document.getElementById('state-valid').style.display = 'block'
            document.getElementById('state-invalid').style.display = 'none'
        }
        else{
            document.getElementById('state-invalid').style.display = 'block'
            document.getElementById('state-valid').style.display = 'none'
            error=true
        }
        if(tncInput){
            document.getElementById('tnc-invalid').style.display = 'none'
        }
        else{
            document.getElementById('tnc-invalid').style.display = 'block'
            error=true
        }
        if(!error){
            alert('Your details have been saved successfully')
            firstNameInput = document.getElementById('first-name').value=''
            lastNameInput = document.getElementById('last-name').value=''
            emailInput = document.getElementById('email').value=''
            cityInput = document.getElementById('city').value=''
            stateInput = document.getElementById('state').value=''
            zipInput = document.getElementById('zip').value=''
            tncInput = document.getElementById('tnc').checked=''
    
            document.getElementById('first-name-valid').style.display = 'none'
            document.getElementById('last-name-valid').style.display = 'none'
            document.getElementById('email-valid').style.display = 'none'
            document.getElementById('city-valid').style.display = 'none'
            document.getElementById('zip-valid').style.display = 'none'
            document.getElementById('state-valid').style.display = 'none'
            document.getElementById('tnc-invalid').style.display = 'none'
        }
    
    }
    