from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__, static_folder='../static', static_url_path='/')
    CORS(app)  # Enable CORS if frontend is hosted separately in dev

    from .routes.api import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app
