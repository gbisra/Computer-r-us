$(document).ready(function() {
    console.log("Start cart");
    
    Storage.prototype.setObject = function(key, value) {
        this.setItem(key, JSON.stringify(value));
    }

    Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    }
   
        
//-------------Load Local Storage--------------/
    var cartData = localStorage.getObject('autosave');
    
    if(cartData == null) {
        cartData = localStorage.setObject('autosave', {items: []});
            return;
    }; console.log(cartData);
   

    
    function loadShoppingCarItems() {
        console.log("yey");
        var cartDataItems = cartData['items'];
        var contentDiv = $("#productslist");
        var total = 0;
        
        for(var i = 0; i < cartDataItems.length; i++) {
            var item = cartDataItems[i];
            
            var sku = item['sku'];
            var name = item['name'];
            var info = item['info'];
            var qty = item['qty'];
            var price = item['price'];
            //var date = item['date'];
            var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);

            var item = "<tr class='row'><td class='sec1'>" + name + "</td><td class='sec2'>" + info + "</td><td class='sec3'>" + qty + "</td><td class='sec4'>" + price + "</td><td class='sec5'>" + subtotal+ "</td></tr>";
            contentDiv.append(item);
            
            total = total+parseInt(cartDataItems[i].subtotal);            
                        
        };
        
        document.getElementById('total').innerHTML = total;
        console.log(total);
    
    }; loadShoppingCarItems();
            
    
    
    $("#edit").on("click", function(){
        window.location.href = "./shopCart.php";
    });
    
    $("#complete").on("click", function(){
        window.location.href = "./complete.php";
    });
    
    
});
        