import flask

app = flask.Flask(__name__)


@app.route('/')
def index():
    with open('index.html', 'rb') as f:
        page = f.read()
    return page

@app.route('/<filename>')
def getfile(filename):
    with open(filename, 'rb') as f:
        page = f.read()
    return page

if __name__ == "__main__":
    app.run(host='0.0.0.0')