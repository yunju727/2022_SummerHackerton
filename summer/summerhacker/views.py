from django.shortcuts import render
from .models import Notice
from .models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from .forms import NoticeWriteForm
from users.decorators import admin_required


@login_message_required
@admin_required
def notice_write_view(request):
    if request.method == "POST":
        form = NoticeWriteForm(request.POST)
        user = request.session['user_id']
        user_id = User.objects.get(user_id=user)

        if form.is_valid():
            notice = form.save(commit=False)
            notice.writer = user_id
            notice.save()
            return redirect('notice:notice_list')
    else:
        form = NoticeWriteForm()

    return render(request, "notice/notice_write.html", {'form': form})

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
