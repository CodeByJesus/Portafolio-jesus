from .models import Proyecto
from django.shortcuts import render

def inicio(request):
    proyectos = Proyecto.objects.all()
    return render(request, 'inicio.html', {'proyectos' : proyectos})