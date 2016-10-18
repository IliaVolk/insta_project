<%--
  Created by IntelliJ IDEA.
  User: misha
  Date: 04.06.2016
  Time: 13:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<div class="container" style="width: 300px;">
    <c:url value="/j_spring_security_check" var="loginUrl"/>
    <form action="${loginUrl}" method="post">
        <sec:authorize access="!isAuthenticated()">
            <h2 class="form-signin-heading">Please sign in</h2>
            <input type="text" class="form-control" name="j_username"
                   placeholder="Email address" required >
            <input type="password" class="form-control" name="j_password"
                   placeholder="Password" required >
            <button class="btn btn-lg btn-primary btn-block"
                    type="submit">Войти
            </button>
        </sec:authorize>
        <sec:authorize access="isAuthenticated()">
            <p>Ваш логин: <sec:authentication
                    property="principal.username"/></p>
            <p><a class="btn btn-lg btn-danger"
                  href="<c:url value="/logout" />"
                  role="button">Выйти</a></p>
            <sec:authorize access="hasRole('USER')">
                <h1>YOU are user</h1>
            </sec:authorize>
            <sec:authorize access="hasRole('ADMIN')">
                <h1>YOU are admin</h1>
            </sec:authorize>
        </sec:authorize>
    </form>
</div>