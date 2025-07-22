from django.shortcuts import render

def inicio(request):
    return render(request, "portafolio/templates/inicio.html")
