#AQUI EU VOU GERAR A ROTA PRA SALVAR AS INFORMACOES
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/create")
def create_account():

    return render_template("createaccount.html")

@app.route("/login")
def login_page():
    return render_template("index.html")
