from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('Diff.html')

@app.route("/notebook")
def get_notebook():
    return open("example-premerged-notebook.ipynb").read()

if __name__ == "__main__":
    app.run()
