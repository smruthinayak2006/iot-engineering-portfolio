"""
============================================================

ESP32 Smart Weather Station
Data Models

============================================================
"""

from dataclasses import dataclass, asdict
from datetime import datetime


@dataclass
class SensorData:
    """
    Represents a validated sensor reading.
    """

    temperature: float
    humidity: float
    status: str
    description: str
    ip: str
    online: bool
    simulated: bool
    timestamp: str

    def to_dict(self) -> dict:
        """
        Convert the SensorData object into a dictionary.
        """
        return asdict(self)


def create_offline_data() -> SensorData:
    """
    Create a default object when the ESP32
    cannot be reached.
    """

    return SensorData(

        temperature=0.0,

        humidity=0.0,

        status="OFFLINE",

        description="ESP32 is not reachable.",

        ip="--",

        online=False,

        simulated=False,

        timestamp=datetime.now().strftime("%H:%M:%S")

    )