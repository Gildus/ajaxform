<?php

namespace demo;

use demo\resize\ResizeImage;
use demo\data\Formulario;

if (isset($_FILES["file_logo"]) && isset($_FILES["file_imagen"]) && isset($_POST['titulo'])  && isset($_POST['comentario'])  && isset($_POST['piepagina']))
{
	//Filter the file types , if you want.
	if ($_FILES["file_logo"]["error"] > 0 || $_FILES["file_imagen"]["error"] > 0)
	{
	  echo "Error: " . $_FILES["file_logo"]["error"].' '. $_FILES["file_imagen"]["error"]. "<br>";
	}
	else
	{
		$output_dir = 'upload/';
		$logo = $_FILES["file_logo"]["name"];
		$imagen = $_FILES["file_imagen"]["name"];
		
    	$img1 = move_uploaded_file($_FILES["file_logo"]["tmp_name"],$output_dir .'logo/original/'. $logo);
		$img2 = move_uploaded_file($_FILES["file_imagen"]["tmp_name"],$output_dir .'imagen/original/'. $imagen);
    
		if ($img1 && $img2) {
			
			require_once 'include/resize.class.php';			
			require_once 'include/modelo.php';
				
			$dir_original = 'upload/logo/original/';
			$dir_resized = 'upload/logo/';			
			$resize_logo = new ResizeImage($dir_original . $logo);
			$resize_logo->resizeTo(200, 200);
			$resize_logo->saveImage($dir_resized . $logo);
			
			$dir_original = 'upload/imagen/original/';
			$dir_resized = 'upload/imagen/';
			$resize_imagen = new ResizeImage($dir_original . $imagen);
			$resize_imagen->resizeTo(300, 400);
			$resize_imagen->saveImage($dir_resized . $imagen);
			
			$datos = array(
				$_POST['titulo'],
				$_POST['comentario'],
				$_POST['piepagina'],
				$dir_resized . $logo,
				$dir_resized . $imagen,
			);
			
			$formulario = new Formulario();
			if ($formulario->guardarDatos($datos)) {
				echo 'ok';
			} else {
				echo 'nok';
			}
			
			
			
			
			
		} else {
			echo 'nok';
		}
		
	}

}

