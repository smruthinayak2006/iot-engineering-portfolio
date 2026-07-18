"""
============================================================

ESP32 Smart Weather Station
Simulation Provider

============================================================
"""

import random

from datetime import datetime

from models import SensorData


class SimulationProvider:
    """
    Generates realistic sensor readings for development.
    """

    def __init__(self):

        self.temperature = 24.5
        self.humidity = 58.0

    def _update_temperature(self):

        change = random.uniform(-0.4, 0.4)

        self.temperature += change

        self.temperature = max(

            18.0,

            min(

                self.temperature,

                45.0

            )

        )

    def _update_humidity(self):

        change = random.uniform(-1.5, 1.5)

        self.humidity += change

        self.humidity = max(

            35.0,

            min(

                self.humidity,

                95.0

            )

        )

    def _calculate_status(self):

        if self.temperature < 30 and self.humidity < 70:

            return (

                "GOOD",

                "Pleasant Conditions"

            )

        if self.temperature < 40 and self.humidity < 85:

            return (

                "MODERATE",

                "Conditions Changing"

            )

        return (

            "EXTREME",

            "Dangerous Conditions"

        )

    def get_sensor_data(self):

        self._update_temperature()

        self._update_humidity()

        status, description = self._calculate_status()

        return SensorData(

            temperature=round(

                self.temperature,

                1

            ),

            humidity=round(

                self.humidity,

                1

            ),

            status=status,

            description=description,

            ip="Simulation",

            online=True,

            timestamp=datetime.now().strftime(

                "%H:%M:%S"

            )

        )


simulation_provider = SimulationProvider()