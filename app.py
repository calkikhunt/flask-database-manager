import mysql.connector as mysql_connection
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home_page():
    return render_template("index.html")

@app.route("/connection", methods=["POST"])
def connection():
    return render_template("connection.html", selected_db=request.form.get("selected_db"))

@app.route("/connect/<string:db_name>", methods=["GET"])
def connect_db(db_name):
    if db_name == "MySql":
        mydb = mysql_connection.connect(host="localhost", user="root", passwd="7877", use_pure=True)

if __name__ == "__main__":
    app.run()
