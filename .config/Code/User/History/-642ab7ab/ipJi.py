from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Bienvenido a mi portafolio</h1>")
