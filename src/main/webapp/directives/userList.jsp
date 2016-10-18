<%--
  Created by IntelliJ IDEA.
  User: misha
  Date: 04.06.2016
  Time: 14:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div>
    <h1>User list</h1>
    <blockquote ng-repeat="product in listCtrl.userList">
        <h2>Имя: {{product.title}}</h2>
        <p>Производ: {{product.manufacturer}}</p>
        <p>Колво: {{product.count}}</p>
        <p>Цена: {{product.price}}</p>
        <button ng-click="listCtrl.removeFromUserList(product)"
                class="btn btn-default">Удалить</button>

    </blockquote>




    <button class="btn btn-primary btn-"
            ng-click="listCtrl.doRequestAboutList()">
        Отправить запрос на сервер за списком</button>
    <div>
        {{listCtrl.response}}
    </div>
</div>
