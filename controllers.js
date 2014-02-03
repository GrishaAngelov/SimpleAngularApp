
angular.module("myApp",[])

.controller("StudentMarksCtrl",function($scope){
  $scope.students = [
   {name:"Peter",marks:["math:5.60","chemistry:6.00"]},
   {name:"John",marks:["math:4.50","chemistry:5.00"]}
  ];	
})
.controller("StudentInfoCtrl",function($scope){
	$scope.showStudentInfo = function(name,marks){
  		var student = new Student(name,marks);
  		return student.getName()+"-"+student.getMarks();
  	};
})
// used Inferring Dependencies (assume that the function parameter names are the names of the dependencies)
.controller("UniversityCtrl",function(universityInfo,$scope){
	$scope.showUniInfo = function(){
		return universityInfo;
	}
})

.directive('uniaddr',function(){
	return{
		restrict:'A',
		template:'UniAddress: 2258 Shiny Street'
	};
})
// used inline annotation for dependency (function parameter name is different than dependency name)
.factory("universityInfo",['universityName',function universityInfo(uniName){
	return "University Name: "+uniName;
}])
.factory("universityName",function universityName(){
	return "Software University";
});


// acting in the role of class
function Student(name,marks){
   this.studentName = name;
   this.studentMarks = marks;

   this.getName = function(){
   	return this.studentName;
   }

   this.getMarks = function(){
   	return this.studentMarks;
   }
}