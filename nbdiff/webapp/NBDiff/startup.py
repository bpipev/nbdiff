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
    
    return render_template('diff.html')
    

if __name__ == "__main__":
    app.run()