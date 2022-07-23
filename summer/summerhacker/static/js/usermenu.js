var usermenu = `
<div class="usermenu">
<li id="guide">Please Login</li>
<ul id="usermenu">
    {% if user.is_authenticated %}
        <li><a href="user.html" id="prof">Profile</a></li>
        <li><a href="login.html">Sign in</a></li>
    {% else %}
        <li><a href="user.html" id="prof">Profile</a></li>
        <li><a href="login.html">Sign Out</a></li>
    {% endif %}
</ul>
</div>`

document.write(usermenu)