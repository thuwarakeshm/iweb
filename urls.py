from django.urls import path, include
from django.views.generic.base import TemplateView
from django.views.generic import CreateView
from .models import Contact

urlpatterns = [
    path('', TemplateView.as_view(template_name='web/index.html'), name='home'),
    path('about', TemplateView.as_view(template_name='web/about.html'), name='about'),
    path('clients', TemplateView.as_view(template_name='web/clients.html'), name='clients'),
    path('technology_stack', TemplateView.as_view(template_name='web/techstack.html'), name='techstack'),
    path('contact', CreateView.as_view(
        template_name='web/contact.html',
        model= Contact,
        fields = '__all__',
        ), name='contact'),
    path('solutions', TemplateView.as_view(template_name='web/solutions.html'), name='solutions'),
]
