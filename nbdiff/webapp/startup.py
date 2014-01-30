from flask import Flask, render_template, request
app = Flask('NB Diff')

@app.route("/")
def upload():
    return render_template('upload.html')
    
@app.route("/merge", methods=['GET', 'POST'])
def merge():
    local = request.form['localJSON']
    remote = request.form['remoteJSON']
    #do magical comparison here /*
    comparedFile = open("example-premerged-notebook.ipynb").read()
    
    return render_template('Diff.html')
    

if __name__ == "__main__":
    app.run()