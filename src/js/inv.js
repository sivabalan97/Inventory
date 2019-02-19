// Select Box function
var divisionjson = [
	{
		"division": "Mens"
	},
	{
		"division": "Ladies"
	},
	{
		"division": "Kids"
	},
];
var sectionJson = [
	{
		"division": "Mens",
		"sections": ["Shirt","Trousers","Party Wear","Tracks","Inners","Accessories","Jean Items"]
	},
	{
		"division": "Ladies",
		"sections": ["Tops","Bottoms"," Saree","Chudithar","Choli","Patyala","Weatern Wear"]
	},
	{
		"division": "Kids",
		"sections": ["Shirt","Trousers","Coat","Tracks","Inners","Accessories","Full Set","Party Wear"]
	},
	
]

var divisionHTML = divisionjson.map( elem => `<option value="${elem.division}">${elem.division}</option>`);
$('#division-select').append(divisionHTML);

$('#division-select').on('change' , function(){
	var selectedDivision = sectionJson.find(elem => elem.division === $(this).val());
	var sectionHTML = selectedDivision.sections.map( elem => `<option value="${elem}">${elem}</option>` )
	$('#section-select').html("<option value=''></option>"+sectionHTML);
});


// Tree view function
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
