from django.shortcuts import render

def inicio(request):
    return render(request, "portafolio/inicio.html")

def sobre_mi(request):
    return render(request, ("portafolio/sobre_mi.html"))