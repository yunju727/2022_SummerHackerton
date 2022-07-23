"""summer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import summerhacker.views
import users.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', summerhacker.views.index),
    path('index.html', summerhacker.views.index),
    path('login.html', users.views.login_view),
    path('region.html', summerhacker.views.region_page),
    path('bug report.html', summerhacker.views.bugreport_page),
    path('user.html', summerhacker.views.user_page),
    path('write1.html', summerhacker.views.write1_page),
    path('logout', users.views.logout_view),
]
