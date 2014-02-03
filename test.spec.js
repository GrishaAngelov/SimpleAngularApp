describe("sampletests",function(){
	beforeEach(module("myApp"));

    it('should test StudentMarksCtrl',inject(function($controller){
    	var $scope = {};
    	var studentMarksCtrl = $controller('StudentMarksCtrl',{$scope:$scope});
    	expect($scope.students.length).toEqual(2);
    	expect($scope.students[0].name).toEqual("Peter");
    	expect($scope.students[1].name).toEqual("John");
    }));

    it('should test StudentInfoCtrl',inject(function($controller){
    	var $scope = {};
    	var studentMarksCtrl = $controller('StudentInfoCtrl',{$scope:$scope});
    	var info = $scope.showStudentInfo("Kelly",["math:4.50","bio:5.50"]);
    	expect(info).toEqual("Kelly-math:4.50,bio:5.50");
    }));

    it('should test UniversityCtrl',inject(function($controller){
    	var $scope = {};
    	var studentMarksCtrl = $controller('UniversityCtrl',{$scope:$scope});
    	var info = $scope.showUniInfo();
    	expect(info).toEqual("University Name: Software University");
    }));

    it('should test uniaddr directive',inject(function($compile,$rootScope){
    	$scope = $rootScope.$new();
    	var element = $compile("<div uniaddr></div>")($scope);
    	$scope.$digest();
    	expect(element.html()).toContain("UniAddress: 2258 Shiny Street");
    }));

     it('should test factory',inject(function(universityInfo){    	
    	expect(universityInfo).toBe("University Name: Software University");
    }));
});