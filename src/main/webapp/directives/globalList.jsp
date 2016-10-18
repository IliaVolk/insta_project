<%--
  Created by IntelliJ IDEA.
  User: misha
  Date: 04.06.2016
  Time: 14:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div>
    <h1>Global list</h1>
    <blockquote ng-repeat="product in listCtrl.globalProducts">
        <h2>Имя: {{product.title}}</h2>
        <p>Производ: {{product.manufacturer}}</p>
        <p>Колво: {{product.count}}</p>
        <p>Цена: {{product.price}}</p>
        <button ng-click="listCtrl.addToUserList(product)"
                class="btn btn-default">Добавить</button>
    </blockquote>
    <button class="btn btn-primary"
            ng-click="listCtrl.loadGlobalList()">Перезагрузить</button>
</div>
