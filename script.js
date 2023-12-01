function validateName (name) {
    if (name.length > 3) return true;
    alert("O nome é inválido.");
    return false;
}


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) && email.length > 3) {
        return true;
    }
    alert("O e-mail é inválido.");
    return false;
};

const ageValidate = (age) => {
    if (+age > 0) {
        return true;
    } 
    alert("Idade inválida");
    return false;
}

const addressValidate = (address) => {
    if (address.length > 3) {
        return true;
    } 
    alert("Endereço inválida");
    return false;
}


const send = () => {
    console.log("CAIU AQUI")
    let question_response = ''
    document.getElementsByName("question").forEach(e => {
        if (e.checked) question_response = e.value;
    })
    try {
        let data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            age: document.getElementById("age").value,
            get_project_news: question_response
        }
        if (
                !validateName(data.name)
                || !validateEmail(data.email)
                || !ageValidate(data.age)
                || !addressValidate(data.address)
            ) throw new Error();

        alert("Formulário preenchido com sucesso! :)")
        alert(`Informações salvas: \n
            Nome: ${data.name} \n
            Idade: ${data.age} \n
            Endereço: ${data.address} \n
            Deseja receber notificação: ${data.get_project_news === 'yes' ? 'Sim' : 'Não'}
        `)

        document.getElementById("name").value = ''
        document.getElementById("email").value = ''
        document.getElementById("address").value = ''
        document.getElementById("age").value = ''
        document.getElementsByName("question").forEach(e => {
            e.checked = false
        })
        console.log(data)
        
        return true;
    } catch (err) {
        console.log("ERRo", err)
        return;
    }
}