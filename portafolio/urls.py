from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns

i18n_urlpatterns = i18n_patterns(
    path('admin/', admin.site.urls),
    path('', include('web.urls')),
)

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),
] + i18n_urlpatterns
