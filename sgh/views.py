# //

# notice/views.py

from .models import Notice
from users.models import User
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
