angular.module('website', ['ngAnimate'])//ngAnimate', 'ngTouch'
    .controller('MainCtrl', function ($scope) {
    	$scope.slides = [
							{ src: 'images/img00.jpg', description: 'love you', href: 'http://www.w3schools.com/css/css_align.asp', title: "love you" },
							{ src: 'images/img02.jpg', description: 'The peanuts movie', href: 'http://wowslider.com/', title: "The peanuts movie" },
							{ src: 'images/img03.jpg', description: 'alvin and the chipmunks', href: 'http://wowslider.com/', title: "alvin and the chipmunks" },
							{ src: 'images/img04.jpg', description: 'wonderful tira', href: 'http://www.w3schools.com/css/css_align.asp', title: "wonderful tira" },
							{ src: 'images/img05.jpg', description: 'independes day:resurgence', href: 'http://sass-lang.com/', title: "independes day:resurgence" },
							{ src: 'images/img06.jpg', description: 'ice age collision course', href: 'http://wowslider.com/', title: "ice age collision course" },
							{ src: 'images/img07.jpg', description: 'not afraid', href: 'http://www.w3schools.com/css/css_align.asp', title: "not afraid" },
							{ src: 'images/img08.jpg', description: 'beatch', href: 'http://sass-lang.com/', title: "beatch" },
							{ src: 'images/img10.jpg', description: 'nice to see', href: 'http://www.w3schools.com/css/css_align.asp', title: "w3schools" },
							{ src: 'images/img16.jpg', description: 'far from here', href: 'http://sass-lang.com/', title: "far from here" },
							
    	];
    	$scope.img = {};//for erase content form if null
    	var images = localStorage["images"]; //take the images from lacal storage
    	if (images != undefined) {
    		var images = JSON.parse(images);
    		$.each(images, function (key, value) {
    			$scope.slides.push({ src: value.src, description: value.description, href: value.href, title: value.title });
    		});
    	}
    	$scope.direction = 'left';
    	$scope.currentIndex = 2; //center image

    	//set the current slide to middle
    	$scope.setCurrentSlideIndex = function (index) {
    		var nummoves = Math.abs(index -2);
    		if (index >2) {//set mooving direction
    			for (var i = 0; i < nummoves; i++) {
    				$scope.slides.push({ src: $scope.slides[0].src, description: $scope.slides[0].description, href: $scope.slides[0].href, title: $scope.slides[0].title });
    				$scope.slides.splice($scope.slides[0], 1);
    				$scope.direction = 'left';
    			}
    		}
    		else if (index < 2) {
    			for (var i = 0; i < nummoves; i++) {
    				$scope.slides.unshift({ src: $scope.slides[$scope.slides.length - 1].src, description: $scope.slides[$scope.slides.length - 1].description, href: $scope.slides[$scope.slides.length - 1].href, title: $scope.slides[$scope.slides.length - 1].title });
    				$scope.slides.splice(($scope.slides.length - 1), 1);
    				$scope.direction = 'right';
    			}
    		}
    		//    				$scope.direction = 'right';
    	};

    	//return true/false for image to show on the slider
    	$scope.isCurrentSlideIndex = function (index) {//
    		return $scope.currentIndex === index;
    	};
    	//delete image
    	$scope.deleteCurrentSlide = function (index) {
    		$scope.slides.splice(index, 1);
    	}
    	//show the prev image in slider
    	$scope.prevSlide = function () {
    		var nummoves = 1

    		for (var i = 0; i < nummoves; i++) {
    			$scope.slides.push({ src: $scope.slides[0].src, description: $scope.slides[0].description, href: $scope.slides[0].href, title: $scope.slides[0].title });
    			$scope.slides.splice($scope.slides[0], 1);
    		}
    		$scope.direction = 'left';
    	}
    	//reset form content inputs
    	$scope.closeDialog = function () {

    		angular.element("input[type='file']").val(null);
    		$scope.img.description = '';
    		$scope.img.title = '';
    		$scope.img.href = '';
    		$scope.showDialog = false;
    	};
    	$scope.nextSlide = function () {//move slide to next image

    		var nummoves = 1
    		for (var i = 0; i < nummoves; i++) {
    			$scope.slides.unshift({ src: $scope.slides[$scope.slides.length - 1].src, description: $scope.slides[$scope.slides.length - 1].description, href: $scope.slides[$scope.slides.length - 1].href, title: $scope.slides[$scope.slides.length - 1].title });
    			$scope.slides.splice(($scope.slides.length - 1), 1);
    		}
    		$scope.direction = 'right';
    	};
    })
    //the slider animation show the chosen image ,moove image using parent width 
    .animation('.slide-animation', function () {
    	return {
    		beforeAddClass: function (element, className, done) {
    			var scope = element.scope();

    			if (className == 'ng-hide') {
    				var finishPoint = element.parent().width();
    				if (scope.direction !== 'right') {
    					finishPoint = -finishPoint;
    				}
    				TweenMax.to(element, 0.5, { left: finishPoint, onComplete: done });
    			}
    			else {
    				done();
    			}
    		},
    		removeClass: function (element, className, done) {
    			var scope = element.scope();

    			if (className == 'ng-hide') {
    				element.removeClass('ng-hide');

    				var startPoint = element.parent().width();
    				if (scope.direction === 'right') {
    					startPoint = -startPoint;
    				}

    				TweenMax.fromTo(element, 0.5, { left: startPoint }, { left: 0, onComplete: done });
    			}
    			else {
    				done();
    			}
    		}
    	};
    })
     

    	.directive('saveDetails', function () {
    		return function ($scope, elm, attrs) {
    			elm.bind('click', function (evt) {
    				$scope.$apply(function () {                //$apply?
    					angular.forEach($scope.files, function (file, key) {
    						if (file.type.match('image.*')) {

    							var reader = new FileReader();

    							// Closure to capture the file information.
    							reader.onload = (function (theFile) {
    								return function (e) {
    									// Render thumbnail.
    									//var span = document.createElement('span');
    									//span.innerHTML = ['<img class="thumb" src="', e.target.result,
    									//     '" title="', escape(theFile.name), '"/>'].join('');
    									//document.getElementById('list').insertBefore(span, null);
    									var images = localStorage["images"]; //get the images from local storage into an object and save the object with the new image in local storage 
    									if (images == undefined)
    										images = [];
    									else {
    										images = JSON.parse(images);
    									}
    									images.push({ src: e.target.result, description: $scope.img.description, title: $scope.img.title, href: $scope.img.href });//הכנסת ערכים שהמשתמש הכניס לתמונה
    									localStorage["images"] = JSON.stringify(images);
    									$scope.slides.push({ src: e.target.result, description: $scope.img.description, title: $scope.img.title, href: $scope.img.href });
    									$scope.closeDialog();
    									$scope.$apply();
    								};
    							})(file);

    							// Read in the image file as a data URL.
    							reader.readAsDataURL(file);

    						}
    					});

    				});
    			});
    		};
    	})


//enter the file to scope
    .directive('filelistBind', function () {
    	return function (scope, elm, attrs) {
    		elm.bind('change', function (evt) {
    			scope.$apply(function () {
    				scope.files = evt.target.files;
    			});
    		});
    	};
    });






