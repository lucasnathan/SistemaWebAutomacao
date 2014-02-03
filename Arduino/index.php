<html>
	<head>
		<body>
			<?php
				$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
				socket_connect($sock,"192.168.0.100", 8081);
				socket_bind();
				socket_listen();
				if (isset($_POST['bits'])) {
					$msg = $_POST['bits'];
					if(isset($_POST['Pequeno'])){ $msg = 'P#'; }
					if(isset($_POST['Grande' ])){ $msg = 'G#'; }
					socket_write($sock,$msg,strlen($msg));
				}
				socket_write($sock,'R#',2); //Requisita o status do sistema.
				$status = socket_read($sock,6);
				if (($status[4]=='L')&&($status[5]=='#')) {
					if ($status[0]=='0') $cor1 = lightcoral;
					else {
						$cor1 = lightgreen;
					}
					if ($status[1]=='0') $cor2 = lightcoral;
					else $cor2 = lightgreen;
					if ($status[2]=='0') $cor3 = lightcoral;
					else $cor3 = lightgreen;
					if ($status[3]=='0') $cor4 = lightcoral;
					else $cor4 = lightgreen;
					echo "<form method =\"post\" action=\"index.php\">";
					echo "<input type=\"hidden\" name=\"bits\" value=\"$status\">";
					echo "<button style=\"width:70; background-color: $cor1 ;font: bold 14px Arial\" type = \"Submit\" Name = \"Fora\">Fora</button></br></br>";
					echo "<button style=\"width:70; background-color: $cor2 ;font: bold 14px Arial\" type = \"Submit\" Name = \"Quarto1\">Quarto1</button></br></br>";
					echo "<button style=\"width:70; background-color: $cor3 ;font: bold 14px Arial\" type = \"Submit\" Name = \"Quarto2\">Quarto2</button></br></br>";
					echo "<button style=\"width:70; background-color: $cor4 ;font: bold 14px Arial\" type = \"Submit\" Name = \"Sala\">Sala</button></br></br></br>";
					echo "<button style=\"width:90;font: bold 14px Arial\" type = \"Submit\"Name = \"Pequeno\">Portao Pequeno</button></br></br>";
					echo "<button style=\"width:90;font: bold 14px Arial\" type = \"Submit\"Name = \"Grande\">Portao Grande</button></br></br>";
					echo "</form>";
					}
				else { echo "Falha ao receber status da casa."; }
				socket_close($sock);
			?>
		</body>
	</head>
</html>