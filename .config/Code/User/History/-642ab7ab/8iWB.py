from django.http import HttpResponse

def inicio(request):
    return HttpResponse("inicio.html")

def sobre_mi(request):
    return HttpResponse("h1 ")
