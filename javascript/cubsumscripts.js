function problem() {
	alert("You are given a 3-D Matrix in which each block contains 0 initially. The first block is defined by the coordinate (1,1,1) and the last block is defined by the coordinate (N,N,N). There are two types of queries. \n \n" +
		"UPDATE x y z W \n\n" +
		"updates the value of block (x,y,z) to W. \n\n" +
		"QUERY x1 y1 z1 x2 y2 z2 \n\n" +
		"calculates the sum of the value of blocks whose x coordinate is between x1 and x2 (inclusive), y coordinate between y1 and y2 (inclusive) and z coordinate between z1 and z2 (inclusive).");
}
function inputformat() {
	alert("The first line contains an integer T, the number of test-cases. T testcases follow. \n" + 
		"For each test case, the first line will contain two integers N and M separated by a single space. \n" +
		"N defines the N * N * N matrix. \n" +
		"M defines the number of operations. \n" +
		"The next M lines will contain either \n \n" +
		"1. UPDATE x y z W \n"  +
		"2. QUERY  x1 y1 z1 x2 y2 z2");
}
function outputformat(){
	alert("Print the result for each QUERY.");
}
function constrains(){
	alert("1 <= T <= 50 \n" +
		"1 <= N <= 100 \n" +
		"1 <= M <= 1000 \n" +
		"1 <= x1 <= x2 <= N \n" +
		"1 <= y1 <= y2 <= N \n" +
		"1 <= z1 <= z2 <= N \n" +
		"1 <= x,y,z <= N \n" +
		"-10^9 <= W <= 10^9");
}
function inputsample(){
	alert("2 \n" +
		"4 5 \n" +
		"UPDATE 2 2 2 4 \n" +
		"QUERY 1 1 1 3 3 3 \n" +
		"UPDATE 1 1 1 23 \n" +
		"QUERY 2 2 2 4 4 4 \n" +
		"QUERY 1 1 1 3 3 3 \n" +
		"2 4 \n" +
		"UPDATE 2 2 2 1 \n" +
		"QUERY 1 1 1 1 1 1 \n" +
		"QUERY 1 1 1 2 2 2 \n" +
		"QUERY 2 2 2 2 2 2");
}
function outputsample(){
	alert("4 \n" +
		"4 \n" +
		"27 \n" +
		"0 \n" +
		"1 \n" +
		"1");
}
function explanation(){
	alert("First test case, we are given a cube of 4 * 4 * 4 and 5 queries.  Initially all the cells (1,1,1) to (4,4,4) are 0. \n" +
		"UPDATE 2 2 2 4 makes the cell (2,2,2) = 4 \n" +
		"QUERY 1 1 1 3 3 3. As (2,2,2) is updated to 4 and the rest are all 0. The answer to this query is 4. \n" +
		"UPDATE 1 1 1 23. updates the cell (1,1,1) to 23. \n" + 
		"QUERY 2 2 2 4 4 4. Only the cell (1,1,1) and (2,2,2) are non-zero and (1,1,1) is not between (2,2,2) and (4,4,4). So, the answer is 4. \n" +
		"QUERY 1 1 1 3 3 3. 2 cells are non-zero and their sum is 23+4 = 27.");
}
function validate() {
	testcases = document.getElementById('input').value;
	if(testcases==''){
		alert("The Input Window is empty");
	}
	else {
		line = testcases.split("\n");
		alert(""+testcases)
		validateT(line);
	}	
}
function validateT(line) {
	if (isNaN(line[0])==false){
		if ((line[0]>=1)&&(line[0]<=50)){
			validateNM(line);
		}
		else {
			alert("Error - T must be between 1 and 50");
		}
	}
	else {
		alert("The value of T must be numeric");
	}
}
function validateNM(line) {
	counter = 1;
	for (i=1;i<line.length;i++) {
		if (counter>line[0]){
			alert("You must Input N and M");
			i=line.length;
			error = 0;
		}
		else {
			NM = line[i].split(new RegExp("\\s+"));
			if (NM.length==2){
				N = NM[0];
				M = NM[1];
				if ((isNaN(N)==true)||(isNaN(M)==true)){
					alert("N and M are not correct");
					i=linea.length;
					error = 0;
				}
				else {
					if(((N>=1)&&(N<=100))&&((M>=1)&&(M<=1000))){
							validation = i+1;
						if (validation>=line.length){
							alert("You have to input the Queries");
							i=line.length;
							error = 0;
						}
						else {
							i = validateViewQ(line, M, validation, N);
							if (i==(line.length+1)){
								i=line.length;
								error = 0;
							}
							else {
								error = 1;
							}
						}
					}
					else{
						alert("The Values of N and M are not correct");
						i=line.length;
						error = 0;
					}				
				}
			}
			else {
				alert("The Values of N and M are not correct");
				error = 0;
				i=line.length;
			}
		}
		counter ++;
	}
	if (error == 1){
		controller();
	}
}
function validateViewQ(line, M, validation, N) {
	for (i=0;i<M; i++){
		validation=validation+1;
		if ((validation>line.length)){
			alert("The number of Queries is not correct.");
			i=M;
			valViewQ = linea.length+1;
		}
		else {
			viewQ = line[validation-1].split(new RegExp("\\s+"));
			if (((viewQ[0]=="UPDATE")&&(viewQ.length==5))||((viewQ[0]=="QUERY")&&(viewQ.length==7))) {
				if (viewQ[0]=="UPDATE"){
					x=viewQ[1];
					y=viewQ[2];
					z=viewQ[3];
					w=viewQ[4];
					if (((x>=1)&&(y>=1)&&(z>=1))&&((x<=N)&&(y<=N)&&(z<=N))&&((w>=(Math.pow(-10,9)))&&(w<=(Math.pow(10,9))))){
						valViewQ = validation-1;
					}
					else{
						alert("Your Queries are not correct");
						i=M;
						valViewQ = line.length+1;
					}

				}
				else {
					x1=viewQ[1];
					x2=viewQ[4];
					y1=viewQ[2];
					y2=viewQ[5];
					z1=viewQ[3];
					z2=viewQ[6];
					if (((x2>=1)&&(x1<=x2)&&(x2<=N))&&((y2>=1)&&(y1<=x2)&&(y2<=N))&&((z2>=1)&&(z1<=z2)&&(z2<=N))){
						valViewQ = validation-1;
					}
					else{
						alert("Your Queries are not correct");
						i=M;
						valViewQ = line.length+1;
					}
				}
			}
			else {
				alert("Your Queries are not correct");
				i=M;
				valViewQ = line.length+1;
			}
		}
	}
	return valViewQ;
}
function controller() {
	document.caseTest.submit();
}