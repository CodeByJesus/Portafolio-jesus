from .models import Proyecto
from django.shortcuts import render
from django.utils.translation import get_language

def inicio(request):
    proyectos = Proyecto.objects.all()
    current_language = get_language()

    for proyecto in proyectos:
        if current_language == 'en' and proyecto.descripcion_en and proyecto.tecnologias_en:
            proyecto.display_descripcion = proyecto.descripcion_en
            proyecto.display_tecnologias = proyecto.tecnologias_en
        else:
            proyecto.display_descripcion = proyecto.descripcion
            proyecto.display_tecnologias = proyecto.tecnologias

    return render(request, 'inicio.html', {'proyectos' : proyectos})