from flask import Flask, send_from_directory
app = Flask(__name__, static_folder='build')

@app.route('/')
def index():
	return render_template(app.static_folder+'/index.html')

@app.route('/<path:filename>')
def upload(filename):
	print(filename)
	return send_from_directory(app.static_folder, filename)

if __name__ == "__main__":
	app.run(debug=True)