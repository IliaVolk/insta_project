<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
  <base href="/">
  <title>Angular Tour of Heroes</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="<c:url value="resources/styles.css"/>">
  <script src="<c:url value="resources/node_modules/core-js/client/shim.min.js"/>"></script>
  <script src="<c:url value="resources/node_modules/zone.js/dist/zone.js"/>"></script>

  <!-- #docregion moduleId -->
  <script>window.module = 'aot';</script>
  <!-- #enddocregion moduleId -->
</head>

<body>
<my-app>Loading...</my-app>
</body>
<script src="<c:url value="resources/dist/build.js"/>"></script>

</html>
