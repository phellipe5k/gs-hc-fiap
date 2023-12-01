import re

def validate_name(name):
    if len(name) > 3:
        return True
    print("O nome é inválido.")
    return False

def validate_email(email):
    email_regex = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    if re.match(email_regex, email) and len(email) > 3:
        return True
    print("O e-mail é inválido.")
    return False

def age_validate(age):
    if int(age) > 0:
        return True
    print("Idade inválida.")
    return False

def address_validate(address):
    if len(address) > 3:
        return True
    print("Endereço inválido.")
    return False

def send():
    question_response = ''
    question_responses = ["yes", "no"]
    try:
        data = {
            "name": input("Digite o nome: "),
            "email": input("Digite o e-mail: "),
            "address": input("Digite o endereço: "),
            "age": input("Digite a idade: "),
            "get_project_news": question_response,
        }
        if (
            not validate_name(data["name"])
            or not validate_email(data["email"])
            or not age_validate(data["age"])
            or not address_validate(data["address"])
        ):
            raise Exception()

        print("Formulário preenchido com sucesso! :)")
        print(
            f"Informações salvas:\nNome: {data['name']}\nIdade: {data['age']}\n"
            f"Endereço: {data['address']}\nDeseja receber notificação: "
            f"{ 'Sim' if data['get_project_news'] == 'yes' else 'Não' }"
        )

        # Limpeza dos dados
        data["name"] = ""
        data["email"] = ""
        data["address"] = ""
        data["age"] = ""
        question_response = ""

        return True
    except Exception as e:
        print("Erro:", e)
        return

send()