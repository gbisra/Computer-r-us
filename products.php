<?php

require_once('init.php');
loadScripts();

    $data = array("status" => "not set!");

    if(Utils::isGET()) {
        $pm = new ProductManager();
        $rows = $pm->listProducts();

        /*$html = "";
        foreach($rows as $row) {
            $sku = $row['SKU'];
            $item = $row['item'];
            $info = $row['info'];
            $price = $row['item_price'];
            $category = $row['category'];
            $html .= "<div class='imgBoxSm'>
                        <img src='../images/110591_l_i5.jpg' class='prdImg'/>
                        <span data-sku-item='$sku'>$item</span>
                        <p class='pInfo' data-sku-info='$sku'>$info</p>
                        <p class='pInfo' data-sku-price='$sku'>$price</p>
                        <input class='pIndex' data-sku-qty='$sku' type='number'id='numqty' min='1' max='10' step='1' value='1'/>
                        <button class='pBut' data-sku-add='$sku' type='button' value='Add' id='checkbut'>Add</button>
                     </div>";
            
                    /*<tr>
                        <td data-sku-desc='$sku'>$desc</td>
                        <td><input data-sku-qty='$sku' type='number' value='1' min='1' max='10' step='1'/></td>
                        <td data-sku-price='$sku'>$price</td>
                        <td><input data-sku-add='$sku' type='button' value='Add'/></td>
                      </tr>";*/
        //}
        echo json_encode($rows);
        return;

    } else {
        $data = array("status" => "error", "msg" => "Only GET allowed.");

    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
