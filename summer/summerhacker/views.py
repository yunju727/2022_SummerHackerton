from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'summerhacker/index.html')

def bugreport_page(request):
    return render(request, 'summerhacker/bug report.html')

def login_page(request):
    return render(request, 'summerhacker/login.html')

def region_page(request):
    return render(request, 'summerhacker/region.html')

def user_page(request):
    return render(request, 'summerhacker/user.html')

def write1_page(request):
    return render(request, 'summerhacker/write1.html')

