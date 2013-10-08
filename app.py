from flask import Flask
from flask import Response
app = Flask(__name__)

@app.route("/")
def hello():
    return open('src/test/index.html').read()

@app.route("/src/JSDiff/diff.js")
def getDiff():
    javaScript = open('src/JSDiff/diff.js').read()
    return Response(javaScript, mimetype='text/javascript')

@app.route("/lib/qunit/qunit-1.12.0.css")
def getCSS():
    css = open('lib/qunit/qunit-1.12.0.css').read()
    return Response(css, mimetype='text/css')

@app.route("/lib/qunit/qunit-1.12.0.js")
def getQunitJS():
    javaScript = open('lib/qunit/qunit-1.12.0.js').read();
    return Response(javaScript, mimetype='text/javascript')

@app.route("/diffAlgoTestModule.js")
def getTestJS():
    javaScript = open('src/test/diffAlgoTestModule.js').read();
    return Response(javaScript, mimetype='text/javascript')

@app.route("/right")
def ipynbRight():
    json = open('src/JSDiff/right.ipynb').read()
    return Response(json, mimetype='application/json')

@app.route("/left")
def ipynbLeft():
    json = open('src/JSDiff/left.ipynb').read()
    return Response(json, mimetype='application/json')

if __name__ == "__main__":
    app.run()
