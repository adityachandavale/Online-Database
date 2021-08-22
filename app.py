from flask import *
import pymongo as pm

app = Flask(__name__)

client = pm.MongoClient("mongodb+srv://Aditya:aditya123@database.yyjna.mongodb.net/Database?retryWrites=true&w=majority")
db = client['Database']
col = db['contact']

@app.route('/')
def index():
    return render_template('signin.html')

@app.route('/signin', methods=['POST','GET'])
def signin():
    if(request.method=='POST'):
        col = db['user']
        data = request.get_json()
        id = 1
        passw = data['pass']
        for x in col.find({"_id": id},{"_id":0,"pass":1}):
            if passw == x["pass"]:
                result = 'Succesful'
                return jsonify(result)
                return  redirect(url_for('/home'))
    else:
        return render_template('signin.html')

@app.route('/home', methods=['POST','GET'])
def home():
    if(request.method=='POST'):
        data = request.get_json()
        name = data['name']
        for x in col.find({"_id": name}):
            #result = 'Succesful'
            return jsonify(x)
            return  render_template('home.html')
    else:
        return  render_template('home.html')

@app.route('/addcontacts', methods=['POST','GET'])
def addcontacts():
    if(request.method=='POST'):
        data = request.get_json()
        col.insert_one(data)
        result = "Succesful"
        return jsonify(result)
        return render_template('addcontacts.html')
    else:
        return render_template('addcontacts.html')

if __name__ == '__main__':
    app.run(debug=True)