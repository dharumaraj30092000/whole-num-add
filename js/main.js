var input=4562;
var output=0;
var add=0;
while(inpuut>0){
	var rem=input%10;
	input=(input-rem)/10;
	output=output+rem;
	if(rem%2==0){
		add=add+rem;
	}
}
console.log(output,add); 