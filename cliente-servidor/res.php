<html>
    <head>
        <title>Crédito</title>
    </head>
    <body>
        <?php 
            $pagoIncial = $_POST["pagoInicial"];
            $monto = $_POST["montoTotal"];
            $cuotas  = $_POST["cuotas"];
            $valorCuotas=$_POST["(montoTotal-pagoInicial)/cuotas"];
        ?>
            <h1>Cada cuota tiene un valor de: <?php echo $valorCuotas; ?> pesos </h1>
        

        <h1>Datos de crédito</h1>
        <form action="">
           deuda <input type="number" name="montoTotal" />
           pago inicial <input type="number" name="pagoInicial" />
           cuotas a pagar <input type="number" name="fechaRegreso" /> <br/> 

           <Img src="gracias.png">
        </form>
    </body>