<?php $gen = $_GET["gen"]?>
<script> var gen = "<?php echo $gen; ?>" </script>

<head>
    <title>Babipoki's Generators</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    
    
</head>
<body>
    <?php include "./header.html"; ?>

    
        <?php if (empty($gen)) {
            echo "Please pick the generator...";
        } else {
            
            include "./" . $gen . ".html";
        }
        ?>
    
    
    <?php include "./footer.html"; ?>
</body>

