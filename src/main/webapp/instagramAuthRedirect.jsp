<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<script>
    var authCredentials = JSON.stringify(${authCredentials})
    var input = window.opener.document.getElementById("instagram-auth-credentials")
    input.value = authCredentials
    input.click()
    window.close()
</script>
</body>
</html>
