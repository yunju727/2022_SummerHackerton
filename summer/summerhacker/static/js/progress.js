var progress = `
<!DOCTYPE>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/css.css">
</head>

<body>
  <script src="js/star.js"></script>

  <form>
    <input type="number" placeholder="나이" min="10" max="100" step="1" /> <br />
    <input type="range" min="1" max="10" step="1" />
  </form>
  <form>
    <input type="number" placeholder="전체 비용" min="50000" max="1000000" step="1" /> <br />
    <input type="range" min="1" max="10000" step="1" />
  </form>

  <span class="star">
    ★★★★★
    <span>★★★★★</span>
    <input type="range" oninput="drawStar(this)" value="1" step="1" min="0" max="10"></span>


</body>

</html>`

document.write(progress)