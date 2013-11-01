<?php
namespace demo\data;

require_once 'config_db.php';

class DB
{	
	protected $link;	
	
	public function __construct()
	{	
		try {
			$this->link = new \PDO('mysql:dbname='.__BASEDATOS.';host='.__SERVIDOR.';port='.__PUERTO,__USUARIO,__PASSWORD);
		} catch(\PDOException $e){
			die('Error: '.$e->getMessage());
		}
		
	}
	
	public function getConnection()
	{
		return $this->link;
	}
	
		
	
}

