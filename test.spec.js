describe("sampletests",function(){
    var controller;
    var rootScope;
    var compile;

	beforeEach(module("myApp")); // Load the myApp module

    // underscores are necessary only for $controller
    beforeEach(inject(function(_$controller_,$rootScope,$compile){
        controller = _$controller_;
        rootScope = $rootScope;
        compile = $compile;
    }));

    it('should test StudentMarksCtrl',function(){
    	var $scope = {};
    	var studentMarksCtrl = controller('StudentMarksCtrl',{$scope:$scope});
    	expect($scope.students.length).toEqual(2);
    	expect($scope.students[0].name).toEqual("Peter");
    	expect($scope.students[1].name).toEqual("John");
    });

    it('should test StudentInfoCtrl',function(){
        //NOTE: not so obvious way to set custom scope variable as controller scope
    	var $scope = {};
    	var studentMarksCtrl = controller('StudentInfoCtrl',{$scope:$scope});
    	var info = $scope.showStudentInfo("Kelly",["math:4.50","bio:5.50"]);
    	expect(info).toEqual("Kelly-math:4.50,bio:5.50");
    });

    it('should test UniversityCtrl',(function(){
        //NOTE: more comprehensive way to set custom scope variable as controller scope
        var controllerScope = rootScope.$new();
    	var studentMarksCtrl = controller('UniversityCtrl',{$scope:controllerScope});
    	var info = controllerScope.showUniInfo();
    	expect(info).toEqual("University Name: Software University");
    }));

    it('should test uniaddr directive',function(){
    	$scope = rootScope.$new();
        // $compile the template, and pass in the $scope.
    	var element = compile("<div uniaddr></div>")($scope);

        //element.html() render the template as a string
    	expect(element.html()).toContain("UniAddress: 2258 Shiny Street");
    });

     it('should test factory',inject(function(universityInfo){    	
    	expect(universityInfo).toBe("University Name: Software University");
    }));

});