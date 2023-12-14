let a=prompt("Enter the string")
let tem=a;
let boo=false

document.write(tem+"<br>")
for(i=0;i<tem.length;i++){
	if(tem[i]!==tem[(tem.length-1)-i]){
		console.log(tem[i],tem[(tem.length-1)-i]);
		boo=true
	}
}
if(boo){
	document.write(tem+" is not a palindrome")

}
else{
	document.write(tem+" is a palindrome")


}