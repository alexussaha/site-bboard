from django.apps import AppConfig
from django.dispatch import Signal

from .utilities import send_activation_notification 

user_registered = Signal()

def user_regisetred_dispatcher(sender, **kwargs):
    send_activation_notification(kwargs['instance'])

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'
    verbose_name = 'Доска объявлений'


user_registered.connect(user_regisetred_dispatcher)