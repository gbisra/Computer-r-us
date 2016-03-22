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
        
        for(var i = 0; i < cartDataItems.length; i++) {
            var item = cartDataItems[i];
            
            var sku = item['sku'];
            var name = item['name'];
            var info = item['info'];
            var qty = item['qty'];
            var price = item['price'];
            //var date = item['date'];
            var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);

            var item = "<tr class='row'><td class='sec1'>" + name + "</td><td class='sec2'>" + info + "</td><td class='sec3'>" + qty + "</td><td class='sec4'>" + price + "</td><td class='sec5'>" + subtotal+ "</td><td class='sec6'><input type='button' data-remove-button='remove' value='X'</td></tr>";
            contentDiv.append(item);
        };
         
    
    }; loadShoppingCarItems();

    
    $("#productslist").on("click", "input", function() {
            localStorage.getObject('autosave', cartData);
            var cartData = localStorage.getObject('autosave');
            console.log("Click");
            console.log(cartData);
            // WEB STORAGE REMOVE            
            
            var thisInputName = this.parentElement.parentNode.childNodes[0].innerHTML;
            var thisInputInfo = this.parentElement.parentNode.childNodes[1].innerHTML;
            console.log(this.parentElement.parentNode.childNodes[0].innerHTML);
            console.log(this.parentElement.parentNode.childNodes[1].innerHTML);

            
        console.log(cartData);
            if(cartData == null) {
                console.log("yep")
                cartData = localStorage.setObject('autosave', {items: []});
                return;
            };
            var cartDataItems = cartData['items'];
            for(var i = 0; i < cartDataItems.length; i++) {
                var item = cartDataItems[i];
                // get the item based on the sku, qty, and date
                if(item['name'] == thisInputName) {
                    // remove from web storage
                    cartDataItems.splice(i, 1);
                    cartData['items'] = cartDataItems;
                    localStorage.setObject('autosave', cartData);

                }
            }; 
        
            console.log('cart data stuff', cartData);
            // clobber the old value
            
        //sessionStorage.setObject('autosave', cartData);

            this.closest("tr").remove();

    });
    
    $("#continue").on("click", function(){
        window.location.href = "./index.php";
    });
    
    $("#checkOut").on("click", function(){
        window.location.href = "./checkout.php";
    });
    
    
});
        