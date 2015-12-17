<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cubesummation extends CI_Controller {

	public function index()
	{
		$this->load->view('cubesummation');
	}
	public function matrix()
	{
		$data=nl2br($this->input->post('input'));
		$lines = explode  ( '<br />'  , $data );
		foreach ($lines as $k => $v) {
		   $cells[$k]=$v;
		}
		$nm = explode  ( ' '  , $cells[1] );
		$n = $nm[0];
		$m = $nm[1];
		for ($i = 1; $i <= $n; $i++){
			for ($j = 1; $j <= $n; $j++){
				for ($k = 1; $k <= $n; $k++){
					$matrix[$i][$j][$k]=0;
				}	
			}
		}
		$this->matrixnm($cells,$m, $matrix, $n);
	}
	function matrixnm($cells,$m, $matrix, $n)
	{	
		$length=count($cells);
		for ($i=1;$i<$length;$i++) {
			$validation = $i+1;
			$i=$this->viewQ($cells, $m, $validation, $matrix, $n);
		}
	}
	function viewQ($cells,$m, $validation, $matrix, $n)
	{
		for ($i=0;$i<$m;$i++) {
			if ($validation<count($cells)){
				$query= explode  ( ' '  , $cells[$validation]);
			
				if (strlen($query[0])==7){
					$sum=$this->viewQuery($query, $matrix, $n);
				}
				else {
					$matrix=$this->viewUpdate($query, $matrix, $n);
				}
			}
			 $validation++;
		}
	
		return $validation -1;
	}
	function viewUpdate($query, $matrix, $n)
	{
		$matrix[$query[1]][$query[2]][$query[3]]=$query[4];
		return $matrix;
	}
	function viewQuery($query, $matrix, $n)
	{ 
		$sum=0;
		$x1=$query[1];
		$x2=$query[4];
		$y1=$query[2];
		$y2=$query[5];
		$z1=$query[3];
		$z2=$query[6];
		for ($i = 1; $i <= $n; $i++){
			for ($j = 1; $j <= $n; $j++){
				for ($k = 1; $k <= $n; $k++){
					if ((($x2>=$i)&&($x1<=$i))&&(($y2>=$i)&&($y1<=$i))&&(($z2>=$i)&&($z1<=$i))){
						$sum = $sum + $matrix[$i][$j][$k];
					}
				}	
			}
		}
		echo $sum."<br>";
	}
}
