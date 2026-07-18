"""
============================================================

ESP32 Smart Weather Station
ESP32 Client

============================================================
"""

import requests

from datetime import datetime

from config import (

    ESP32_BASE_URL,

    ESP32_DATA_ENDPOINT,

    REQUEST_TIMEOUT

)

from models import SensorData

from simulation import simulation_provider


class ESP32Client:
    """
    Handles communication with the ESP32.
    Falls back to simulation mode when the ESP32
    is unavailable.
    """

    def __init__(self):

        self.endpoint = (

            f"{ESP32_BASE_URL}"

            f"{ESP32_DATA_ENDPOINT}"

        )

    def fetch_sensor_data(self) -> SensorData:
        """
        Fetch live data from the ESP32.
        If unreachable, automatically use the
        simulation provider.
        """

        try:

            response = requests.get(

                self.endpoint,

                timeout=REQUEST_TIMEOUT

            )

            response.raise_for_status()

            data = response.json()

            return SensorData(

                temperature=float(

                    data.get(

                        "temperature",

                        0.0

                    )

                ),

                humidity=float(

                    data.get(

                        "humidity",

                        0.0

                    )

                ),

                status=data.get(

                    "status",

                    "UNKNOWN"

                ),

                description=data.get(

                    "description",

                    "No description."

                ),

                ip=ESP32_BASE_URL.replace(

                    "http://",

                    ""

                ),

                online=True,

                timestamp=datetime.now().strftime(

                    "%H:%M:%S"

                )

            )

        except (

            requests.RequestException,

            ValueError,

            KeyError

        ) as error:

            print(

                "[INFO] ESP32 not reachable."

            )

            print(

                "[INFO] Using Simulation Provider."

            )

            return simulation_provider.get_sensor_data()


esp32_client = ESP32Client()