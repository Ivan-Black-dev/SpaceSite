import flask

app = flask.Flask(__name__)


@app.route('/')
def index():
    with open('index.html', 'rb') as f:
        page = f.read()
    return page

@app.route('/photo/<filename>')
def photo(filename):
    with open(f'photo\{filename}', 'rb') as f:
        page = f.read()
    return page


@app.route('/asteroid/<filename>')
def asteroid(filename):
    print(filename)
    with open(f'astr\{filename}', 'rb') as f:
        page = f.read()
    return page


if __name__ == "__main__":
    app.run()