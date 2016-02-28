
$(document).ready(function() {

        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        }

        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
        }

//------------LOAD PRODUCTS INTO HTML PRODUCT LIST-------------------------//
        function loadProducts() {
            $.ajax({
                url: "../products.php",
                type: "GET",
                dataType: 'json',
                success: function(returnedData) {
                    
                    var cartData = localStorage.setObject('autosave', {items: []});
                    
                    //console.log(returnedData);
                    //$("#productslist").html(returnedData);
                    for (i=0; i<returnedData.length; i++){
                        var prodDiv = document.createElement("div");
                        prodDiv.className = "imgBoxSm";
                        prodDiv.innerHTML="<img src='../images/110591_l_i5.jpg' class='prdImg'/><span class='skuHdn' data-sku-SKU='"+returnedData[i].sku+"'>"+returnedData[i].SKU+"</span><span data-sku-item='"+returnedData[i].sku+"'>"+returnedData[i].item+"</span><p class='pInfo' data-sku-info='"+returnedData[i].sku+"'>"+returnedData[i].info+"</p><p class='pInfo' data-sku-price='"+returnedData[i].sku+"'>"+returnedData[i].item_price+"</p><input class='pIndex' data-sku-qty='"+returnedData[i].sku+"' type='number'id='numqty' min='1' max='10' step='1' value='1'/><button class='pBut' data-sku-add='"+returnedData[i].sku+"' type='button' value='Add' id='checkbut'>Add</button>";

                        console.log(returnedData[i].category);
                        document.getElementById(returnedData[i].category).appendChild(prodDiv);
                    };
                },
                    error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText, textStatus);
                }
            });
        }; loadProducts();
    

