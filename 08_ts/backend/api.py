from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
import time

app = Flask(__name__)
api = Api(app)
CORS(app)

class HelloWorld(Resource):
    def get(self):
        time.sleep(2)
        response = {'msg': 'Hello world'}
        return response
    
api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=True)
    