from .models import Proyecto

def inicio(request):
    proyectos = Proyecto.objects.all()
    return render(request, 'inicio.html', {'proyectos' : proyectos})