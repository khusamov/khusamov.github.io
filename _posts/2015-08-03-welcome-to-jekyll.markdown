---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-08-03 17:08:00
categories: jekyll update
---


Данная проблема обсуждается на форуме [javascript.ru][forum].

Почему не выводится значение displayField комбобокса?
Если взять value=3, то все работает. Но если больше 5, то выводится число, а не текст.

Смотрите код в [песочнице][fiddle].

То есть, чтобы показать значение displayField мне нужно вычислить страницу хранилища, 
переключить хранилище вручную на эту страницу? Комбик не может это сам делать разве???

Комбобокс это мог бы и сам делать. Например банально при каждом load в extra params 
передавать значение value (аналогично как он это делает при поиске, передавая 
искомую строку в query). Чего это он сразу не делает - не ясно.

{% highlight javascript %}
Ext.define("MyApp.override.form.field.ComboBox", {
	override: "Ext.form.field.ComboBox",
	
	config: {
		comboboxParam: "combobox"
	},
	
	initComponent: function() {
		this.callParent();
		this.store.combobox = this;
	},
	
});
{% endhighlight %}

{% highlight javascript %}
Ext.define("MyApp.override.data.Store", {
	override: "Ext.data.Store",
	
	listeners: {
		beforeload: function(store, operation) {
			if ("combobox" in store && store.combobox instanceof Ext.form.field.ComboBox) {
				var params = {};
				params[store.combobox.getComboboxParam()] = store.combobox.getValue();
				operation.setParams(Ext.Object.merge(operation.getParams() || {}, params));
			}
		}
	}
	
});
{% endhighlight %}

Проверил, работает. Значение `comboboxParam` передается на сервер (то есть под этим именем 
передается значение комбобокса, а сервер уже сам решает что с ним делать). Имя параметра 
comboboxParam можно менять прямо в комбобоксе (аналогично как меняется к примеру queryParam):

{% highlight javascript %}
xtype: "combobox",
comboboxParam: "mycombobox"
{% endhighlight %}

Но решение мне не нравится. В выпадающем списке, помимо обычной последовательности будет 
присутствовать эта запись (причем возможно повторно, ибо на какой-то странице оно уже присутствует). 

Причем неизвестно как поведет себя комбобокс, если эта запись при листании выпадающего списка 
пропадет (хотя если `comboboxParam` будет постоянно передаваться, то не пропадет). 
А если не пропадет - будет постоянно на глазах у изумленного пользователя (ему же не понятно, 
почему эта запись присутствует на всех страницах). Эта проблема частично решается, если сервер 
будет просматривать запрос на наличие параметра query (если он есть, то comboboxParam надо игнорировать). 
Частично потому, что имя query клиентом может быть изменено. Также myparam можно игнорировать 
если `page>1`. (Кстати, если query не пустой, то `comboboxParam=query`.)

В общем неплохо было бы потом переделать это поведение комбобокса, чтобы он display value 
брал не из store, а отдельно загружал, используя модель store (при условии, что прокси описан 
в модели и что value совпадает с `id` модели... блин, много всяких условий однако...).




[forum]: http://javascript.ru/forum/extjs/56522-vyvod-znacheniya-combobox-kotoroe-nakhoditsya-na-vtorojj-stranice-store.html

[fiddle]: https://fiddle.sencha.com/#fiddle/p4a