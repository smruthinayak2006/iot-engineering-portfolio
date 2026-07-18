"""
============================================================

ESP32 Smart Weather Station
Flask Application

============================================================
"""

from flask import Flask

from flask_cors import CORS

from config import (

    HOST,

    PORT,

    DEBUG,

    API_PREFIX

)

from routes import api


def create_app():

    app = Flask(__name__)

    CORS(app)

    app.register_blueprint(

        api,

        url_prefix=API_PREFIX

    )

    return app


app = create_app()


if __name__ == "__main__":

    print("=" * 55)

    print(" ESP32 Smart Weather Station Backend")

    print("=" * 55)

    print(f"Server : http://{HOST}:{PORT}")

    print(f"API    : http://{HOST}:{PORT}{API_PREFIX}/data")

    print("=" * 55)

    app.run(

        host=HOST,

        port=PORT,

        debug=DEBUG

    )