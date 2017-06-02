<?php
//because you use method post you can access your form value by using this code
$state = $_POST['state'];
$creature = $_POST['creature'];

?>
<form action="" method="get">
     <table cellspacing="0" id="california" class="table" for="path7">
         <tr>
             <th class="infoheader">California</th>
         </tr>
         <tr>
             <th id="th1">Creature</th>
             <th id="th2">Quantity</th>
         </tr>
         <tr>
             <td id="td1">Wolf</td>
             <td id="td2">5</td>
         </tr>
         <tr>
             <td id="td1">Boar</td>
             <td id="td2">3</td>
         </tr>
         <tr>
             <td id="td1">Elk</td>
             <td id="td2">7</td>
         </tr>
    <tr>
  <?php
      echo "<td>". $state."</td>";
      echo "<td>". $creature."</td>";

   ?>
  </tr>
    </table>
  </form>
