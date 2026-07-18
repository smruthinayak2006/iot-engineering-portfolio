"""
============================================================

ESP32 Smart Weather Station
API Routes

============================================================
"""

from flask import Blueprint, jsonify

from esp32_client import esp32_client

api = Blueprint("api", __name__)


"""
============================================================
Health Check
============================================================
"""


@api.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "OK",

        "service": "ESP32 Weather Station Backend"

    }), 200


"""
============================================================
Live Sensor Data
============================================================
"""


@api.route("/data", methods=["GET"])
def sensor_data():

    sensor = esp32_client.fetch_sensor_data()

    return jsonify(

        sensor.to_dict()

    ), 200