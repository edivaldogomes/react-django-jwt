from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include(('apps.user.urls', 'apps.user'), namespace="user")),
    path('docs/', include_docs_urls(title='blog API'))
]
urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

