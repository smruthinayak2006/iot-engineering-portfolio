"""
============================================================

ESP32 Smart Weather Station
Configuration

============================================================
"""

# Flask Server

HOST = "127.0.0.1"

PORT = 5000

DEBUG = True


# ESP32 Configuration

ESP32_BASE_URL = "http://10.10.0.2"

ESP32_DATA_ENDPOINT = "/data"

REQUEST_TIMEOUT = 5


# Dashboard

REFRESH_INTERVAL = 3


# API

API_PREFIX = "/api"