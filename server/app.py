import pandas
from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder='build')

@app.route('/')
def index():
	return render_template(app.static_folder+'/index.html')

@app.route('/programs/', methods=['GET'])
def programs():
	data = pandas.read_csv('./data/programs.csv')
	print(data)
	return data.to_json(orient='records')


@app.route('/<path:filename>')
def upload(filename):
	print(filename)
	return send_from_directory(app.static_folder, filename)

if __name__ == "__main__":
	app.run(debug=True)