//----------CLICK ON ADD TO CREATE AN OBJ AND FIND OUT PRICE----------------//
    
        //created a variable for the local storage
        var cartData = localStorage.getObject('autosave');
        //console.log(cartData);
    
        //Choosing an item from CPU section
    
             
        $('#cpu').on('click', 'button[data-sku-add]', function() {
            
            // get the element attributes
            var sku = (this).parentElement.childNodes[1].innerHTML;
            var name = (this).parentElement.childNodes[2].innerHTML;
            var info = (this).parentElement.childNodes[3].innerHTML;
            var price = (this).parentElement.childNodes[4].innerHTML;
            var qty = this.parentElement.childNodes[5].valueAsNumber;

            var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(name, "quantity", qty, "price", subtotal);
            
            if(cartData == null) {
                    return;
            }
            //put all that into an object
            var item = {
                sku : (this).parentElement.childNodes[1].innerHTML,
                name : (this).parentElement.childNodes[2].innerHTML,
                info : (this).parentElement.childNodes[3].innerHTML,
                price : (this).parentElement.childNodes[4].innerHTML,
                qty : (this).parentElement.childNodes[5].valueAsNumber,
                subtotal : parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2), 
            }; console.log(item);
            
             cartData['items'].push(item);
                    console.log(cartData);
        });

        $('#gpu').on('click', 'button[data-sku-add]', function() {

            // get the element attributes
            var sku = (this).parentElement.childNodes[1].innerHTML;
            var name = (this).parentElement.childNodes[2].innerHTML;
            var info = (this).parentElement.childNodes[3].innerHTML;
            var price = (this).parentElement.childNodes[4].innerHTML;
            var qty = this.parentElement.childNodes[5].valueAsNumber;

            var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(name, "quantity", qty, "price", subtotal);
            
            if(cartData == null) {
                    return;
            }

            //put all that into an object
            var item = {
                sku : (this).parentElement.childNodes[1].innerHTML,
                name : (this).parentElement.childNodes[2].innerHTML,
                info : (this).parentElement.childNodes[3].innerHTML,
                price : (this).parentElement.childNodes[4].innerHTML,
                qty : (this).parentElement.childNodes[5].valueAsNumber,
                subtotal : parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2), 
            }; console.log(item);
            
            cartData['items'].push(item);
                    console.log(cartData);

        });

        $('#mb').on('click', 'button[data-sku-add]', function() {

            // get the element attributes
            var sku = (this).parentElement.childNodes[1].innerHTML;
            var name = (this).parentElement.childNodes[2].innerHTML;
            var info = (this).parentElement.childNodes[3].innerHTML;
            var price = (this).parentElement.childNodes[4].innerHTML;
            var qty = this.parentElement.childNodes[5].valueAsNumber;

            var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(name, "quantity", qty, "price", subtotal);
            
            if(cartData == null) {
                    return;
            }

            //put all that into an object
            var item = {
                sku : (this).parentElement.childNodes[1].innerHTML,
                name : (this).parentElement.childNodes[2].innerHTML,
                info : (this).parentElement.childNodes[3].innerHTML,
                price : (this).parentElement.childNodes[4].innerHTML,
                qty : (this).parentElement.childNodes[5].valueAsNumber,
                subtotal : parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2), 
            }; console.log(item);
            
            cartData['items'].push(item);
                    console.log(cartData);

        });

        $('#hd').on('click', 'button[data-sku-add]', function() {

            // get the element attributes
            var sku = (this).parentElement.childNodes[1].innerHTML;
            var name = (this).parentElement.childNodes[2].innerHTML;
            var info = (this).parentElement.childNodes[3].innerHTML;
            var price = (this).parentElement.childNodes[4].innerHTML;
            var qty = this.parentElement.childNodes[5].valueAsNumber;

            var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(name, "quantity", qty, "price", subtotal);
            
            if(cartData == null) {
                    return;
            }

            //put all that into an object
            var item = {
                sku : (this).parentElement.childNodes[1].innerHTML,
                name : (this).parentElement.childNodes[2].innerHTML,
                info : (this).parentElement.childNodes[3].innerHTML,
                price : (this).parentElement.childNodes[4].innerHTML,
                qty : (this).parentElement.childNodes[5].valueAsNumber,
                subtotal : parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2), 
            }; console.log(item);
            
            cartData['items'].push(item);
                    console.log(cartData);

        });            
    
});


                        
                
            
        
    
        
       


        // remove items from the car
        /*$("#shoppingCart").on("click", "input", function() {
            // https://api.jquery.com/closest/
            this.closest("li").remove();

        });*/


        // start the cart
       /* $("#startCart").click(function() {
            console.log("Start cart.");
            $.ajax({
                url: "./shoppingcart.php",
                type: "POST",
                dataType: 'json',
                data: {
                    action: "startcart"},
                success: function(returnedData) {
                    console.log("cart start response: ", returnedData);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText, textStatus);
                }
            });
        });

        // cancel the cart
        /*$("#cancelCart").click(function() {

            console.log("End cart.");
            $.ajax({
                url: "./shoppingcart.php",
                type: "POST",
                dataType: 'json',
                data: {action: "cancelcart"},
                success: function(returnedData) {
                    console.log("cart cancel response: ", returnedData);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText, textStatus);
                }
            });
            var shoppingCartList = $("#shoppingCart").html("");
        });*/

        // cancel the cart
        /*$("#checkoutcart").click(function() {

            // retrieve all of the items from the cart:
            var items = $("#shoppingCart li");
            var itemArray = [];
            $.each(items, function(key, value) {

                var item = {sku: value.getAttribute("data-item-sku"),
                    qty: value.getAttribute("data-item-qty")};
                itemArray.push(item);
            });
            var itemsAsJSON = JSON.stringify(itemArray);
            console.log("itemsAsJSON", itemsAsJSON);


            console.log("Check out cart with the following items", itemArray);
            $.ajax({
                url: "./shoppingcart.php",
                type: "POST",
                dataType: 'json',
                data: {
                    action: "checkoutcart", 
                    items: itemsAsJSON
                },
                success: function(returnedData) {
                    console.log("cart check out response: ", returnedData);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText, textStatus);
                }
            });
            var shoppingCartList = $("#shoppingCart").html("");
        });*/







