



//returns json object
//passing in service of angular
export function CompareToDirective($parse){
    'ngInject'
    return{
        //samething in html just without the dash
        require: 'ngModel',
        //needs scope of element it is on or the confirm password
        //elm is short for element attrs = attributs of that element
        link: function(scope, elm, attrs, ngModel){
            //passes in the directive to parse
            var mainModel = $parse(attrs.compareTo);
            var secondModel = $parse(attrs.ngModel);

            //$watch looks for changes
            scope.$watch(attrs.ngModel, function(newValue){
                //sets validity based on something
                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
            });
            //checks in the second input field
            scope.$watch(attrs.compareTo, function(newValue){
                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
            });
        }
    }
}