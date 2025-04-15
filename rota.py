#AQUI EU VOU GERAR A ROTA PRA SALVAR AS INFORMACOES
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/account")
def create_acount():

    return render_template("createaccount.html")
