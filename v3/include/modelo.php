<?php

namespace demo\data;

require_once 'data.class.php';


class Formulario extends DB
{
		
	public function guardarDatos($params = array())
	{
		$insertados = null;
		if (count($params) > 0) {
			$link = $this->getConnection();
			$res = $link->prepare('INSERT INTO tabla(titulo, comentario, piepagina, logotipo,videoimagen, marquee) VALUES(?,?,?,?,?,?)');
			$res->execute($params);		
			$insertados = $res->rowCount();
			
		}
		
		return $insertados;
		
	}
	
	
	
	

}

