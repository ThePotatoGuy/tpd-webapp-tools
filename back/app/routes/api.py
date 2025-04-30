from flask import Blueprint, jsonify, request

api_bp = Blueprint('api', __name__)

@api_bp.route('/hello')
def hello():
    return jsonify({'message': 'Hello from Flask!'})

@api_bp.route('/echo', methods=["POST"])
def echo():
    data = request.get_json()  # Get JSON payload from React
    message = data.get('message', '')
    return jsonify({'response': f'You said: {message}'})