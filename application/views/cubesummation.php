<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Cube Summation</title>
	<style type="text/css">

	::selection { background-color: #E13300; color: white; }
	::-moz-selection { background-color: #E13300; color: white; }

	body {
		background-color: #fff;
		margin: 40px;
		font: 13px/20px normal Helvetica, Arial, sans-serif;
		color: #4F5155;
	}

	a {
		color: #003399;
		background-color: transparent;
		font-weight: normal;
	}

	h1 {
		color: #444;
		background-color: transparent;
		border-bottom: 1px solid #D0D0D0;
		font-size: 19px;
		font-weight: normal;
		margin: 0 0 14px 0;
		padding: 14px 15px 10px 15px;
	}

	code {
		font-family: Consolas, Monaco, Courier New, Courier, monospace;
		font-size: 12px;
		background-color: #f9f9f9;
		border: 1px solid #D0D0D0;
		color: #002166;
		display: block;
		margin: 14px 0 14px 0;
		padding: 12px 10px 12px 10px;
	}

	#body {
		margin: 0 15px 0 15px;
	}

	p.footer {
		text-align: right;
		font-size: 11px;
		border-top: 1px solid #D0D0D0;
		line-height: 32px;
		padding: 0 10px 0 10px;
		margin: 20px 0 0 0;
	}

	#container {
		margin: 10px;
		border: 1px solid #D0D0D0;
		box-shadow: 0 0 8px #D0D0D0;
	}
	</style>
	<script src="javascript/cubsumscripts.js" type="text/javascript"></script> 
</head>
<body>
	<div >
		<h1>Cube Summation</h1>
		<input name="btnProblem" type="button" id="btnProblem"  value="Problem Statement" onclick="problem()">
		<input name="btnInputFormat" type="button" id="btnInputFormat"  value="Input Format" onclick="inputformat()">
		<input name="btnOutputFormat" type="button" id="btnOutputFormat"  value="Output Format" onclick="outputformat()">
		<input name="btnConstrains" type="button" id="btnConstrains"  value="Constrains" onclick="constrains()">
		<input name="btnInputSample" type="button" id="btnInputSample"  value="Sample Input" onclick="inputsample()">
		<input name="btnOutputSample" type="button" id="btnOutputSample"  value="Sample Output" onclick="outputsample()">
		<input name="btnExplanation" type="button" id="btnExplanation"  value="Explanation" onclick="explanation()">


	</div>
		<br>
	<div>
		<form method="post" name="caseTest" id="caseTest" action="cubesummation/matrix">
			<h2>Insert data:</h2>
			<textarea name="input" id="input" placeholder="Insert Sample" rows="20" cols="20"></textarea>
			<input name="btnValidate" type="button" id="btnValidate"  value="Execute" onclick="validate()">
		</form>
	</div>
	</div>
	<br>

</body>
